<script setup>
import { menus } from '@/constants/menu'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.name)
</script>

<template>
  <div class="absolute lg:w-[260px] md:w-20 bg-white h-screen shadow">
    <div class="text-center p-2">
      <img src="/logo.svg" class="mx-auto" alt="" />
    </div>
    <h4 class="lg:block hidden text-xs px-5 text-gray-500 mb-5">MENU</h4>
    <div class="mb-5">
      <router-link
        v-for="menu in menus"
        :to="menu.path"
        class="relative bg-gray-500"
        :class="route.name.includes(menu.name) ? 'bg-teal-600' : ''"
      >
        <div class="absolute h-full py-2.5 hidden left">
          <div class="border-[3px] rounded-r-lg rounded-l h-full border-teal-700"></div>
        </div>
        <div class="menu hover:text-teal-700 text-gray-500 flex items-center px-7 p-2 gap-2">
          <i :class="menu.icon" class="text-xl"></i>
          <span class="lg:block hidden">{{ menu.name }}</span>
          <span
            v-if="menu.notif"
            class="lg:block hidden absolute bg-purple-600 text-white right-5 rounded font-bold text-xs p-1 px-2"
            >{{ menu.notif }}</span
          >
        </div>
      </router-link>
    </div>
    <div class="lg:block hidden text-center">
      <img src="/support.svg" class="mb-2 h-28 w-full" alt="" />
      <p class="mb-3 text-gray-500 text-sm">Have any questions?</p>
      <button
        class="bg-teal-700 hover:bg-teal-800 text-white flex items-center gap-2 mx-auto p-2 rounded px-4"
      >
        <i class="bx bx-paper-plane"></i>
        <span>Get support</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active .menu {
  background: rgb(15, 118, 110);
  background: linear-gradient(90deg, rgba(15, 118, 110, 0.2) 0%, rgba(255, 255, 255, 0.4) 100%);
  color: #0f766e;
}
.router-link-exact-active .left {
  display: block;
}
</style>
