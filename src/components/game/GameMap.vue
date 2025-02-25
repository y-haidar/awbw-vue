<template>
    <canvas id="map-background"></canvas>
</template>

<script setup lang="ts">
import { buildingsInfo, gameWeather, maxX, maxY, terrainInfo, terrainPath } from '@/game/game_state_demo';
import { MapRenderer } from '@/game/map_renderer';
import { onMounted } from 'vue';

let shoalsDisplay = "new";
// let mapTheme = 2;
let mapRenderer = new MapRenderer({ width: maxX, height: maxY, terrainInfo, buildingsInfo, mapTheme: 2, terrainPath, weather: gameWeather.name, shoals: shoalsDisplay });

AwbwGlobalState.MapRenderer = mapRenderer;

// if (!customMap) {
// }
onMounted(() => {
    mapRenderer?.initCanvas('#map-background');
})
</script>