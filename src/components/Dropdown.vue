<script setup>
defineProps(['icon', 'text', 'data'])
</script>

<template>
  <div>
    <button
      class="relative flex items-center gap-2 p-1.5 px-4 rounded text-sm bg-blue-200/50 text-blue-500 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white group"
    >
      <i :class="icon" class="text-lg"></i>
      <span class="text-sm whitespace-nowrap">{{ text }}</span>
      <div
        class="absolute left-0 top-12 rounded-lg text-gray-500 text-md text-start bg-white shadow-lg w-40 py-2 duration-300 transition ease-in-out delay-150 group-focus:block hidden -translate-y-1"
      >
        <div v-for="el in data" class="px-4 p-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
          {{ el }}
        </div>
      </div>
    </button>
  </div>
</template>

<style scoped></style>
