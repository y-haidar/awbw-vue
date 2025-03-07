<template>
    <div style="position: relative;">
        <!-- <canvas id="weather-canvas"></canvas> -->
        <canvas id="map-background"></canvas>
        <template v-for="row in gameStore.buildingsInfo">
            <BuildingSprite :building="building" v-for="building in row" :key="building.buildings_id" />
        </template>
        <UnitSprite :unit="unit" v-for="unit in gameStore.unitsInfo" :key="unit.units_id" />
    </div>
</template>

<script setup lang="ts">
import { maxX, maxY, terrainInfo, terrainPath } from '@/game/game_state_demo2';
import { MapRenderer } from '@/game/map_renderer';
import { onMounted } from 'vue';
import BuildingSprite from './BuildingSprite.vue';
import { gameStore } from '@/game/game_state';
import UnitSprite from './UnitSprite.vue';

let shoalsDisplay = "new";
// let mapTheme = 2;
let mapRenderer = new MapRenderer({
    width: maxX, height: maxY,
    terrainInfo, buildingsInfo: gameStore.buildingsInfo,
    mapTheme: 2, terrainPath, weather: "clear", shoals: shoalsDisplay
});

AwbwGlobalState.MapRenderer = mapRenderer;

// if (!customMap) {
// }
onMounted(() => {
    mapRenderer?.initCanvas('#map-background');
})
</script>