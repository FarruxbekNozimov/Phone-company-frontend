<script setup>
import { ref } from 'vue'
import Dropdown from './Dropdown.vue'
import StatusButton from './Buttons/StatusButton.vue'
defineProps(['data', 'isactive', 'color', 'text', 'design', 'fields'])
const field = ref(false)
const toggleField = () => (field.value = !field.value)
</script>

<template>
  <div class="p-2 mb-1 rounded-lg" :class="isactive ? 'bg-gray-200' : 'bg-white '">
    <div class="lg:flex items-center justify-between">
      <div class="lg:flex items-center gap-2">
        <div class="flex items-center gap-2">
          <StatusButton text="#002536" :bg="design" pad="p-2.5 px-4 text-blue-500 text-sm" />

          <Dropdown
            icon="bx bxs-chevron-down"
            w="w-24"
            :data="data"
            :design="design"
            :text="text"
          />
        </div>
        <span class="text-lg ml-3">$125</span>
      </div>
      <div @click="toggleField" class="ml-8 pr-2 relative flex items-center gap-2 cursor-pointer">
        <span class="absolute -left-7 duration-300">➖</span>
        <span class="absolute -left-7 duration-300" :class="field ? 'rotate-90' : ''">➖</span>
        <span class="text-sm">Fields: {{ fields?.length || 0 }}</span>
      </div>
    </div>
    <div :class="field ? 'mt-3' : ''">
      <div
        v-for="el in fields"
        class="duration-300 items-center gap-2"
        :class="field ? 'mb-1 px-1 h-auto flex w-full' : 'hidden'"
      >
        <i v-if="el.icon && field" :class="el.icon"></i>
        <span class="duration-300 text-sm text-gray-500">Field name:</span>
        <span class="duration-300 text-sm">Field value</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
