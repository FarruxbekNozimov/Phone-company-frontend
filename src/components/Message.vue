<script setup>
import { useImage } from '@/stores/img'
defineProps(['msg'])

const img_store = useImage()
</script>
<template>
  <div class="w-full px-4 my-2 rounded-lg gap-3 flex" :class="msg.mine ? 'justify-end' : ''">
    <img v-if="!msg.mine" class="h-10 w-10 rounded-full" :src="msg.user_photo" alt="" />
    <div v-else class="w-10"></div>
    <div class="">
      <div
        class="text-gray-800 w-auto rounded bg-gray-100 p-2 px-4 text-sm shadow"
        :class="msg.mine ? 'text-end' : ''"
      >
        {{ msg.msg }}
        <div v-if="msg.imgs" class="mt-3 flex items-center flex-wrap gap-2">
          <img
            v-for="img in msg.imgs"
            :src="img"
            class="cursor-zoom-in rounded w-32"
            @click="() => img_store.set_image(img)"
          />
        </div>
      </div>
      <div class="text-gray-500 my-1 flex gap-2 items-center justify-end">
        <span class="text-xs">15:33</span>
        <i class="bx bx-check-double text-green-700"></i>
      </div>
    </div>
    <img v-if="msg.mine" class="h-10 w-10 rounded-full" :src="msg.user_photo" alt="" />
    <div v-else class="w-10"></div>
  </div>
</template>

<style scoped></style>
