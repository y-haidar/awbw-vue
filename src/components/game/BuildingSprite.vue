<template>
    <div class="building-sprite" :style="{
        left: `${props.building.buildings_x * 16}px`,
        top: `${props.building.buildings_y * 16 + getBuildingSpriteOffset(props.building)}px`,
        cursor: clickable ? 'pointer' : 'default',
    }">
        <img :src="url" draggable="false" />
    </div>
</template>

<script setup lang="ts">
import { getBuildingSpriteOffset } from '@/game/bs_offsets';
import { gameStore, type BuildingsInfoEntry } from '@/game/game_state';
import { computed } from 'vue';

const baseUrl = "https://awbw.amarriner.com/";

const props = defineProps<{
    building: BuildingsInfoEntry,
    isMovePlanner?: boolean,
}>()

const url = computed(() => {
    const buildingName = props.building.terrain_name.replace(/ /g, "").toLowerCase();
    const weatherName = gameStore.weather.code !== "C" ? "_" + gameStore.weather.name.toLowerCase() : "";
    return baseUrl + gameStore.terrainPath + buildingName + weatherName + ".gif";
});

const clickable = computed(() => {
    if (props.isMovePlanner) {
        return /Base|Airport|Port/.test(props.building.terrain_name);
    }
    return props.building.buildings_players_id === gameStore.viewer.playerId && /Base|Airport|Port/.test(props.building.terrain_name);
});
</script>

<style scoped>
img {
    user-select: none;
}

.building-sprite {
    position: absolute;
    z-index: 100;
}
</style>