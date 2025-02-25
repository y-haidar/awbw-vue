import { computed, reactive } from "vue";
import { playersInfo } from "./game_state_demo";

export const gameStore = reactive({
    playersInfo,
    playersIfnoActions: {},
});

/** The current power needed to fill a star  */
export const CopStarsWorth = computed(() => {
    let rtv: Record<string | number, number> = {};
    for (const player_id of Object.keys(gameStore.playersInfo)) {
        const player = gameStore.playersInfo[player_id]!;
        const playerSCOP = player.players_co_max_spower / 10;
        const coSCOP = player.co_max_spower / 10;
        const starWorth = playerSCOP / coSCOP * 9000;
        rtv[player_id] = starWorth;
    }
    return rtv;
});

export const CopStarsCount = (() => {
    let rtv: Record<string | number, { copStarsCount: number, scopStarsCount: number, totalStarCount: number }> = {};
    for (const player_id of Object.keys(gameStore.playersInfo)) {
        // let starWorth = CopStarsWorth.value[player_id]!;
        const copStarCount = gameStore.playersInfo[player_id]!.co_max_power / 90000;
        const scopStarCount = (gameStore.playersInfo[player_id]!.co_max_spower / 90000) - copStarCount;
        rtv[player_id] = { copStarsCount: copStarCount, scopStarsCount: scopStarCount, totalStarCount: copStarCount + scopStarCount };
    }

    return rtv;
})();

// testing store reactivity
// setTimeout(() => {
//     gameStore.playersInfo[3188637]!.players_co_power += 10;
// }, 3000);

// ============================= These are just for documentation purposes
/** type is always string, but add `number` for convinece, as it is used as key */
type PlayerId = string | number;
// type PlayerName = string;
/** type is always string, but add `number` for convinece, as it is used as key */
type UnitId = string | number;
/** Just don't use this... */
type UnitIdNumber = number;
// =============================

export type UnitName = "Infantry" | "Mech" | "Recon" | "T-Copter" | "APC" | "Artillery" | "Tank" | "Black Boat" | "Anti-Air" | "B-Copter" | "Lander" | "Missile" | "Rocket" | "Md.Tank" | "Cruiser" | "Sub" | "Fighter" | "Piperunner" | "Neotank" | "Bomber" | "Stealth" | "Black Bomb" | "Battleship" | "Mega Tank" | "Carrier";

export type GenericUnuts = Record<UnitName, GenericUnitsEntry>;

/** 
 * Record<X_Index, Recrod<Y_Index, BuildingsInfo
 * 
 * If encountered `[X][Y] === undefined` then assume the tile is a terrain.
 * 
 * If encountered `[X] === []` then no terrain in that column, and every tile is a building.
 * 
 * Usage:
 * 
 * ```js
 * if (buildingsInfo[x][y]) { 
 *    // A building is present on that tile
 *  }
 * ```
 * */
export type BuildingsInfo = Record<number, Record<number, BuildingsInfoEntry> | BuildingsInfoEntry[]>;

/** 
 * Record<X_Index, Recrod<Y_Index, TerrainInfoEntry
 * 
 * If encountered `[X][Y] === undefined` then assume the tile is a building.
 * 
 * If encountered `[X] === []` then no building in that column, and every tile is a terrain.
 *  
 * Usage:
 * 
 * ```js
 * if (terrainInfo[x][y]) { 
 *    // A terrain is present on that tile
 *  }
 * ```
 * */
export type TerrainInfo = Record<number, Record<number, TerrainInfoEntry> | TerrainInfoEntry[]>;

export type PlayersInfo = Record<PlayerId, PlayersInfoEntry>;

/** 
 * Record<X_Index, Recrod<Y_Index, TerrainInfoEntry
 * 
 * If encountered `[X][Y] === undefined` then no unit on tile.
 * 
 * If encountered `[X] === []` there is a unit on every tile in that column.
 * 
* Usage:
 * 
 * ```js
 * if (unitMap[x][y]) { 
 *    // A unit is present on that tile
 *  }
 * ```
 * */
export type UnitMap = Record<number, Record<number, UnitMapEntry> | UnitMapEntry[]>;

export type UnitsInfo = Record<UnitId, UnitsInfoEntry>;

export type PlayersUnits = Record<PlayerId, Record<UnitId, UnitIdNumber>>;

export type BanUnits = Record<UnitName, number>;

export type PlayersUnitCount = Record<PlayerId, PlayersUnitCountEntry>;

// =============================
// =============================
// =============================

export interface GenericUnitsEntry {
    units_id: number;
    units_name: UnitName;
    units_movement_points: number;
    units_vision: number;
    units_fuel: number;
    units_fuel_per_turn: number;
    units_sub_dive: string;
    units_ammo: number;
    units_short_range: number;
    units_long_range: number;
    units_second_weapon: string;
    units_symbol: string;
    units_cost: number;
    units_movement_type: string;
    units_hit_points: number;
    units_cargo1_units_id: number;
    units_cargo2_units_id: number;
    units_carried: string;
}

export interface BuildingsInfoEntry {
    buildings_capture: number;
    buildings_id: number;
    buildings_games_id: number;
    buildings_last_capture: number;
    buildings_last_updated: string;
    buildings_players_id: number | "";
    buildings_team: string;
    buildings_x: number;
    buildings_y: number;
    countries_code: string | null;
    countries_id: number | null;
    countries_name: string | null;
    terrain_defense: number;
    terrain_id: number;
    terrain_name: string;
    is_occupied: boolean;
};

export interface PlayersInfoEntry {
    users_username: string;
    players_id: number;
    players_team: string;
    players_countries_id: number;
    players_eliminated: string;
    players_co_id: number;
    co_name: string;
    co_max_power: number;
    co_max_spower: number;
    players_co_power: number;
    players_co_power_on: string;
    players_co_max_power: number;
    players_co_max_spower: number;
    players_co_image: string;
    players_funds: number;
    countries_code: string;
    countries_name: string;
    numProperties: number;
    cities: number;
    labs: number;
    towers: number;
    other_buildings: number;
    players_turn_clock: number;
    players_turn_start: string;
    players_order: number;
    players_income: number;
};

export interface TerrainInfoEntry {
    tiles_id: number;
    tiles_maps_id: number;
    tiles_terrain_id: number;
    tiles_x: number;
    tiles_y: number;
    tiles_type: string | "T";
    terrain_id: number;
    terrain_name: string;
    terrain_defense: number;
    terrain_symbol: string;
    terrain_country_code: string | "";
    terrain_build_type: string | "" | null;
    terrain_active: string | "Y";
    terrain_offset: number;
};

export interface UnitMapEntry {
    team: string;
    units_id: number;
};

export interface UnitsInfoEntry {
    units_id: number;
    units_games_id: number;
    units_players_id: number;
    units_name: string;
    units_movement_points: number;
    units_vision: number;
    units_fuel: number;
    units_fuel_per_turn: number;
    units_sub_dive: string;
    units_ammo: number;
    units_short_range: number;
    units_long_range: number;
    units_second_weapon: string;
    units_cost: number;
    units_movement_type: string;
    units_x: number;
    units_y: number;
    units_moved: number;
    units_capture: number;
    units_fired: number;
    units_hit_points: number;
    units_cargo1_units_id: number;
    units_cargo2_units_id: number;
    units_carried: string;
    countries_code: string;
    generic_id: number;
};

export interface PlayersUnitCountEntry {
    total: number;
    value: number;
    count: Partial<Record<UnitName, number>>;
};
