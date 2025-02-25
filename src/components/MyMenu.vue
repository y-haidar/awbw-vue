<template>
    <Menu as="div" class="menu">
        <MenuButton as="div" class="menu-btn">
            <img id="links_icon" src="/terrain/gamemenu.gif">
            More
        </MenuButton>
        <MenuItems class="menu-items">
            <MenuItem v-slot="{ active }">
            <a :class='{ "bg-blue-500": active }' href="/account-settings">
                Account settings
            </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
            <a :class='{ "bg-blue-500": active }' href="/account-settings">
                Documentation
            </a>
            </MenuItem>
            <MenuItem disabled>
            <span class="opacity-75">Invite a friend (coming soon!)</span>
            </MenuItem>
        </MenuItems>
    </Menu>
</template>

<style scoped>
.menu {
    position: relative;
    width: max-content;
}

.menu-btn img {
    /* style="margin-left: 3px; text-align: left; margin-top: 6px; vertical-align: top;" */
    /* margin-top: 6px; */
    vertical-align: middle;
}

.menu-items {
    top: 100%;
    position: absolute;
}

.bg-blue-500 {
    background-color: aqua;
}
</style>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>
