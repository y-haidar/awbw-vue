<script setup lang="ts">
import type { PropType } from 'vue';
import { computed, useAttrs } from 'vue'

const attrs = useAttrs();
let user_class = computed(() => {
    let c = attrs['class'];
    if (typeof c === "string") {
        return ` ${c}`
    }
    return "";
})
</script>

<template>
    <div v-if="$slots['tooltip']" :class="'tooltip-parent' + user_class">
        <slot />
        <span class="tooltip">
            <slot name="tooltip" />
        </span>
    </div>
    <template v-else>
        <slot />
    </template>
</template>

<!-- TODO: theming support -->
<style scoped>
.tooltip-parent {
    position: relative;
}

.tooltip-parent:hover .tooltip {
    visibility: visible;
}

.tooltip {
    /* TODO: add prop for loc, and the 4px margin */
    bottom: calc(100% + 4px);
    /* TODO: add prop for loc */
    left: 50%;
    /* TODO: add prop for loc */
    transform: translateX(-50%);
    color: white;
    visibility: hidden;
    position: absolute;
    background: rgb(75, 74, 74, 0.9);
    font-weight: 400;
    /* TODO: add prop for z-index */
    z-index: 120;
    /* TODO: add prop for padding */
    padding: 5px;
    text-align: left;
    margin-right: 0;
    white-space: pre;
    cursor: pointer;
    /*  */
    /* TODO: add prop for font? */
    font-size: 13px;
    font-style: normal;
}
</style>
