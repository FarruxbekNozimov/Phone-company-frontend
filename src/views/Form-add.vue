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
          <button class="bg-teal-600 p-2 px-4 rounded text-white">Send request</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
