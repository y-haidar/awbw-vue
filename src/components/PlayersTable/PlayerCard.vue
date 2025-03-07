<!-- TODO: add tagco support -->
<template>
    <div class="player-card">
        <div class="player-overview">
            <div class="player-overview-main">
                <header :style="{ 'background': countryColor?.gradient }">
                    <span class="player-username">
                        <a :href="`profile.php?username=${user_name}`" :title="user_name" target="_blank">
                            {{ user_name }}
                        </a>
                    </span>
                </header>
                <div class="player-co-section" :style="{ 'background': isEliminated ? '#CDCDCD' : 'unset' }">
                    <div class="player-activity-status dot" />
                    <Tooltip
                        :class="{ 'player-co-container': true, 'co-container': true, 'cop-on-bg': powerOn === 'Y', 'scop-on-bg': powerOn === 'S' }">
                        <a class="player-co" href="co.php#grimm" target="_blank">
                            <img class="co_portrait" :src="`/terrain/aw2/${stats.playerCoSrc}?v=1`">
                        </a>
                        <template #tooltip>{{ gameStore.coInfo[coName]?.d2d }}</template>
                    </Tooltip>
                    <div class="stat-con">
                        <PlayerStat :stat="{ text: stats.currentTime }"
                            :icon="{ src: '/terrain/bootaetclock.gif', style: { 'margin-right': '2px' } }" />
                        <PlayerStat :stat="{ text: stats.funds }"
                            :icon="{ src: '/terrain/coin.gif', style: { 'width': '12px', 'margin-left': '2px' } }" />
                    </div>
                </div>
            </div>
            <div class="player-overview-stats-container">
                <div class="player-overview-stats" :style="{ 'border-color': countryColor?.solid }">
                    <PlayerStat :stat="{ text: stats.totalUnits }" class="player-secondary-stat"
                        :icon="{ src: '/terrain/ani/bdinfantry.gif', style: { 'margin-right': '4px' } }" />
                    <PlayerStat :stat="{ text: stats.unitValue }" class="player-secondary-stat">
                        <template #icon>
                            <div style="position: relative;">
                                <img src="/terrain/ani/bdinfantry.gif" style="margin-right: 4px;">
                                <img src="/terrain/coin.gif" :style="{
                                    bottom: '-1px',
                                    right: '3px',
                                    position: 'absolute',
                                }">
                            </div>
                        </template>
                    </PlayerStat>
                    <PlayerStat :stat="{ text: stats.income }" class="player-secondary-stat"
                        :icon="{ src: '/terrain/capt.gif', style: { 'margin-left': '3px' } }" />
                </div>
            </div>
        </div>
        <PowerBar :player-id="playerId" />
    </div>
</template>

<style scoped>
.player-card {
    display: flex;
    flex-direction: column;
    /* background: rgb(0, 0, 0, 0.075); */
}

.player-overview {
    background: white;
    display: flex;
    margin-top: 5px;
    position: relative;
}

.player-overview-main {
    border: 1px solid black;
    padding: 1px;
    position: relative;
}

header {
    align-items: center;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 2px;
}

.player-username {
    max-width: 110px;
    display: inline-block;
}

.player-username a {
    color: white;
    font-weight: 400;
    text-decoration: none;
}

/* .player-overview-info {} */

.player-co-section {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 1px;
    min-width: 120px;
    padding: 0 4px;
    position: relative;
}

/* TODO: rename to dot, and change color based on computed var */
.dot {
    --dot-color: gray;
    height: 6px;
    width: 6px;
    background-color: var(--dot-color);
    border: solid 1px #000000;
    border-radius: 50%;
    display: inline-block;

    /* .player-activity-status */
    left: 0px;
    position: absolute;
    top: 2px;
    z-index: 1;
}


.player-co {
    display: flex;
}

img.co_portrait {
    height: 32px;
    width: 32px;
}

.cop-on-bg {
    background: rgba(236, 53, 53, 0.5);
    box-shadow: 0 0 4px 1px rgba(236, 53, 53);
}

.scop-on-bg {
    background: rgba(0, 102, 255, 0.5);
    box-shadow: 0 0 4px 1px rgba(0, 102, 255);
}

/* ================================================ */

.player-overview-stats-container {
    border: 1px solid black;
    margin-left: 1px;
    min-width: 75px;
    padding: 1px;

}

.player-overview-stats {
    border-style: solid;
    border-width: 0 3px 0 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    list-style-type: none;
    margin: auto 0;
    padding: 0;
}

.player-secondary-stat {
    align-items: center;
    background: rgba(0, 0, 0, 0.075);
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    margin: 1px 2px 1px 0;
    position: relative;
}
</style>

<script setup lang="ts">
import { gameStore } from '@/game/game_state';
import Tooltip from '../core/Tooltip.vue';
import PlayerStat from './PlayerStat.vue';
import { computed } from 'vue';
import PowerBar from './PowerBar.vue';

// TODO: move to computed, and use ws state
let dot = "";
"--dot-color: red;"
"--dot-color: rgb(29, 216, 75);"
"--dot-color: gray;"
"--dot-color: yellow;"

const props = defineProps<{
    playerId: number | string
}>();


const countryColor = computed(() => {
    const countries_code = gameStore.playersInfo[props.playerId]?.countries_code;
    if (!countries_code) return;
    const colors = gameStore.countriesColors[countries_code];

    const countryLight = colors.light;
    const countryDark = colors.dark;
    // Not sure what this is
    // const countryTransp = colors.transp;
    return { gradient: "linear-gradient(to right, " + countryLight + ", " + countryDark + ")", solid: countryDark };
});

const isEliminated = computed(() => gameStore.endData.losers.includes(Number(props.playerId)));

const stats = computed(() => {
    const playerInfo = gameStore.playersInfo[props.playerId];
    const funds = playerInfo?.players_funds;
    const totalUnits = gameStore.playersUnitCount[props.playerId]?.total;
    const unitValue = gameStore.playersUnitCount[props.playerId]?.value;
    const webkitFix = playerInfo?.players_turn_start.replace(/-/g, '/');
    const income = playerInfo?.players_income;
    const coName = playerInfo?.co_name;
    const coTheme = gameStore.coTheme;
    const playerCoSrc = (!isEliminated.value ? "" : "gs_") + coTheme + coName?.replace(" ", "").toLowerCase() + ".png";


    let currentTime: string | undefined;
    if (webkitFix) {
        const turnStartClient = new Date(webkitFix + ' ' + gameStore.serverTimezone).getTime();
        const turnStart = Math.floor((turnStartClient - gameStore.serverTimeOffset) / 1000);
        const turnClock = playerInfo?.players_turn_clock;
        if (turnClock) {
            const now = Math.floor(Date.now() / 1000);
            currentTime = formatTimer(Math.max(0, turnStart + turnClock - now));
        }
    }

    return {
        funds: funds?.toString() || "",
        currentTime: currentTime || "",
        totalUnits: totalUnits?.toString() || "",
        unitValue: unitValue?.toString() || "",
        income: income?.toString() || "",
        playerCoSrc: playerCoSrc
    }
});

const user_name = computed(() => gameStore.playersInfo[props.playerId]?.users_username);

const powerOn = computed(() => gameStore.playersInfo[props.playerId]!.players_co_power_on);

const coName = computed(() => {
    const name = gameStore.playersInfo[props.playerId]?.co_name;
    return name as keyof typeof gameStore.coInfo;
});

// TODO: look at formatTimer`, `getServerTimeOffset` and `startPlayerTimer` in `game.js`
// `getServerTimeOffset` response: {"receive":1740875809.4784,"send":1740875809.4785}


function formatTimer(totalSeconds: number, header: boolean = false): string {
    let nextDays: number | string = Math.floor(totalSeconds / (3600 * 24));
    if (nextDays !== 0 && nextDays < 10) nextDays = "0" + nextDays;
    totalSeconds -= Number(nextDays) * 3600 * 24;

    let nextHours: number | string = Math.floor(totalSeconds / 3600);
    if (nextHours < 10) nextHours = "0" + nextHours;
    totalSeconds -= Number(nextHours) * 3600;

    let nextMinutes: number | string = Math.floor(totalSeconds / 60);
    if (nextMinutes < 10) nextMinutes = "0" + nextMinutes;
    totalSeconds -= Number(nextMinutes) * 60;

    let nextTimer: string = "";

    if (nextDays !== 0) {
        nextTimer += !header ? nextDays + ":" : nextDays + "d ";
    }

    nextTimer += !header ? nextHours + ":" : nextHours + "h ";

    nextTimer += !header ? nextMinutes : nextMinutes + "m";

    //No days left, add seconds
    if (nextDays === 0) {
        //totalSeconds only has 0-60 seconds left
        let nextSeconds: number | string = totalSeconds;
        if (nextSeconds < 10) nextSeconds = "0" + nextSeconds;
        nextTimer += !header ? ":" + nextSeconds : nextSeconds + "s";
    }

    return nextTimer;
}

</script>
