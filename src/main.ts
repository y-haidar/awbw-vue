// import './assets/main.css'
import './assets/aw2.css'

import { createApp } from 'vue'
import App from './App.vue'
import type { MapRenderer } from './game/map_renderer';
import { gameStore } from './game/game_state';

declare global {
    var AwbwGlobalState: {
        MapRenderer?: MapRenderer;
        gameStore: typeof gameStore;
    };
}

globalThis.AwbwGlobalState = {
    gameStore
};

createApp(App).mount('#app')
