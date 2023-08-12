<script setup></script>

<template>
  <div class="bg-white p-5 shadow rounded">
    <p class="mb-5 bg-yellow-100 text-center p-3 text-sm text-yellow-700 rounded">
      Please, enter verified data!
    </p>
    <h3 class="mb-2 text-gray-800">Client ID</h3>
    <input
      type="text"
      class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300 bg-gray-100"
      value="4g4errhs5hsr6jdths534t234trga3445hs5rhsty"
      disabled
    />
    <h3 class="mb-2 text-gray-800">Access KEY</h3>
    <input
      type="text"
      class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300 bg-gray-100"
      value="234234534tgergs45he5hw4segse4gaegraergh"
      disabled
    />
    <h3 class="mb-2 text-gray-800">Username</h3>
    <input
      type="text"
      class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300 bg-gray-100"
      value="John Doe"
      disabled
    />
    <h3 class="mb-2 text-gray-800">Old password</h3>
    <input
      type="text"
      class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300 bg-white"
      value="Enter password"
    />
    <h3 class="mb-2 text-gray-800">New password</h3>
    <input
      type="text"
      class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300 bg-white"
      value="Enter password"
    />
    <h3 class="mb-2 text-gray-800">New password one more time</h3>
    <input
      type="text"
      class="w-full border p-2 px-4 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-300 bg-white"
      value="Enter password"
    />
    <button class="bg-teal-700 p-2 px-4 rounded text-white">Save changes</button>
    <hr class="border-b border-gray-200 my-5" />
    <button
      class="w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white duration-200 p-2 px-4 rounded"
    >
      Delete profile
    </button>
  </div>
</template>

<style scoped></style>
