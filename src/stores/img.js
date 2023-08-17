import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useImage = defineStore('image', () => {
  const image = ref('')

  const set_image = (img) => {
    image.value = img
  }
  const img = computed(() => image.value)
  return { img, set_image }
})
