<template>
    <div class="player-overview-bar">
        <!-- {{ CopStarsWorth }} -->
        <!-- {{ playersInfo[playerId]?.co_name }} -->
        <!-- {{ copm_val / 10 }} -->
        <!-- {{ powerStarsFillePercentage }} -->

        <!-- TODO: class combine? -->
        <!-- `.main-co-bar`: used in js -->
        <!-- `.co-bar-container`: used in css -->
        <Tooltip class="main-co-bar co-bar-container">
            <div :class="`cop-on-text ${powerText?.txt_class}`">{{ powerText?.text }}</div>
            <div class="power-bar" :style="powerText?.bar_style">
                <div :style="powerStarsFillePercentage?.cop[index]"
                    v-for="_, index of CoStarsCount[props.playerId]?.cop" class="cop-star power-star" />
                <div :style="powerStarsFillePercentage?.scop[index]"
                    v-for="_, index of CoStarsCount[props.playerId]?.scop" class="scop-star power-star" />
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

/* PowerBar Text
* =====================================================
* =====================================================
* ===================================================== */

.cop-on-text {
    /* from inline */
    /* visibility: hidden; */
    /* from class */
    cursor: default;
    position: absolute;
}

.co-bar-power-cop {
    animation: anim-cop-text 4s linear infinite;
    background: linear-gradient(to right, rgb(230, 96, 96), rgb(197, 13, 13));
    background-size: auto;
    background-clip: border-box;
    background-clip: text;
    background-clip: border-box;
    background-size: auto auto;
    font-size: 20px;
    font-weight: bold;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -1px;
    top: -4px;
}

.co-bar-power-scop {
    animation: anim-cop-text 4s linear infinite;
    background: linear-gradient(to right, rgb(76, 167, 241), rgb(0, 82, 177));
    background-size: auto;
    background-clip: border-box;
    background-clip: text;
    background-clip: border-box;
    background-size: auto auto;
    font-size: 20px;
    font-weight: bold;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -1px;
    top: -4px;
}

/* PowerBar Stars
* =====================================================
* =====================================================
* ===================================================== */

.power-bar,
.co-power,
.super-co-power {
    align-items: center;
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
}

.power-star:last-child {
    border-right: 1px solid black;
}

.power-star {
    border: var(--border-size) solid black;
    border-right: none;
    box-sizing: border-box;
    position: relative;
}

.cop-star {
    height: 5px;
    width: 100%;
}

.scop-star {
    height: 10px;
    width: 100%;
}

.scop-star::after,
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
    width: calc(var(--fill-percentage) + (var(--border-size)*2));
    z-index: 1;
}

.power-buttons {
    display: flex;
    left: 101%;
    position: absolute;
    text-align: left;
    top: 0;
}
</style>

<script setup lang="ts">
import { gameStore, CoStarsWorth, CoStarsCount } from '@/game/game_state';
import Tooltip from '../core/Tooltip.vue';
import { computed } from 'vue';

const props = defineProps<{
    playerId: number | string
}>();

// defineExpose

// let x: PlayersInfoEntry;
// x.players_co_max_power

// let x = gameStore.playersInfo['s']?.players_co_max_spower;

const powerText = computed(() => {
    switch (gameStore.playersInfo[props.playerId]!.players_co_power_on) {
        case "Y":
            return { bar_style: "visibility: hidden", txt_class: "co-bar-power-cop", text: "POWER" }
        case "S":
            return { bar_style: "visibility: hidden", txt_class: "co-bar-power-scop", text: "SUPER" }
        case "N":
            return { bar_style: "visibility: visible", txt_class: "", text: "" }
        default:
            break;
    }
});

// TODO: display text on tooltip
// TODO: display powerbtns

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
    const playerStarWorth = CoStarsWorth.value[props.playerId];
    if (!playerStarWorth) return undefined;;
    const playerStarsCount = CoStarsCount[props.playerId]!;
    let powerStarStyle = {
        cop: [...Array(playerStarsCount.cop).keys()].map(() => ""),
        scop: [...Array(playerStarsCount.scop).keys()].map(() => ""),
    };
    let starsFilled = 0;
    const push = (starWidth: number) => {
        const style = `--fill-percentage: ${starWidth}%`;
        if (starsFilled < playerStarsCount.cop) {
            powerStarStyle.cop[starsFilled] = style;
        } else if (starsFilled < (playerStarsCount.total)) {
            powerStarStyle.scop[starsFilled - playerStarsCount.cop] = style;
            console.log(powerStarStyle.scop)
        }
    };
    while (copCurrent >= playerStarWorth) {
        push(100);
        copCurrent -= playerStarWorth;

        //Add animation class
        // if(starIndex <= copStars && copPercent >= 100) {
        //     powerStars[starIndex].classList.add("anim-power-bar");
        // } else if(starIndex > copStars && scopPercent >= 100) {
        //     powerStars[starIndex].classList.add("anim-power-bar");
        // }

        starsFilled += 1;
    }
    // Fill the last uncompleted star
    if (copCurrent > 0 && copCurrent <= playerStarWorth) {
        const starWidth = copCurrent * 100 / playerStarWorth;
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
