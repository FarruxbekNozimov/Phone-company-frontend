<script setup>
const tariff = {
  Start: 5,
  Optimal: 25,
  Top: 50,
  Premium: 150
}
</script>

<template>
  <div class="p-5 rounded bg-white shadow">
    <h3 class="text-md mb-2 text-gray-700">Company Name</h3>
    <input
      type="text"
      class="w-full border p-2 px-3 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-400"
      placeholder="Enter company name"
    />
    <label
      for="upload"
      class="text-gray-600 h-64 border border-teal-600 rounded block text-center py-14 mb-3"
    >
      <i class="bx bx-cloud-upload text-7xl"></i>
      <h3 class="text-2xl">Add company logo</h3>
    </label>
    <input type="file" id="upload" class="hidden" />
    <p class="mb-3 text-gray-800">Leave image field blanc to get random pictures</p>
    <h3 class="text-md mb-2 text-gray-700">Company Name</h3>
    <textarea
      class="h-28 w-full border p-3 outline-none focus:border-teal-600 duration-300 rounded mb-4 border-gray-400"
      placeholder="Enter company comment"
    ></textarea>

    <h3 class="text-4xl mb-2 text-gray-700">Tariff</h3>
    <div
      class="text-md font-medium text-gray-900 bg-white border border-gray-200 border-b-none rounded-lg white mb-5"
    >
      <div class="w-full border-b border-gray-200 rounded-t-lg">
        <div v-for="(el, i, j) in tariff" class="flex items-center pl-3">
          <input
            :id="j"
            type="radio"
            name="list-radio"
            class="w-4 h-4 text-teal-600 border bg-gray-100 border-gray-300 focus:ring-teal-500"
          />
          <label :for="j" class="w-full py-3 ml-2 text-md font-medium text-gray-500">
            <span class="font-bold text-gray-800">{{ i }}</span>
            ( up to {{ el }} users)
          </label>
        </div>
      </div>
    </div>
    <button class="bg-teal-600 p-2 px-4 rounded text-white">Save</button>
  </div>
</template>

<style scoped></style>
