<script setup>
defineProps(['modalFunc', 'modal', 'title', 'text'])
</script>

<template>
  <div
    class="absolute left-0 w-full h-screen bg-black/50 flex items-center justify-center duration-300"
    :class="!modal ? 'opacity-0 -top-full' : 'top-0 opacity-100'"
  >
    <div class="rounded bg-white w-[470px] p-5">
      <div class="flex items-center justify-between mb-5">
        <span class="font-bold text-xl text-gray-700">{{ title }}</span>
        <i @click="modalFunc" class="bx bx-x text-3xl text-gray-500 cursor-pointer"></i>
      </div>
      <p class="leading-5 font-thin text-gray-500">{{ text }}</p>
      <div class="text-end">
        <button @click="modalFunc" class="bg-teal-700 text-white p-2 px-4 rounded text-sm">
          Got it !
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
