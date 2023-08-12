<script setup>
defineProps(['img', 'title', 'text', 'isactive', 'isChat'])
</script>

<template>
  <div
    class="hover:bg-gray-100 mb-1 shadow cursor-pointer p-4 py-3 rounded-lg"
    :class="isactive == '1' ? 'bg-gray-100' : 'bg-white'"
  >
    <div class="flex items-center">
      <input
        v-if="isChat"
        id="checkbox"
        type="checkbox"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
      />
      <label for="checkbox" class="ml-2 text-sm font-medium text-gray-900 flex items-center gap-4">
        <img :src="img" class="h-9 w-9 rounded-full" alt="" />
        <div class="">
          <h3 class="text-md text-gray-800">{{ title }}</h3>
          <span class="text-xs text-gray-500">{{ text }}</span>
        </div>
      </label>
      <span
        class="absolute right-5 text-xs p-0.5 px-2 rounded"
        :class="isactive ? 'bg-teal-600  text-white' : 'bg-teal-600/10 text-teal-600'"
        >2</span
      >
    </div>
  </div>
</template>

<style scoped></style>
