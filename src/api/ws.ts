import type { coInfo } from "@/game/co_info";
import type { BuildingsInfoEntry, UnitName, UnitsInfoEntry, Weather } from "@/game/game_state";

const wsServerBranch: string = "node";
const wsUrl: string = "wss://awbw.amarriner.com";
// declare const wsServerBranch: string; // = "node";
// declare const wsUrl: string; // = "wss://awbw.amarriner.com";

export const wsGameUrl = (gameId: number) => `${wsUrl}/${wsServerBranch}/game/${gameId}`;

// =================
// = WebSocket API =
// =================

type PlayerId = number;
type UnitId = number;
type BuildingId = number;

// =================
// = Request Types =
// =================

/** `y * maxX + x` */
export type Tile1DIndex = number;

export interface BuildReqData {
    action: "Build",
    playerID: PlayerId,
    unitID: UnitId,
    buildingID: BuildingId
}

/** Unit Action Requests */

export interface MoveReqData {
    action: "Move",
    /** `y * maxX + x` */
    path: Tile1DIndex
    playerID: PlayerId,
    unitID: UnitId
}

export interface CaptureReqData {
    action: "Capt",
    playerID: PlayerId,
    unitID: UnitId,
    /** `y * maxX + x` */
    path: Tile1DIndex
}

export interface AttackReqData {
    action: "Fire",
    attacker: {
        playerID: PlayerId,
        unitID: UnitId,
        /** `y * maxX + x` */
        path: Tile1DIndex
    },
    defender: {
        playerID: PlayerId,
        unitID: UnitId
    }
}

export interface AttackSeamReqData {
    action: "AttackSeam",
    attacker: {
        playerID: PlayerId,
        unitID: UnitId,
        /** `y * maxX + x` */
        path: Tile1DIndex
    },
    seamID: number
}

export interface WaitReqData {
    action: "Wait",
    playerID: PlayerId,
    unitID: UnitId
}

export interface DeleteReqData {
    action: "Delete",
    playerID: PlayerId,
    unitID: UnitId
}

export interface JoinReqData {
    action: "Join",
    joinID: UnitId,
    /** `y * maxX + x` */
    path: Tile1DIndex
    playerID: PlayerId
}

export interface LoadReqData {
    action: "Load",
    playerID: PlayerId,
    loadID: UnitId,
    transportID: UnitId,
    /** `y * maxX + x` */
    path: Tile1DIndex
}

export interface UnloadReqData {
    action: "Unload",
    playerID: PlayerId,
    unitID: UnitId,
    dropX: number,
    dropY: number
}

export interface SupplyReqData {
    action: "Supply",
    /** `y * maxX + x` */
    path: Tile1DIndex
    playerID: PlayerId,
    unitID: UnitId
}

export interface RepairReqData {
    action: "Repair",
    playerID: PlayerId,
    targetID: UnitId,
    unitID: UnitId,
    /** `y * maxX + x` */
    path: Tile1DIndex
}

export interface UnhideReqData {
    action: "Unhide",
    /** `y * maxX + x` */
    path: Tile1DIndex
    playerID: PlayerId,
    unitID: UnitId
}

export interface HideReqData {
    action: "Hide",
    /** `y * maxX + x` */
    path: Tile1DIndex
    playerID: PlayerId,
    unitID: UnitId
}

export interface SiloReqData {
    action: "Launch",
    playerID: PlayerId,
    /** Silo launch target location */
    targetX: number,
    /** Silo launch target location */
    targetY: number,
    unitId: UnitId,
    /** Unit location, should match silo location */
    unitX: number,
    /** Unit location, should match silo location */
    unitY: number,
    /** `y * maxX + x` */
    path: Tile1DIndex
}

export interface ExplodeReqData {
    action: "Explode",
    /** `y * maxX + x` */
    path: Tile1DIndex
    playerID: PlayerId,
    unitID: UnitId
}

/** Interface Related Requests */

export interface COPReqData {
    action: "Power",
    coName: keyof typeof coInfo,
    playerID: PlayerId
}

export interface FollowReqData {
    action: "Follow",
    gameId: number
}

export interface EndTurnReqData {
    action: "End",
    playerID: PlayerId,
}

export interface LeaveRoomReqData {
    action: "LeaveRoom"
}

export interface PingReqData {
    action: "Ping"
}

export interface PauseReqData {
    action: "Pause",
    playerID: PlayerId
}

export interface DrawReqData {
    action: "SetDraw",
    playerID: PlayerId,
    setDraw: boolean
}

export interface ResignReqData {
    action: "Resign",
    password: string,
    playerID: PlayerId
}

// ================
// = Common Types =
// ================

export interface Discovered {
    buildings: {
        buildings_x: number,
        buildings_y: number,
        buildings_players_id: PlayerId,
        buildings_id: BuildingId,
    },
    units: UnitsInfoEntry[],
}

/** look at `showEndGameScreen` in `game.js`. */
export interface GameOver {
    gameEndDate: string,
    winners: PlayerId[],
    losers: PlayerId[],
    day: number,
    message: string,
}

// ==================
// = Response Types =
// ==================
// Look at `actionHandlers` in `game.js`.

export interface JoinRoomResData {
    action: "JoinRoom",
    connectedCount: number,
    playerId: PlayerId
}

export interface LeaveRoomResData {
    action: "LeaveRoom",
    connectedCount: number,
    playerId: PlayerId
}

export interface FireResData {
    action: "Fire",
    copValues: {
        attacker: {
            playerId: PlayerId,
            copValue: number,
            tagValue: number | null
        },
        defender: {
            playerId: PlayerId,
            copValue: number,
            tagValue: number | null
        }
    },
    attacker: {
        units_ammo: number,
        units_hit_points: number,
        units_id: UnitId,
        units_x: number,
        units_y: number
    },
    defender: {
        units_ammo: number,
        units_hit_points: number,
        units_id: UnitId,
        units_x: number,
        units_y: number
    }
}

// TODO: AttackSeam

export interface MoveResData {
    action: "Move",
    path: {
        unit_visible: boolean,
        x: number,
        y: number
    }[],
    unit: UnitsInfoEntry,
    trapped: boolean,
    discovered: Discovered,
}

export interface CaptResData {
    action: "Capt",
    buildingInfo: BuildingsInfoEntry,
    // TODO: Check types
    discovered: Discovered,
    // eliminated: EliminatedInfoEntry,
    // newIncome: NewIncomeInfoEntry
}

export interface BuildResData {
    action: "Build",
    newUnit: UnitsInfoEntry,
    // TODO: Check types
    discovered: Discovered
}

export interface LoadResData {
    action: "Load",
    transportId: UnitId,
    loadedId: UnitId,
    // TODO: maybe there are other fields?
}

export interface UnloadResData {
    action: "Unload",
    transportId: UnitId,
    unloadedUnit: {
        units_id: UnitId,
        units_players_id: PlayerId,
        units_x: number,
        units_y: number
    },
    discovered: Discovered,
    // TODO: maybe there are other fields?
}

export interface SupplyResData {
    action: "Supply",
    suppliedIds: UnitId[]
}

export interface RepairResData {
    action: "Repair",
    unitId: UnitId,
    repairedUnit: {
        units_id: UnitId,
        units_hit_points: number,
        // TODO: maybe there are other fields?
    },
    funds: number,
    // TODO: maybe there are other fields?
}

export interface HideResData {
    action: "Hide",
    unitId: UnitId,
    vision: boolean,
    // TODO: maybe there are other fields?
}

export interface UnhideResData {
    action: "Unhide",
    /** not sure why the site did this:
     * 
     * ```js
     * unit.units_sub_dive = "N";
     * ```
     * 
     * look at `unhideUnit` in `game.js`.
     */
    unit: UnitsInfoEntry,
    // TODO: maybe there are other fields?
}

export interface JoinResData {
    action: "Join",
    playerId: PlayerId,
    joinId: UnitId,
    joinedUnit: {
        units_id: UnitId,
        units_hit_points: number
        units_x: number,
        units_y: number,
        // TODO: maybe there are other fields?
    },
    newFunds?: number,
    // TODO: maybe there are other fields?
}

export interface DeleteResData {
    action: "Delete",
    deletedId: UnitId,
    eliminated: boolean
    // TODO: maybe there are other fields?
}

export interface ExplodeResData {
    action: "Explode",
    explosionX: number,
    explosionY: number,
    unitId: UnitId,
    // TODO: maybe there are other fields?
}

export interface LaunchResData {
    action: "Launch",
    siloX: number,
    siloY: number,
    targetX: number,
    targetY: number,
    unitId: UnitId,
    // TODO: maybe there are other fields?
}

export interface NextTurnResData {
    action: "NextTurn",
    nextPId: PlayerId,
    swapCos: boolean,
    day: number,
    nextWeather: keyof Weather,
    repaired: {
        units_id: UnitId,
        units_hit_points: number,
        // TODO: maybe there are other fields?
    }[],
    supplied: UnitId[],
    /** Seconds: `string`
     * 
     * ```js
     * const nextSeconds = parseInt(NextTurnResData.nextTimer);
     * playersInfo[NextTurnResData.nextPId].players_turn_clock = nextSeconds;
     * ```
     */
    nextTimer: string,
    /** `YYYY-MM-DD HH:MM:SS` 
     * 
     * ```js
     * playersInfo[NextTurnResData.nextPId].players_turn_start = NextTurnResData.nextTurnStart;
     * ```
     */
    nextTurnStart: string
    nextFunds: number,
}

export interface EliminationResData {
    action: "Elimination",
    playerId: PlayerId,
    message: string,
    GameOver: GameOver,
    NextTurn: NextTurnResData,
    eliminatedByPId: PlayerId,
}

export interface PowerResData {
    action: "Power",
    unitReplace?: {

        /**
         * Look at `powerHandler` in `game.js`.
         * Replace `unitsInfo` props.
         */
        units: Record<string, unknown>[],
    },
    hiddenReplace?: {
        /**
         * Look at `powerHandler` in `game.js`.
         * Replace `unitsInfo` props.
         */
        units: Record<string, unknown>[],
    },
    /**
     * Look at `powerHandler` in `game.js`.
     * Replace `playersInfo` props.
     */
    playerReplace?: Record<string, unknown>[],
    /**
     * Look at `powerHandler` in `game.js`.
     * 
     * Only for `Sensei`.
     */
    unitAdd: {
        units: UnitsInfoEntry[],
        unitName: "Infantry" | "Mech",
    },
    weatherReplace: {
        weatherCode: keyof Weather,
        // TODO: maybe there are other fields?
    },
    discovered: Discovered,
    /**
     * Look at `powerHandler` in `game.js`.
     */
    hpChange: {
        hpGain: { hp: number },
        hpLoss: {
            players: PlayerId[],
            units_fuel: number,
            hp: number,
        },
    },
    /**
     * Look at `powerHandler` in `game.js`.
     * Replace `unitInfo` props, but only for the player that used the power.
     */
    global?: Record<string, unknown>[],
    playerId: PlayerId,
    /**
     * Look at `PlayersInfoEntry.players_co_power_on`.
     * 
     * - `"Y"` -> Power is active.
     * - `"S"` -> Super power is active.
    */
    coPower: "Y" | "S",
    /**
     * Look at `PlayersInfoEntry.players_co_power`.
     */
    coName: keyof typeof coInfo,
    copValue: number,
    missileCoords: [{ x: number, y: number }],
    // TODO: maybe there are other fields?
}

export interface SetDrawResData {
    action: "SetDraw",
    GameOver: GameOver,
    displayWarning: boolean,
    warningText: string,
    // TODO: maybe there are other fields?
}

export interface ResignResData {
    action: "Resign",
    playerId: PlayerId,
    eliminatedByPId: PlayerId,
    message: string,
    GameOver: GameOver,
    NextTurn: NextTurnResData,
    // TODO: maybe there are other fields?
}

export interface FollowResData {
    action: "Follow",
    nFollows: number,
    // TODO: maybe there are other fields?
}

export interface PauseResData {
    action: "Pause",
    timerPaused: boolean,
    /** `YYYY-MM-DD HH:MM:SS` 
     * 
     * ```js
     * playersInfo[currentTurn].players_turn_start = nextTurnStart;
     * ```
     */
    newTurnStart: string,
    displayWarning: boolean,
    warningText: string,
    warningBtnText: string,
    // TODO: maybe there are other fields?
}

export interface BootAETResData {
    action: "BootAET",
    playerId: PlayerId,
    // TODO: maybe there are other fields?
}

/**
 * 
 * You are to call `api/game/fetch_game_viewer_data.php`, and you will receive a `GameOver` object.
 * Look at `gameOverHandler` in `game.js`.
 */
export interface GameOverResData {
    action: "GameOver",
    // TODO: maybe there are other fields?
}

/**
 * Is this a bug?
 * Look at `swapActiveVision` in `game.js`.
 */
export type SwapVisionResData = PlayerId;

/**
 * Looks like new feature, not yet implemented?
 */
export interface NotificationResData {
    action: "Notification",
    newMessage: boolean,
    yourTurn: number,
    // TODO: maybe there are other fields?
}
