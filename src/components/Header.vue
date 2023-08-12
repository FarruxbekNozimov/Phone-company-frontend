<script setup>
import { ref } from 'vue'
import { langs } from '@/constants/langs'

const currentLang = ref(langs[0])
const drop = ref(false)
const changeDrop = () => (drop.value = !drop.value)

const lang = ref(false)
const changeLang = () => (lang.value = !lang.value)

const fullscreen = ref(false)
const toggleFullScreen = () => {
  fullscreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
  fullscreen.value = !fullscreen.value
}
</script>

<template>
  <div
    class="fixed z-50 h-[70px] lg:w-[calc(100%-260px)] w-[calc(100%-80px)] bg-white shadow flex items-center justify-between px-5"
  >
    <div class="flex items-center gap-5">
      <i class="bx bx-menu-alt-left text-gray-500 cursor-pointer hover:scale-105 text-3xl"></i>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <i class="bx bx-search text-gray-500 text-xl"></i>
        </div>
        <input
          type="text"
          autocomplete="off"
          class="outline-none block w-64 p-2 pl-10 text-sm text-gray-900 rounded-lg bg-gray-100 border-none"
          placeholder="Search..."
          required
        />
      </div>
    </div>
    <div class="flex items-center gap-5 text-gray-500">
      <div class="relative">
        <img
          @click="changeLang"
          :src="`/flags/${currentLang[0]}.svg`"
          class="w-5 h-5 rounded-md cursor-pointer hover:ring-8 hover:ring-blue-300/40"
        />
        <div
          class="absolute right-0 top-12 w-36 bg-white shadow-xl rounded-lg py-2"
          :class="lang ? 'block' : 'hidden'"
        >
          <div
            v-for="lang in langs"
            class="px-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center gap-3"
            @click="
              () => {
                currentLang = lang
                changeLang()
              }
            "
          >
            <img :src="`/flags/${lang[0]}.svg`" class="w-5 h-5 rounded-md cursor-pointer" />
            <span class="text-sm">{{ lang[1] }}</span>
          </div>
        </div>
      </div>
      <i
        @click="() => toggleFullScreen()"
        v-if="!fullscreen"
        class="bx bx-fullscreen text-2xl hover:bg-blue-500/20 p-1 px-2 rounded-full cursor-pointer flex items-center justify-center"
      ></i>
      <i
        @click="() => toggleFullScreen()"
        v-if="fullscreen"
        class="bx bx-exit-fullscreen text-2xl hover:bg-blue-500/20 p-1 px-2 rounded-full cursor-pointer flex items-center justify-center"
      ></i>
      <div class="relative">
        <div @click="changeDrop" class="cursor-pointer">
          John Doe <i class="bx bxs-chevron-down"></i>
        </div>
        <div
          class="absolute py-2 rounded-lg top-12 duration-300 w-36 bg-white shadow-xl"
          :class="drop ? 'right-0' : '-right-56'"
        >
          <div class="px-5 flex items-center gap-2 cursor-pointer hover:bg-gray-300/50 p-1 mb-2">
            <i class="bx bx-user text-lg"></i> Profile
          </div>
          <hr class="bg-gray-500 w-full mb-2" />
          <div
            class="px-5 flex items-center gap-2 cursor-pointer hover:bg-gray-300/50 p-1 text-red-500"
          >
            <i class="bx bx-log-out-circle"></i> Logout
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
