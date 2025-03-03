<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import GroupBtn, { type GroupBtnItem } from './components/core/GroupBtn.vue';
import MyMenu from './components/MyMenu.vue';
import GameMap from './components/game/GameMap.vue';
import PowerBar from './components/PlayersTable/PowerBar.vue';
import PlayerCard from './components/PlayersTable/PlayerCard.vue';
import PlayerStat from './components/PlayersTable/PlayerStat.vue';
// import Tooltip from './components/core/Tooltip.vue';
// import GroupBtnItem from './components/game/GroupBtnItem.vue';
// import ToolsBtn from './components/game/ToolsBtn.vue';

const items: GroupBtnItem[] = [
  { text: "1", title: "Damage Calculator (Hotkey: C)" },
  { text: "NoTitle" },
  { text: "", title: "Some Title" },
];
</script>

<template>
  <div class="con">
    <div class="test">
      <PlayerCard :player-id="3203387" />
    </div>
    <div class="test">
      <!-- <follow></follow> -->
    </div>
    <div class="test">
      <GroupBtn :items>
        <template #="{ text, index }">
          {{ index != 2 ? text : undefined }}
          <MyMenu v-if="index == 2"></MyMenu>
        </template>
        <template #title="{ title, index }">
          {{ index == 0 ? title : undefined }}
          {{ index == 1 ? title + ` 2` : undefined }}
          <div v-if="index == 2" style="background-color: black;">
            {{ title }}
          </div>
        </template>
      </GroupBtn>
    </div>
    <div class="test">
      <GameMap></GameMap>
    </div>
  </div>
</template>

<style scoped>
.test {
  display: flex;
  margin-block: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  image-rendering: pixelated;
  font-family: "Nova Square", cursive !important;
}

.con {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100cqb;
}
</style>
