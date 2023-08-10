<script setup></script>

<template>
  <div>
    <div class="flex items-center justify-between mb-5">
      <button class="flex items-center gap-2 bg-teal-700 rounded px-5 p-2.5 text-white">
        <i class="bx bx-plus"></i>
        <span>Add company</span>
      </button>
      <div class="relative w-96 h-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <i class="bx bx-search text-gray-500 text-xl"></i>
        </div>
        <input
          type="text"
          autocomplete="off"
          class="outline-none block w-full h-full p-3.5 pl-10 text-sm text-gray-900 rounded-lg bg-white border border-gray-300 ring-0 focus:ring-0 focus:border-gray-400"
          placeholder="Search for result"
          required
        />
      </div>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-md text-gray-700 uppercase bg-white">
          <tr>
            <th scope="col" class="px-6 py-3">Company name</th>
            <th scope="col" class="px-6 py-3">USERS</th>
            <th scope="col" class="px-6 py-3">FORMS</th>
            <th scope="col" class="px-6 py-3">REQUESTS</th>
            <th scope="col" class="px-6 py-3">TARRIF PLAN</th>
            <th scope="col" class="px-6 py-3">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white font-medium text-gray-900 border-b hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap flex items-center justify-center gap-2">
              <img src="/logo.svg" alt="" />
              Company name
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center gap-2">
                <div class="text-sm">
                  <h3 class="text-teal-700">12</h3>
                  Active
                </div>
                <div class="text-sm">
                  <h3 class="text-teal-700">24</h3>
                  Unactive
                </div>
                <div class="text-sm">
                  <h3 class="text-red-500">2</h3>
                  Deleted
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">1</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center gap-2">
                <div class="text-sm">
                  <h3 class="text-teal-700">12</h3>
                  Active
                </div>
                <div class="text-sm">
                  <h3 class="text-teal-700">24</h3>
                  Listed
                </div>
                <div class="text-sm">
                  <h3 class="text-teal-700">145</h3>
                  Closed
                </div>
                <div class="text-sm">
                  <h3 class="text-red-500">2</h3>
                  Issued
                </div>
              </div>
            </td>
            <td class="px-6 py-4 w-full whitespace-nowrap">
              <span class="p-2 text-xs rounded bg-teal-600/30 text-teal-700">Start</span>
              till 12.09.2024 -
              <span class="cursor-pointer bg-blue-500/30 text-blue-500 p-2 rounded">Prolang</span>
            </td>
            <td class="px-6 py-4 w-full whitespace-nowrap">
              <span class="p-2 text-xs rounded bg-teal-600/30">Start</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
