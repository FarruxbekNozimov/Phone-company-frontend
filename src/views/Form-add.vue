<script setup>
import Loading from '@/components/Loading.vue'
import { ref } from 'vue'
const data = ref([{}])
const pushData = () => data.value.push({})
</script>

<template>
  <div class="flex gap-5">
    <div class="h-[80vh] w-[75%] bg-white p-5">
      <h3 class="text-2xl mb-3 text-gray-800">Add Form</h3>
      <h3 class="text-md mb-2 text-gray-700">Company Name</h3>
      <select
        class="outline-none bg-white border border-gray-300 text-gray-900 rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-3 mb-5"
      >
        <option selected>Select a company</option>
        <option>Company 1</option>
        <option>Company 2</option>
        <option>Company 3</option>
      </select>
      <h3 class="text-md mb-2 text-gray-700">Form Name</h3>
      <input
        type="text"
        class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300"
        placeholder="Enter Form name"
      />
      <h3 class="text-3xl mb-2 text-gray-700">Form options</h3>
      <h3 class="text-md mb-2 text-gray-700">Price</h3>
      <input
        type="text"
        class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300 bg-gray-100"
        value="Permanent field"
        disabled
      />
      <div class="grid grid-cols-3 gap-5 mb-2">
        <h3 class="text-md text-gray-700">
          Icon ticker <router-link to="/icons" class="text-teal-600">List of icons</router-link>
        </h3>
        <h3 class="text-md text-gray-700">Field Label</h3>
        <h3 class="text-md text-gray-700">Field type</h3>
      </div>
      <div v-for="(el, i) in data" class="mb-3 flex items-center gap-5">
        <input
          type="text"
          class="border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded border-gray-300 w-[33%]"
          placeholder="Enter icon ticker"
        />
        <input
          type="text"
          class="border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded border-gray-300 w-[33%]"
          placeholder="Enter field label"
        />
        <div class="flex items-center gap-5 w-[33%]">
          <select
            class="outline-none bg-white border border-gray-300 text-gray-900 rounded duration-300 focus:ring-teal-500 focus:border-teal-500 block p-2.5 w-full"
          >
            <option selected>Input text</option>
            <option>Select</option>
            <option>Check</option>
            <option>RadioGroup</option>
            <option>Images uploading</option>
          </select>
          <button v-if="i != 0" class="bg-red-500 hover:bg-red-600 p-2 px-4 text-white rounded">
            <i class="bx bx-trash"></i>
          </button>
        </div>
      </div>
      <button @click="pushData" class="block mb-5 bg-blue-600 p-2 px-4 rounded text-white">
        Add more field
      </button>
      <button class="bg-teal-600 p-2 px-4 rounded text-white">Save</button>
    </div>
    <div class="w-[25%]">
      <h3 class="text-2xl mb-3 text-gray-700">Preview</h3>
      <div class="bg-white rounded-t-xl">
        <div class="px-4 flex items-center justify-between py-3">
          <span class="text-sm">19:30</span>
          <div class="flex items-center gap-2">
            <i class="font-bold text-lg bx bx-signal-5"></i>
            <i class="font-bold text-lg bx bx-wifi"></i>
            <i class="font-bold text-lg bx bxs-battery"></i>
          </div>
        </div>
        <div class="px-4 py-3 rounded-xl bg-gray-200">
          <h3 class="text-3xl text-gray-700 mb-5">#0012345</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
