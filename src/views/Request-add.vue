<script setup>
import Loading from '@/components/Loading.vue'
import { chat_menus } from '../constants/chat_menus'
import { ref } from 'vue'

const activeBtn = ref(0)
</script>

<template>
  <div class="p-5 rounded shadow bg-white">
    <h3 class="text-md mb-2 text-gray-700">Choose Company</h3>
    <select
      class="outline-none bg-white border border-gray-300 text-gray-900 rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-3 mb-5"
    >
      <option selected>Choose...</option>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </select>
    <div class="flex items-center justify-center mb-5">
      <Loading />
    </div>
    <h3 class="text-md mb-2 text-gray-800">Choose Form</h3>
    <select
      class="outline-none bg-white border border-gray-300 text-gray-900 rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-3 mb-5"
    >
      <option selected>Choose...</option>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </select>
    <div class="flex items-center justify-center">
      <Loading />
    </div>
    <h3 class="text-md mb-2 text-gray-800">Price</h3>
    <input
      type="text"
      class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300"
      placeholder="Enter Price"
    />
    <h3 class="text-md mb-2 text-gray-800">Field Name 1</h3>
    <input
      type="text"
      class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300"
      placeholder="Enter Value 1"
    />
    <h3 class="text-md mb-2 text-gray-800">Field Name 2</h3>
    <input
      type="text"
      class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300"
      placeholder="Enter Value 2"
    />
    <h3 class="text-md mb-2 text-gray-800">Field Name 3</h3>
    <input
      type="text"
      class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300"
      placeholder="Enter Value 3"
    />
    <h3 class="text-md mb-2 text-gray-800">Field Name 4</h3>
    <textarea
      type="text"
      class="h-24 w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300"
      placeholder="Enter Value 4"
    ></textarea>
    <label
      for="upload"
      class="text-gray-600 h-64 border border-teal-600 rounded block text-center py-14 mb-3"
    >
      <i class="bx bx-cloud-upload text-7xl"></i>
      <h3 class="text-2xl">Add images</h3>
    </label>
    <input type="file" id="upload" class="hidden" />
    <div class="flex items-center justify-between py-5">
      <img src="/users/avatar-3.jpg" class="h-10 w-10 rounded-full" alt="" />
      <button class="bg-red-500 hover:bg-red-600 px-4 p-2 text-white rounded text-sm">
        Delete
      </button>
    </div>
    <div
      class="text-md font-medium text-gray-900 bg-white border border-gray-300 border-b-0 rounded-lg white mb-5 cursor-pointer"
    >
      <div v-for="i in 3" class="border-b border-gray-300 flex items-center pl-3">
        <input
          :id="i"
          type="radio"
          name="list-radio"
          checked
          class="w-4 h-4 text-teal-600 border bg-gray-100 border-gray-300 focus:ring-teal-500"
        />
        <label :for="i" class="w-full py-3 ml-2 text-md font-medium text-gray-500">
          <span class="text-gray-800">Value {{ i }}</span>
        </label>
      </div>
    </div>
    <div class="flex items-center mb-2">
      <input
        id="default-checkbox"
        type="checkbox"
        class="w-4 h-4 text-teal-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-teal-500"
      />
      <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">
        Check value 1
      </label>
    </div>
    <div class="flex items-center mb-5">
      <input
        id="default-checkbox"
        type="checkbox"
        class="w-4 h-4 text-teal-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-teal-500"
        checked
      />
      <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">
        Check value 1
      </label>
    </div>
    <div class="flex items-center mb-5">
      <div
        v-for="(el, i) in chat_menus"
        class="p-2 px-4 rounded cursor-pointer"
        :class="activeBtn == i ? `${el.active} text-white` : `${el.bg} ${el.color}`"
        @click="
          () => {
            activeBtn = i
          }
        "
      >
        {{ el.name }}
      </div>
    </div>
    <button class="bg-teal-700 p-2 px-4 rounded text-white">Send request</button>
  </div>
</template>

<style scoped></style>
