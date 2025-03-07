<template>
    <div class="unit-sprite" :style="{
        left: `${props.unit.units_x * 16}px`,
        top: `${props.unit.units_y * 16}px`,
        cursor: 'pointer',
    }">
        <img :src="urls.sprite" draggable="false" />
        <img v-if="urls.hp" :src="urls.hp" class="right-icon" draggable="false" />
        <img v-if="urls.capture" :src="urls.capture" class="left-icon" draggable="false" />
        <img v-if="urls.dive" :src="urls.dive" class="left-icon" draggable="false" />
    </div>
</template>

<script setup lang="ts">
import { gameStore, type UnitsInfoEntry } from '@/game/game_state';
import { computed } from 'vue';

const baseUrl = "https://awbw.amarriner.com/";

const props = defineProps<{
    unit: UnitsInfoEntry,
    isMovePlanner?: boolean,
}>()

const urls = computed(() => {
    const unitName = props.unit.units_name.toLowerCase().replace(" ", "");
    const countryCode = props.unit.countries_code.toLowerCase();
    const dark = props.unit.units_moved ? "gs_" : "";
    let hp: string | number | null = props.unit.units_hit_points !== "?" ? props.unit.units_hit_points : "qhp";
    hp = hp !== 10 ? hp : null;
    const buildings_capture = gameStore.buildingsInfo[props.unit.units_x]?.[props.unit.units_y]?.buildings_capture;
    const capture = (unitName === "infantry" || unitName === "mech") &&
        buildings_capture && buildings_capture < 20;
    const dived = props.unit.units_sub_dive !== "N" ? true : false;

    return {
        sprite: baseUrl + gameStore.terrainPath + dark + countryCode + unitName + ".gif",
        hp: hp ? baseUrl + gameStore.terrainPath + hp + ".gif" : undefined,
        capture: capture ? baseUrl + gameStore.terrainPath + "capture.gif" : undefined,
        dive: dived ? baseUrl + gameStore.terrainPath + "subdive2.gif" : undefined,
    };
});

</script>

<style scoped>
img {
    user-select: none;
}

.right-icon {
    left: 8px;
    position: absolute;
    top: 7px;
}

.left-icon {
    left: 0;
    position: absolute;
    top: 7px;
}

.unit-sprite {
    position: absolute;
    z-index: 110;
}
</style>