<script setup>
import { useImage } from '@/stores/img'
const img_store = useImage()
</script>

<template>
  <div
    v-if="img_store.img"
    class="z-50 top-0 left-0 absolute bg-black/50 w-full h-screen flex items-center justify-center"
  >
    <div class="max-w-[90%] h-[80%]">
      <img
        :src="img_store.img"
        class="cursor-zoom-out w-full h-full object-cover rounded-xl"
        @click="img_store.set_image(null)"
      />
    </div>
  </div>
</template>

<style scoped></style>
