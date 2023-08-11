<script setup>
defineProps(['title'])
</script>

<template>
  <div class="relative group z-50">
    <div
      class="z-50 hidden group-hover:block duration-300 w-full rounded text-center py-1 absolute -top-12 bg-black/80"
    >
      <span class="text-white">{{ title }}</span>
      <i class="text-black/80 absolute -bottom-3.5 right-0 left-0 bx bxs-down-arrow"></i>
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
