<script setup>
import { ref } from 'vue'
import { datas } from '@/constants/itemDatas'

const currentItem = ref(1)
</script>

<template>
  <div>
    <div
      class="bg-yellow-200/20 border border-yellow-200 rounded-lg text-yellow-800/70 text-sm p-5 shadow roudned mb-5"
    >
      Alert text from administration!
    </div>
    <div class="bg-white rounded-lg shadow p-5">
      <div class="border rounded-lg mb-5">
        <a
          class="block p-4 px-5 hover:bg-gray-200 rounded-lg"
          :class="
            (el != 4 ? 'border-b' : '',
            currentItem == el ? 'bg-teal-700 hover:bg-teal-700 text-white' : '')
          "
          v-for="el in 4"
          @click="() => (currentItem = el)"
          :href="`#item-${el}`"
        >
          Item {{ el }}
        </a>
      </div>
      <div class="h-96 text-gray-600 overflow-y-auto scroll-smooth">
        <div v-for="(el, i) in datas" :id="`item-${i + 1}`" class="">
          <h3 class="text-2xl my-2">Item {{ i + 1 }}</h3>
          <p class="leading-6">{{ el }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
