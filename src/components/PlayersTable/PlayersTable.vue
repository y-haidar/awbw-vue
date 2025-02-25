<template>

</template>

<style scoped>
/* All players */
.game-player-info {
    /* from inline */
    height: 172px;
    flex-wrap: nowrap;
    left: 100%;
    position: absolute;
    overflow-y: visible;
    width: auto;
    /* from class */
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    left: 100%;
    margin: 0 5px;
    padding: 0 4px;
    position: absolute;
}

.player-overview-container {
    display: flex;
    flex-direction: column;
    margin: 0 5px;
}

.player-overview {
    background: white;
    display: flex;
    margin-top: 5px;
    position: relative;
}


/* bar */

/* was also applied to `.player-overview-bar-tag` */
.player-overview-bar {
    margin-bottom: 4px;
    width: 150px;
    position: relative;
}
</style>

<script setup lang="ts">

</script>
