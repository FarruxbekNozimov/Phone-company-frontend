<script setup>
import DeleteModal from '@/components/DeleteModal.vue'
import { ref } from 'vue'
const modal = ref(false)
const changeModal = () => (modal.value = !modal.value)
</script>

<template>
  <DeleteModal :modalFunc="changeModal" :modal="modal" />
  <button @click="changeModal" class="text-red-500 text-sm">Clear history</button>
</template>

<style scoped></style>
