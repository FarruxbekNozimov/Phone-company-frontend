<script setup>
defineProps(['icon', 'text', 'data', 'w', 'design', 'search'])
</script>

<template>
  <div>
    <button
      class="relative flex items-center gap-2 p-1.5 px-4 rounded text-sm group"
      :class="
        design
          ? design
          : 'bg-blue-200/50 text-blue-500 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white '
      "
    >
      <i :class="icon" class="text-lg"></i>
      <span class="text-sm whitespace-nowrap">{{ text }}</span>
      <div
        class="z-10 absolute left-0 top-12 rounded-lg text-gray-500 text-md text-start bg-white shadow-lg py-2 duration-300 transition ease-in-out delay-150 group-focus:block hidden -translate-y-1"
        :class="w ? w : 'w-40'"
      >
        <div class="px-2">
          <input type="text" class="border px-2 p-1 rounded-lg border-gray-200 w-full" placeholder="Search" />
        </div>
        <div v-for="el in data" class="px-4 p-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
          {{ el }}
        </div>
      </div>
    </button>
  </div>
</template>

<style scoped></style>
