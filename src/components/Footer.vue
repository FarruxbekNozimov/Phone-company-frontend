<script setup></script>

<template>
  <div class="absolute left-0 p-5 w-full bg-white flex items-center justify-between">
    <div class="flex items-center gap-3">
      <router-link
        v-for="el in 4"
        to="text"
        class="text-teal-700 hover:text-black text-sm font-thin"
      >
        Text page
      </router-link>
    </div>
    <span class="text-sm text-gray-500 font-sans">Copyright © 2023</span>
  </div>
</template>

<style scoped></style>
