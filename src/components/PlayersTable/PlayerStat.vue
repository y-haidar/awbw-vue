<template>
    <div class="player-stat">
        <!-- TODO: expose attrs -->
        <img v-if="!$slots['icon']" :style="props.icon?.style" :src="props.icon?.src">
        <template v-else>
            <slot name="icon" />
        </template>
        <!-- TODO: expose attrs -->
        <span :style="props.stat.style">{{ props.stat.text }}</span>
    </div>
</template>

<style scoped>
.player-stat {
    align-items: center;
    background: rgb(0, 0, 0, 0.075);
    display: flex;
    justify-content: space-between;
    /* flex-grow: 2; */
    margin: 1px 0;
    min-width: 85px;

    font-size: 14px;
    font-family: "Nova Square", cursive;
    /* font-style: normal; */

    /* TODO: add italic and strikethrow props */
    /* text-decoration: line-through; */
}
</style>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

const props = defineProps<{
    stat: {
        text: string;
        style?: CSSProperties;
    }
    icon?: {
        src: string;
        style?: CSSProperties;
    }
}>();
// const props = defineProps({
//     text: {
//         type: String,
//         required: true,
//     },
//     /** Image Source */
//     icon: {
//         type: String,
//         required: true,
//     },
// });
</script>
