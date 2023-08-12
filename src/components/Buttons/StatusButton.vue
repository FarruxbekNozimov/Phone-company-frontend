<script setup>
defineProps(['text', 'bg', 'color', 'pad'])
</script>

<template>
  <button
    class="rounded"
    :class="`${bg} ${color} ${pad ? pad : 'text-xs p-1 px-2'}`"
    v-html="text"
  ></button>
</template>

<style scoped></style>
