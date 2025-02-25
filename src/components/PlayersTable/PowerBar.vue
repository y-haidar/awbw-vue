<template>
    <div class="player-overview-bar">
        <!-- `.main-co-bar`: used in js -->
        <!-- `.co-bar-container`: used in css -->
        <!-- TODO: class combine? -->
        <!-- {{ CopStarsWorth }} -->
        <!-- {{ playersInfo[playerId]?.co_name }} -->
        <!-- {{ copm_val / 10 }} -->
        <!-- {{ powerStarsFillePercentage }} -->
        <div class="main-co-bar co-bar-container">
            <div class="cop-on-text"></div>
        </div>
        <Tooltip class="power-bar">
            <div class="co-power cop-star-percent">
                <div :style="powerStarsFillePercentage?.cop[index]"
                    v-for="_, index of CopStarsCount[playerId]?.copStarsCount" class="cop-star power-star" />
                <!-- <div class="cop-star power-star">.</div> -->
            </div>
            <div class="super-co-power scop-star-percent">
                <div :style="powerStarsFillePercentage?.scop[index]"
                    v-for="_, index of CopStarsCount[playerId]?.scopStarsCount" class="scop-star power-star" />
                <!-- <div class="scop-star power-star">.</div> -->
            </div>
            <template #tooltip>
                <div class="power-percent-display hover-text">
                    <span class="cop-percent-display power-info">
                        <!-- <img src="terrain/aw2/redstar.gif"> -->
                        <span class="percent-display">
                            <span>None</span>
                            <span>
                                [
                                <span class="cop-value">0</span> /
                                <span class="cop-max-value">90000</span>
                                ]
                            </span>
                        </span>
                    </span>
                    <span class="scop-percent-display power-info">
                        <!-- <img src="terrain/aw2/bluestar.gif"> -->
                        <span class="percent-display">
                            <span>Ex Machina</span>
                            <span>
                                [
                                <span class="scop-value">0</span> /
                                <span class="scop-max-value">90000</span>
                                ]
                            </span>
                        </span>
                    </span>
                </div>
            </template>
        </Tooltip>
        <div class="power-buttons"></div>
    </div>
</template>

<style scoped>
/* was also applied to `.player-overview-bar-tag` */
.player-overview-bar {
    margin-bottom: 4px;
    width: 150px;
    position: relative;
    --border-size: 1px;
}

.cop-on-text {
    /* from inline */
    /* visibility: hidden; */
    /* from class */
    cursor: default;
    position: absolute;
}

/* PowerBar
* =====================================================
* =====================================================
* ===================================================== */

.power-bar {
    /* TODO: remove important */
    width: 100% !important;
}

.co-power {
    /* TODO: var width */
}

.super-co-power {
    /* TODO: var width */
}

.power-bar,
.co-power,
.super-co-power {
    align-items: center;
    display: flex;
    flex-direction: row;
    position: relative;
    /* TODO remove */
    width: 100%;
}

.co-power .power-star:last-child {
    /* TODO: var, to add border if no scop exist? */
    /* border-right: 1px solid black; */
}

.super-co-power .power-star:last-child {
    border-right: var(--border-size) solid black;
}


.power-star {
    border: var(--border-size) solid black;
    border-right: none;
    box-sizing: border-box;
    position: relative;
}

/* Maybe this is too extreme */
/* .co-power .power-star:last-child,
.super-co-power .power-star:last-child {
    width: calc(50% + 1px);
} */

.cop-star {
    /* TODO: move this to js
    --fill-percentage: 100%; */
    height: 5px;
    /* TODO: var */
    width: 100%;
}

.scop-star {
    height: 10px;
    /* TODO: var */
    width: 100%;
}

.cop-star::after {
    content: '';
    --fill-border-size: 3px;
    background: rgba(28, 201, 129, 0.6);
    border-top: var(--fill-border-size) solid rgba(0, 187, 109, 0.6);
    border-bottom: var(--fill-border-size) solid rgba(0, 187, 109, 0.6);
    position: absolute;
    top: calc(var(--fill-border-size) * -1);
    left: calc(var(--border-size) * -1);
    height: calc(100%);
    width: calc(var(--fill-percentage) + var(--border-size));
}

/* .cop-star-percent::after {
    height: 5px;
    width: 100%;
}
.scop-star-percent::after {
    height: 10px;
    width: 10%;
}
.cop-star-percent::after,
.scop-star-percent::after {
    content: '';
    background: rgba(28, 201, 129, 0.6);
    border-top: 3px solid rgba(0, 187, 109, 0.9);
    border-bottom: 3px solid rgba(0, 187, 109, 0.9);
    position: absolute;
    top: -3px;
} */

.power-buttons {
    display: flex;
    left: 101%;
    position: absolute;
    text-align: left;
    top: 0;
}
</style>

<script setup lang="ts">
import { gameStore, CopStarsWorth, CopStarsCount } from '@/game/game_state';
import Tooltip from '../core/Tooltip.vue';
import { computed, useTemplateRef, watch } from 'vue';

const props = defineProps({
    playerId: {
        type: Number,
        required: true,
    },
});

// defineExpose

// let x: PlayersInfoEntry;
// x.players_co_max_power

// let x = gameStore.playersInfo['s']?.players_co_max_spower;

/** CO Power Meter current value */
const copm_val = computed(() => {
    return gameStore.playersInfo[props.playerId]?.players_co_power!;
});


// TODO: display text on tooltip
// TODO: display fill precentage

// TODO: Power bar animation
// if(scopPercent >= 100) {
//     //Remove the COP animation and readd it at the same time as SCOP so it's synced
//     for(let i = 0; i < copStars.length; i++) {
//       copStars[i].classList.remove("anim-power-bar");
//     }
// }

const powerStarsFillePercentage = computed(() => {
    // const copMax = gameStore.playersInfo[props.playerId]!.players_co_max_power / 10;
    // const scopMax = gameStore.playersInfo[props.playerId]!.players_co_max_spower / 10;
    // const copPercent = copCurrent * 100 / copMax;
    // const scopPercent = copCurrent * 100 / scopMax;

    let copCurrent = gameStore.playersInfo[props.playerId]!.players_co_power / 10;

    let powerStarStyle: { cop: string[], scop: string[] } = { cop: [], scop: [] };
    const starWorth = CopStarsWorth.value[props.playerId];
    if (!starWorth) return undefined;
    const copStarsCount = CopStarsCount[props.playerId]!.copStarsCount;
    const totalStarsCount = copStarsCount + CopStarsCount[props.playerId]!.scopStarsCount;
    // let powerStars = useTemplateRef("power-star");
    let starsFilled = 0;
    const push = (starWidth: number) => {
        if (starsFilled >= copStarsCount) {
            powerStarStyle.scop.push(`--fill-percentage: ${starWidth}%`);
        } else {
            powerStarStyle.cop.push(`--fill-percentage: ${starWidth}%`);
        }
    };
    while (copCurrent >= starWorth) {
        // if (starIndex >= totalStarsCount) break;

        const starWidth = totalStarsCount > 6 ? 115 : 110;
        push(starWidth);

        copCurrent -= starWorth;

        //Add animation class
        // if(starIndex <= copStars && copPercent >= 100) {
        //     powerStars[starIndex].classList.add("anim-power-bar");
        // } else if(starIndex > copStars && scopPercent >= 100) {
        //     powerStars[starIndex].classList.add("anim-power-bar");
        // }

        starsFilled += 1;
    }

    // Fill the last uncompleted star
    if (copCurrent > 0 && copCurrent <= starWorth) {
        const starWidth = copCurrent * 100 / starWorth;
        push(starWidth);
    }

    return powerStarStyle;
});

// const powerStars = useTemplateRef("power-star");
// powerStars.value?.map((el, i) => {
//     console.log(el)
//     el.style.setProperty(`--fill-percentage`, '100%');
// })
// watch(powerStarsFillePercentage, (newPercentages, _oldPercentages) => {
//     console.log("inside watcher");
//     if (!newPercentages) return;
// })


// toggleCopButtons(viewerPId);
</script>
