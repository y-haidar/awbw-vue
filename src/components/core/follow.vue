<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import ToolsBtn from './ToolsBtn.vue';
</script>

<template>
    <section class="menu-follow">
        <div class="game-tools-btn follow_game " style="margin-left: 5px; border-right: none;">
            <div id="game-follow-bg" class="game-tools-bg">
                <span class="small_text_14" style="width:100%; font-size: 18px; font-weight: bold;">
                    +
                </span>
            </div>
            <span class="game-tools-btn-text small_text">
                Toggle Follow
            </span>
        </div>
        <div class="game-tools-btn" style="width: 40px; border-right: none">
            <div class="game-tools-bg">
                <a class="norm2" href="following.php?games_id=1362063" target="_blank" style="margin-left: 2px;">
                    <span class="small_text_14">
                        <img style="vertical-align:middle;" src="/terrain/follow_count.gif" height="12" width="12"
                            border="0" alt="">
                        <b class="n_follows" id="1362063" style="padding-right: 3px; vertical-align:middle;">0</b>
                    </span></a>
            </div>
            <span class="game-tools-btn-text small_text"># Following</span>
        </div>
        <!-- <ToolsBtn title="# Following">
            <a class="norm2" href="following.php?games_id=1362063" target="_blank"
                style="display:block; margin-left: 2px;">
                <span class="small_text_14">
                    <img style="vertical-align:middle;" src="/assets/terrain/follow_count.gif" height="12" width="12"
                        border="0" alt="">
                    <b class="n_follows" id="1362063" style="padding-right: 3px; vertical-align:middle;">0</b>
                </span>
            </a>
        </ToolsBtn> -->
        <div class="game-tools-btn" style="width: 45px;">
            <div class="game-tools-bg">
                <a class="norm2" style="display:block;">
                    <span class="small_text_14 bold">
                        <img style="vertical-align:middle;" src="/terrain/viewers_icon.gif" border="0" alt="">
                        <span class="game-viewer-count" style="vertical-align:middle">1</span></span></a>
            </div>
            <span class="game-tools-btn-text small_text"># Viewers</span>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    margin: 1px 0;
}

.game-tools-btn {
    text-align: center;
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid #888888;
    /* border-right-width: 1px;
    border-right-style: solid;
    border-right-color: rgb(136, 136, 136); */
    cursor: pointer;
    display: flex;
    font-weight: 900;
    height: 30px;
    justify-content: center;
    position: relative;
    width: 34px;
}

.game-tools-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.game-tools-btn .follow_span {
    font-family: Arial, Verdana, Helvetica, Geneva, sans-serif;
    padding-top: 1px;
}

.game-tools-btn-text {
    bottom: 100%;
    color: white;
    visibility: hidden;
    position: absolute !important;
    background: rgb(75, 74, 74, 0.9);
    font-weight: 400;
    z-index: 120;
    padding: 5px;
    text-align: left;
    margin-right: 0;
    white-space: pre;
    cursor: pointer;
}

.small_text {
    /* color: #000330;
  font-family: Arial,Verdana,Helvetica,Geneva,sans-serif; */
    font-size: 13px;
    font-style: normal;
}

.game-tools-btn-text.small_text {
    pointer-events: none;
}

.game-tools-btn:hover .game-tools-btn-text {
    visibility: visible;
}

.small_text_14 {
    color: #000330;
    font-family: Arial, Verdana, Helvetica, Geneva, sans-serif;
    font-size: 14px;
    font-weight: normal;
}

.bold {
    font-weight: bold;
}

a {
    color: #009966;
    text-decoration: none;
    font-weight: bold;
}

.norm2 .small_text_14 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
}
</style>
