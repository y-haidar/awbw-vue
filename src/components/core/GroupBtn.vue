<script setup lang="ts">
import type { PropType } from 'vue';

export interface GroupBtnItem {
    text: string,
    title?: string,
}

defineProps({
    items: {
        type: Array as PropType<GroupBtnItem[]>,
    },
});
</script>

<template>
    <div class='game-tools-grp'>
        <div class="game-tools-grp-item" v-for="({ text, title }, index) in items">
            <div class="game-tools-grp-item-bg">
                <slot :text :index />
            </div>
            <span v-if="title && $slots['title']" class="game-tools-btn-item-title">
                <slot name="title" :title :index />
            </span>
        </div>
    </div>
</template>

<style scoped>
.game-tools-grp {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #888888;
    /* just to be safe */
    flex-wrap: nowrap;
    /* overflow: hidden; */
    /* gap: 8px; */
}

.game-tools-grp-item {
    position: relative;
    width: 100%;
    padding-block: 4px;
    padding-inline: 12px;
}

.game-tools-grp .game-tools-grp-item:not(:first-child) {
    border-left: 1px solid #888888;
}

.game-tools-grp-item-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.game-tools-grp-item:hover .game-tools-btn-item-title {
    visibility: visible;
}

.game-tools-btn-item-title {
    bottom: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    color: white;
    visibility: hidden;
    position: absolute;
    background: rgb(75, 74, 74, 0.9);
    font-weight: 400;
    z-index: 120;
    padding: 5px;
    text-align: left;
    margin-right: 0;
    white-space: pre;
    cursor: pointer;
    /*  */
    font-size: 13px;
    font-style: normal;
}
</style>
