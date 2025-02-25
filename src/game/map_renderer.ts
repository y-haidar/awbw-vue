import type { BuildingsInfo, TerrainInfo, TerrainInfoEntry } from "./game_state";
import { TS_mapThemes, TS_spriteSheet, TS_terrainIdToName, TS_themeIdToName, TS_tileSets, TS_tileShadows } from "./tilesets";

// River tile IDs for each direction
const RIVER_SVC = [5, 6, 7, 8, 11, 12, 14];   // South, Vertical, Cross
const RIVER_EHC = [4, 6, 7, 10, 11, 13, 14];  // East, Horizontal, Cross
const RIVER_WHC = [4, 6, 8, 9, 11, 12, 13];   // West, Horizontal, Cross
const RIVER_NVC = [5, 6, 9, 10, 12, 13, 14];  // North, Vertical, Cross

interface Tile {
    x: number,
    y: number,
    w: number,
    h: number
}

interface MapRendererOptions {
    width: number;
    height: number;
    terrainInfo: TerrainInfo;
    buildingsInfo: BuildingsInfo;
    mapTheme: 1 | 2 | 3 | 4;
    terrainPath: 'terrain/aw1/' | 'terrain/ani/';
    weather: 'clear' | 'rain' | 'snow';
    shoals: string | 'new';
}

/* Canvas based map rendering
 * @class
 */
export class MapRenderer {
    _terrainInfo: TerrainInfo;
    _buildingsInfo: BuildingsInfo;
    _width: number;
    _height: number;
    _weather: 'clear' | 'rain' | 'snow';
    _newShoals: boolean;

    _promiseSpriteSheet: Promise<undefined> | null = null;
    _spriteSheet: HTMLImageElement | null = null;
    _terrainPath: 'terrain/aw1/' | 'terrain/ani/';
    _mapTheme: number;

    /** 1d array of tiles */
    _tiles: Array<Tile>;
    /** 1d array of tiles that contain shadow */
    _shadowTiles: Array<Tile>;
    /** If true, rebuild _tiles array on render or when calling _cacheTiles */
    _tilesDirty: boolean = true;

    /** Map from tile name to sprite coords for current theme/weather */
    _tileMap: Record<string, Tile> | null = null;
    /** Map from tile name to sprite coords for current theme/weather */
    _shadowMap: Record<string, Tile> | null = null;

    _canvas: HTMLCanvasElement | null = null;
    _context2d: CanvasRenderingContext2D | null = null;
    _animFrame: number | null = null;

    /* MapRenderer constructor
     * @param {object} terrainInfo - 2d array/integer keyed object with objects containing terrain_id, [x][y] indexed
     * @param {number} width - number of tiles on X axis
     * @param {number} height - number of tiles on Y axis
     * @param {object} buildings - 2d array/integer keyed object with objects containing terrain_id, [x][y] indexed, for building shadows
     * @param {number} mapTheme - map themes id
     * @param {string} terrainPath - path to tileset, 'terrain/aw1/'
     * @param {string} weather - weather name
     * @param {string} shoals - classic or new shoals
     */
    constructor(
        { width, height,
            terrainInfo,
            buildingsInfo,
            mapTheme = 2,
            terrainPath = 'terrain/aw1/',
            weather = 'clear',
            shoals = 'new'
        }: MapRendererOptions
    ) {
        this._terrainInfo = terrainInfo;
        this._buildingsInfo = buildingsInfo;
        this._width = width;
        this._height = height;
        this._weather = weather;
        this._newShoals = shoals === 'new';

        this._terrainPath = terrainPath;
        this._mapTheme = mapTheme;
        // 1d array of tiles
        this._tiles = new Array(width * height);
        this._shadowTiles = new Array(width * height);

        this._renderCanvas = this._renderCanvas.bind(this);

        this.getSpriteSheet();
        this.setTheme({});
    }

    setWeather(weather: 'clear' | 'rain' | 'snow') {
        this._weather = weather;
        this._updateTilemap();
        this.render();
        return this;
    }

    setWidth(width: number) {
        this.setSize(width, this._height);
        return this;
    }
    setHeight(height: number) {
        this.setSize(this._width, height);
        return this;
    }
    setSize(width: number, height: number) {
        this._tilesDirty = true;
        this._width = width;
        this._height = height;
        this._tiles = new Array(width * height);
        this._shadowTiles = new Array(width * height);
        if (this._canvas) {
            this._canvas.width = width * 16;
            this._canvas.height = height * 16;
        }
        return this;
    }

    setTheme({ terrainPath = this._terrainPath, mapTheme = this._mapTheme } = {}) {
        if (terrainPath && mapTheme !== undefined) {
            this._terrainPath = terrainPath;
            if (mapTheme == 1) { mapTheme = 2; }

            TS_themeIdToName[2];
            if (mapTheme > 4 || mapTheme < 1) mapTheme = 2;
            // if (!TS_themeIdToName[mapTheme]) { mapTheme = 2; }
            this._mapTheme = mapTheme;
            this._updateTilemap();
        } else {
            throw new Error("setTheme requires terrainPath and mapTheme");
        }

        this.render();
        return this;
    }

    setShoalDisplay(shoals = 'new') {
        this._newShoals = shoals === 'new';
        this._tilesDirty = true;
        this.render();
        return this;
    }

    setTerrainInfo(terrainInfo: TerrainInfo) {
        this._terrainInfo = terrainInfo;
        this._tilesDirty = true;
        return this;
    }

    // used by map editor, updates surrounding tiles (sea,shoal)
    setTile(x: number, y: number, tileId: number) {
        this._terrainInfo[x]![1]!.terrain_id = tileId;

        for (let bx = Math.max(0, x - 1); bx <= Math.min(this._width - 1, x + 1); bx++) {
            for (let by = Math.max(0, y - 1); by <= Math.min(this._height - 1, y + 1); by++) {
                const name = this.getTileName(bx, by);
                if (!name) continue;
                const index = bx + by * this._width;
                this._tiles[index] = this._tileMap![name]!;
            }
        }
        if (!TS_terrainIdToName[tileId]) return;
        this._shadowTiles[x + y * this._width] = this._shadowMap?.[TS_terrainIdToName[tileId]]!;
        return this;
    }

    _updateTilemap() {
        const themeName = TS_themeIdToName[this._mapTheme]!;
        if (this._mapTheme == 2) {
            this._tileMap = TS_tileSets[this._terrainPath][this._weather];
            this._shadowMap = TS_tileShadows[this._terrainPath];
        } else if (themeName in TS_mapThemes) {
            // @ts-ignore ... sad, but doing
            // themeName == "Days of Ruin" || themeName == "Desert")
            // is not the same, is that does not account future addition
            // TODO: maybe make this a record
            let theme = TS_mapThemes[themeName].terrain;
            // @ts-ignore // TODO: maybe make this a record
            this._tileMap = Object.assign({}, TS_tileSets[this._terrainPath][this._weather], TS_tileSets[theme][this._weather]);
            // @ts-ignore // TODO: maybe make this a record
            this._shadowMap = Object.assign({}, TS_tileShadows[this._terrainPath], TS_tileShadows[theme]);
        } else {
            throw new Error(`Invalid map theme ${this._mapTheme}`);
        }
        this._tilesDirty = true;
        this._cacheTiles();
    }

    initCanvas(canvasEl: HTMLCanvasElement | string) {
        let canvas: HTMLCanvasElement;
        if (canvasEl) {
            if (typeof canvasEl === 'string') {
                canvas = document.querySelector(canvasEl) as HTMLCanvasElement;
            } else {
                canvas = canvasEl;
            }
        } else {
            throw new Error("initCanvas requires canvas element");
        }

        canvas.width = this._width * 16;
        canvas.height = this._height * 16;

        this._canvas = canvas;
        this._context2d = canvas.getContext('2d', { alpha: false, antialias: false })! as CanvasRenderingContext2D;
        this._context2d!.imageSmoothingEnabled = false;

        this._animFrame = requestAnimationFrame(this._renderCanvas);
        return this;
    }

    getSpriteSheet() {
        if (this._promiseSpriteSheet) { return this._promiseSpriteSheet; }
        const img = new Image();
        img.src = TS_spriteSheet;
        img.addEventListener('load', () => {
            this._spriteSheet = img;
        });
        img.addEventListener('error', () => {
            console.log("Couldn't load sprite sheet.");
            // TODO: check if need to add a boolean in `this`
        });
        // return this._promiseSpriteSheet = new Promise((resolve, reject) => {
        //     const img = new Image();
        //     img.src = TS_spriteSheet;
        //     img.onload = (e) => {
        //         this._spriteSheet = img;
        //         // why is this necessary?
        //         // resolve(this._spriteSheet);
        //     }
        //     img.onerror = () => {
        //         reject("Couldn't load sprite sheet.");
        //     }
        // });
    }

    _cacheTiles() {
        if (!this._tilesDirty) {
            return;
        }
        this._tilesDirty = false;

        for (let y = 0; y < this._height; y++) {
            for (let x = 0; x < this._width; x++) {
                let name = this.getTileName(x, y);
                if (!name) continue;
                this._tiles[x + y * this._width] = this._tileMap![name]!;

                let building = this._buildingsInfo[x]?.[y];
                if (building) {
                    let id = building.terrain_id;
                    if (!TS_terrainIdToName[id]) return;
                    this._shadowTiles[x + y * this._width] = this._shadowMap?.[TS_terrainIdToName[id]]!;
                } else {
                    this._shadowTiles[x + y * this._width] = this._shadowMap?.[name]!;
                }
            }
        }
    }

    getTile(x: number, y: number) {
        return this._tiles[x + y * this._width];
    }

    drawSprite(sprite: Tile, x: number, y: number) {
        this._context2d!.drawImage(
            this._spriteSheet!,
            sprite.x, sprite.y,
            sprite.w, sprite.h,
            x, y,
            sprite.w, sprite.h);
    }

    _renderCanvas() {
        this._cacheTiles();
        if (!this._spriteSheet) {
            this._animFrame = requestAnimationFrame(this._renderCanvas);
            return;
        }

        const plain = this._tileMap?.['plain']!;
        for (let y = 0; y < this._height; y++) {
            for (let x = 0; x < this._width; x++) {
                this.drawSprite(plain, x * 16, y * 16);

                const sprite = this.getTile(x, y);
                // If a tile casts a shadow, draw it over shadows
                if (!sprite || this._shadowTiles[x + y * this._width])
                    continue;
                const offset = sprite.h - 16;
                this.drawSprite(sprite, x * 16, y * 16 - offset);
            }
            for (let x = 0; x < this._width; x++) {
                let shadow = this._shadowTiles[x + y * this._width];
                if (shadow) {
                    this._context2d!.globalAlpha = 0.16;
                    this.drawSprite(shadow, x * 16, y * 16);
                    this._context2d!.globalAlpha = 1;
                    const sprite = this.getTile(x, y);
                    if (!sprite) continue;
                    const offset = sprite.h - 16;
                    this.drawSprite(sprite, x * 16, y * 16 - offset);
                }
            }
        }

        if (this._weather === 'rain' && this._mapTheme != 2) {
            //this._canvas.style.filter = 'hue-rotate(7deg) saturate(60%) brightness(1.05)';
            this._context2d!.fillStyle = 'rgba(0,40,150,0.1)';
            this._context2d!.fillRect(0, 0, this._canvas!.width, this._canvas!.height);
            //this._canvas.style.filter = '';
        }
    }

    render() {
        if (this._canvas) {
            cancelAnimationFrame(this._animFrame!);
            this._animFrame = requestAnimationFrame(this._renderCanvas);
        }
        return this;
    }

    /* Draw a tile to a canvas, returns canvas element.
     * @param {string} name - tiles name 'plain' 'acidrainbase' etc.
     * @param {HTMLCanvasElement} [canvasEl] - optional canvas to draw on, creates new if undefined
     * @returns {HTMLCanvasElement}
     */
    drawTileImage(name: string, canvasEl: HTMLCanvasElement) {
        if (!canvasEl) { canvasEl = document.createElement('canvas'); }
        if (!this._spriteSheet) { return canvasEl; }
        if (name === 'sea') { name += '0'; }
        if (!this._tileMap) return;
        const plain = this._tileMap['plain']!;
        const sprite = this._tileMap[name];
        if (!sprite) return;
        canvasEl.width = sprite.w;
        canvasEl.height = sprite.h;
        const ctx = canvasEl.getContext('2d', { alpha: true, antialias: false }) as CanvasRenderingContext2D;
        ctx.drawImage(this._spriteSheet, plain.x, plain.y, 16, 16,
            0, sprite.h - 16, 16, 16);
        ctx.drawImage(this._spriteSheet, sprite.x, sprite.y, sprite.w, sprite.h,
            0, 0, 16, sprite.h);
        return canvasEl;
    }

    getTileName(x: number, y: number) {
        let tid = this._terrainInfo[x]?.[y]?.terrain_id!;
        let tile = this.getSea(tid, x, y)
            || this.getShoal(tid, x, y)
            || this.getMountain(tid, x, y)
            || TS_terrainIdToName[tid];
        return tile;
    }

    isBuilding(id: number) {
        return (id >= 34 && id <= 100)
            || (id >= 111 && id <= 114)
            || (id >= 117 && id <= 194)
            || (id >= 196)
    }

    getMountain(tid: number, x: number, y: number) {
        if (tid === 2) {
            let up = this._buildingsInfo[x]?.[y - 1]?.terrain_id;
            let terrain = this._terrainInfo[x]?.[y - 1];
            if (!terrain) return;
            if (up || this.isBuilding(terrain.terrain_id)) {
                return 'minimountain';
            } else {
                return 'mountain';
            }
        }
        return false;
    }

    getSea(tid: number, x: number, y: number) {
        if (tid === 28) {
            let total = 0;
            let xl = x - 1,
                xr = x + 1,
                yt = y - 1,
                yb = y + 1;
            let border = [
                [xl, yt], // top left
                [x, yt],  // top 
                [xr, yt], // top right
                [xr, y],  // right
                [xr, yb], // bottom right
                [x, yb],  // bottom
                [xl, yb], // bottom left
                [xl, y],  // left
            ] as const;
            for (let k = 0; k <= 7; k++) {
                let [bx, by] = border[k]!,
                    bTile = this._terrainInfo[bx]?.[by] || this._buildingsInfo[bx]?.[by],
                    id = bTile?.terrain_id || 32;
                if ((id >= 26 && id <= 33) || id === 195) { // sea reef bridge shoal teleport
                    continue;
                } else if (id >= 4 && id <= 14) { // rivers
                    if (k === 1 && RIVER_SVC.includes(id)) {
                        total |= 0x05;
                    } else if (k === 3 && RIVER_WHC.includes(id)) {
                        total |= 0x14;
                    } else if (k === 5 && RIVER_NVC.includes(id)) {
                        total |= 0x50;
                    } else if (k === 7 && RIVER_EHC.includes(id)) {
                        total |= 0x41;
                    } else {
                        total |= 1 << k;
                    }
                } else {
                    total |= 1 << k;
                }
            }
            total &= ~(((total << 1) | (total >> 1) | (total >> 7)) & 0x55);
            return 'sea' + total;
        }
        return false;
    }

    getShoal(tid: number, x: number, y: number) {
        if (tid >= 29 && tid <= 32) {
            if (!this._newShoals) {
                // classic shoals
                let xl = Math.max(x - 1, 0),
                    xr = Math.min(x + 1, this._width - 1),
                    yu = Math.max(y - 1, 0),
                    yd = Math.min(y + 1, this._height - 1);

                function land(t: TerrainInfoEntry) {
                    if (!t) { return true; } // building
                    const id = t.terrain_id;
                    // shoal reef sea river teleport bridge
                    if ((id >= 4 && id <= 14)
                        || (id >= 28 && id <= 33)
                        || (id === 26 || id === 27)
                        || id === 195
                    ) {
                        return false;
                    }
                    return true;
                }
                let tiles = this._terrainInfo;
                let left = land(tiles[xl]?.[y]!),
                    right = land(tiles[xr]?.[y]!),
                    up = land(tiles[x]?.[yu]!),
                    down = land(tiles[x]?.[yd]!);

                let shoal: string;
                if (right && up) {
                    shoal = "shoalsw";
                } else if (right && down) {
                    shoal = "shoalwn";
                } else if (left && up) {
                    shoal = "shoales";
                } else if (left && down) {
                    shoal = "shoalne";
                } else {
                    shoal = TS_terrainIdToName[tid]!;
                }
                return shoal;
            }
            let total = 0;
            let xl = x - 1,
                xr = x + 1,
                yt = y - 1,
                yb = y + 1;
            let border = [
                [x, yt], // top
                [xl, y], // left
                [xr, y], // right
                [x, yb], // bottom
            ] as const;
            for (let k = 0; k <= 3; k++) {
                let [bx, by] = border[k]!,
                    bTile = this._terrainInfo[bx]?.[by],
                    id = bTile?.terrain_id || 0,
                    tval = 2;
                if (!bTile) {
                    if ((bx < 0 || bx >= this._width)
                        || (by < 0 || by >= this._height)) {
                        tval = 0;
                    }
                } else if (id === 28 || id === 33) { // sea or reef
                    tval = 0;
                } else if (id >= 4 && id <= 14) { // rivers
                    tval = 2;
                    if (k === 0 && RIVER_SVC.includes(id)) {
                        tval = 1;
                    } else if (k === 1 && RIVER_EHC.includes(id)) {
                        tval = 1;
                    } else if (k === 2 && RIVER_WHC.includes(id)) {
                        tval = 1;
                    } else if (k === 3 && RIVER_NVC.includes(id)) {
                        tval = 1;
                    }
                } else if (id === 26) { // hbridge
                    if (k === 0 || k === 3) {
                        tval = 1;
                    }
                } else if (id === 27) { // vbridge
                    if (k === 1 || k === 2) {
                        tval = 1;
                    }
                } else if ((id >= 29 && id <= 32) || id === 195) { // shoal or tele
                    tval = 1;
                }
                total += Math.pow(3, k) * tval;
            }
            return 'shoal' + total;
        }
        return false;
    }
}

