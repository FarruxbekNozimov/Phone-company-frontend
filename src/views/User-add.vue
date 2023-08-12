<script setup>
import Loading from '@/components/Loading.vue'
</script>

<template>
  <div class="p-5 rounded bg-white shadow">
    <label
      for="upload"
      class="text-gray-600 h-64 border border-teal-600 rounded block text-center py-14 mb-3"
    >
      <i class="bx bx-cloud-upload text-7xl"></i>
      <h3 class="text-2xl">Add avatar</h3>
    </label>
    <input type="file" id="upload" class="hidden" />
    <div class="flex items-center justify-between py-5">
      <img src="/users/avatar-3.jpg" class="h-10 w-10 rounded-full" alt="" />
      <button class="bg-red-500 hover:bg-red-600 px-4 p-2 text-white rounded text-sm">
        Delete
      </button>
    </div>
    <h3 class="text-md mb-2 text-gray-800">Username</h3>
    <input
      type="text"
      class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300"
      placeholder="Enter User Name"
    />
    <h3 class="mb-2 text-gray-800">User Access Code</h3>
    <input
      type="text"
      class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300 bg-gray-100"
      value="AEg4drhgSH$HrdhtS5hS%H%HD%"
      disabled
    />
    <h3 class="text-md mb-2 text-gray-700">User Comment</h3>
    <textarea
      class="h-28 w-full border p-3 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-400"
    ></textarea>
    <h3 class="text-md mb-2 text-gray-700">Choose Company</h3>
    <select
      class="outline-none bg-white border border-gray-300 text-gray-900 rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-3 mb-5"
    >
      <option selected>Choose company</option>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </select>
    <div class="flex items-center justify-center">
      <Loading />
    </div>
    <h3 class="text-3xl mb-2 text-gray-700">Available forms</h3>
    <div class="flex items-center mb-2">
      <input
        id="default-checkbox"
        type="checkbox"
        class="w-4 h-4 text-teal-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-teal-500"
      />
      <label for="default-checkbox" class="ml-2 text-sm text-gray-900"> Form 1 name </label>
    </div>
    <div class="flex items-center mb-5">
      <input
        id="default-checkbox"
        type="checkbox"
        class="w-4 h-4 text-teal-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-teal-500"
        checked
      />
      <label for="default-checkbox" class="ml-2 text-sm text-gray-900"> Form 2 name </label>
    </div>
    <button class="bg-teal-700 p-2 px-4 rounded text-white">Add User</button>
  </div>
</template>

<style scoped></style>
