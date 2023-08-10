<script setup>
import { menus } from '@/constants/menu'
</script>

<template>
  <div class="absolute w-72 bg-white h-screen shadow">
    <div class="text-center p-2">
      <img src="/logo.svg" class="mx-auto" alt="" />
    </div>
    <h4 class="text-xs px-5 text-gray-500 mb-5">MENU</h4>
    <div class="">
      <router-link v-for="menu in menus" :to="menu.path" class="relative bg-gray-500">
        <div class="absolute h-full py-2.5 hidden left">
          <div class="border-[3px] rounded-r-lg rounded-l h-full border-teal-700"></div>
        </div>
        <div class="menu text-gray-500 flex items-center px-7 p-3 gap-2">
          <i :class="menu.icon" class="text-xl"></i>
          <span class="">{{ menu.name }}</span>
          <span
            v-if="menu.notif"
            class="absolute bg-purple-600 text-white right-5 rounded font-bold text-xs p-1 px-2"
            >{{ menu.notif }}</span
          >
        </div>
      </router-link>
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
