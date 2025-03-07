import type { BuildingsInfoEntry } from "./game_state"

export const buildingSpriteOffsets = {
    'city': -6,
    'base': -9,
    'airport': -2,
    'port': -6,
    'hq': -15,
    'com tower': -9,
    // 'lab': -6,?
    // 
    // 'vpipe': 0,

}

export const getBuildingSpriteOffset = (building: BuildingsInfoEntry) => {
    const offset = Object.keys(buildingSpriteOffsets).find(code => {
        return building.terrain_name.toLowerCase().indexOf(code) >= 0
    })
    if (!offset) {
        console.error(`Building ${building.terrain_name} has no offset`);
        return 0;
    }
    return buildingSpriteOffsets[offset as keyof typeof buildingSpriteOffsets]!;
}
