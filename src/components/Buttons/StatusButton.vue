<script setup>
defineProps(['text', 'bg', 'color'])
</script>

<template>
  <button
    :class="`${bg} ${color}`"
    class="p-1 px-2 font-bold text-xs rounded"
    v-html="text"
  ></button>
</template>

<style scoped></style>
