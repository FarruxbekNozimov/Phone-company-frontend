<script setup>
import ChatOne from '../components/ChatOne.vue'
import DeleteButton from '../components/Buttons/DeleteButton.vue'
import Clear from '../components/Clear.vue'
import { ref } from 'vue'
const checkAll = ref(false)
const changeCheck = () => (checkAll.value = !checkAll.value)
</script>

<template>
  <div class="flex gap-5">
    <div class="w-[24%] sticky">
      <select
        class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 outline-none"
      >
        <option selected>Choose a company</option>
        <option value="company 1">Company 1</option>
        <option value="company 2">Company 2</option>
        <option value="company 3">Company 3</option>
      </select>
      <div class="relative flex">
        <input
          type="text"
          autocomplete="off"
          class="border border-gray-300 outline-none block w-full p-2.5 pr-10 text-sm text-gray-900 rounded-l bg-white"
          placeholder="Search in user"
          required
        />
        <div
          class="inset-y-0 right-0 cursor-pointer hover:bg-gray-800 bg-gray-300 p-1 px-3 rounded-r flex items-center justify-center pl-3"
        >
          <i class="bx bx-search text-gray-500 text-xl"></i>
        </div>
      </div>
      <div role="status" class="text-center flex items-center justify-center py-3">
        <svg
          aria-hidden="true"
          class="w-8 h-8 mr-2 animate-spin text-gray-100 fill-teal-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
      <div class="">
        <div class="flex items-center mb-4">
          <input
            id="checkbox"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            @change="changeCheck"
          />
          <label for="checkbox" class="ml-2 text-sm font-medium text-gray-900">Check all</label>
        </div>
        <ChatOne
          isChat="1"
          img="/users/avatar-2.jpg"
          title="John Doe"
          text="company name"
          isactive="1"
          :selected="checkAll"
        />
        <ChatOne
          isChat="1"
          img="/users/avatar-2.jpg"
          title="John Doe"
          text="company name"
          :selected="checkAll"
        />
        <ChatOne
          isChat="1"
          img="/logo.svg"
          title="John Doe"
          text="company name"
          :selected="checkAll"
        />
      </div>
    </div>
    <div class="w-[58%]">
      <h3 class="text-3xl text-gray-600 mb-3">Alert text</h3>
      <textarea
        class="w-full h-24 outline-none p-5 border border-gray-300 focus:border-teal-400 rounded"
      ></textarea>
      <button class="bg-teal-600 hover:bg-teal-700 duration-300 p-2 px-3 text-white rounded mb-3">
        Send alert
      </button>
      <h3 class="text-[26px] text-gray-500">Alerts history</h3>
      <Clear />
      <div v-for="el in 3" class="mb-2 shadow bg-white p-3 rounded">
        <div class="mb-3 flex items-center justify-between">
          <span class="font-thin">10.03.2023 - 14:30</span>
          <DeleteButton />
        </div>
        <div class="px-3 p-3 mb-4 border-l-4">
          <div>Hello, {username}! Please notice me your status.</div>
        </div>
        <div class="mb-2">
          <span class="">Company name:</span>
          <router-link v-for="el in 5" to="/user" class="text-teal-700">
            Username <span v-if="el != 5" class="text-gray-700">,</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="w-[13%]">
      <h3 class="text-3xl text-gray-600 mb-3">Variables</h3>
      <div class="text-gray-600 flex mb-5 px-2 justify-between gap-5">
        <span>Usernmae</span>
        <span>{username}</span>
      </div>
      <div class="text-gray-600 flex mb-5 px-2 justify-between gap-5">
        <span>Company name</span>
        <span>{username}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
