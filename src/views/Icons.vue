<script setup>
import { icons } from '@/constants/icons'
</script>

<template>
  <div class="h-screen">
    <div class="bg-white p-5 shadow rounded">
      <h3 class="text-gray-800 mb-3">Icons</h3>

      <div v-for="(el, i) in icons" class="">
        <h3 class="text-gray-600">{{ i }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
