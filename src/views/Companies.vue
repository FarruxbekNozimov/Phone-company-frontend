<script setup>
import DeleteButton from '@/components/Buttons/DeleteButton.vue'
import ToggleButton from '@/components/Buttons/ToggleButton.vue'
import EditButton from '@/components/Buttons/EditButton.vue'
import ViewButton from '@/components/Buttons/ViewButton.vue'
import Pagination from '@/components/Pagination.vue'
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-5">
      <router-link
        to="company-add"
        class="flex items-center gap-2 bg-teal-700 rounded px-5 p-2 text-white"
      >
        <i class="bx bx-plus"></i>
        <span>Add company</span>
      </router-link>
      <div class="relative w-72 h-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <i class="bx bx-search text-gray-500 text-xl"></i>
        </div>
        <input
          type="text"
          autocomplete="off"
          class="outline-none block w-full h-full p-3 pl-10 text-sm text-gray-900 rounded bg-white border border-gray-300 ring-0 focus:ring-0 focus:border-gray-400"
          placeholder="Search for result"
          required
        />
      </div>
    </div>

    <div class="mb-5 overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-left">
        <thead class="text-sm text-gray-500 uppercase bg-white">
          <tr>
            <th class="px-5 py-3 font-bold">Company name</th>
            <th class="px-5 py-3 font-bold">USERS</th>
            <th class="px-2 py-3 font-bold">FORMS</th>
            <th class="px-5 py-3 font-bold">REQUESTS</th>
            <th class="px-5 py-3 font-bold">TARRIF PLAN</th>
            <th class="px-5 py-3 font-bold">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="el in 10" class="bg-white font-medium text-gray-900 border-b hover:bg-gray-50">
            <td class="py-4 whitespace-nowrap flex items-center justify-center gap-2">
              <router-link to="/company" class="flex items-center gap-2">
                <img v-if="el % 2" src="/logo.svg" class="h-9 w-9 rounded-full" alt="" />
                <img v-else src="/users/avatar-2.jpg" class="h-9 w-9 rounded-full" alt="" />
                Company name
              </router-link>
            </td>
            <td class="px-5 py-4 whitespace-nowrap">
              <div class="flex items-center gap-2">
                <div class="">
                  <h3 class="text-md text-teal-700">12</h3>
                  <span class="text-xs">Active</span>
                </div>
                <div class="">
                  <h3 class="text-md text-teal-700">24</h3>
                  <span class="text-xs">Unactive</span>
                </div>
                <div class="">
                  <h3 class="text-md text-red-500">2</h3>
                  <span class="text-xs">Deleted</span>
                </div>
              </div>
            </td>
            <td class="px-2 py-4">1</td>
            <td class="px-5 py-4 whitespace-nowrap">
              <div class="flex items-center gap-2">
                <div class="">
                  <h3 class="text-md text-teal-700">12</h3>
                  <span class="text-xs">Active</span>
                </div>
                <div class="">
                  <h3 class="text-md text-teal-700">24</h3>
                  <span class="text-xs">Listed</span>
                </div>
                <div class="">
                  <h3 class="text-md text-teal-700">145</h3>
                  <span class="text-xs">Closed</span>
                </div>
                <div class="">
                  <h3 class="text-md text-red-500">2</h3>
                  <span class="text-xs">Issued</span>
                </div>
              </div>
            </td>
            <td v-if="el % 2" class="text-xs px-5 py-4 whitespace-nowrap">
              <span class="text-xs p-1 rounded bg-teal-600/10 px-2 text-teal-700">Start</span>
              till 12.09.2024 -
              <span
                class="text-xs cursor-pointer bg-blue-500/10 px-2 hover:bg-blue-500 duration-200 text-blue-500 hover:text-white p-1 rounded"
              >
                Prolang
              </span>
            </td>
            <td v-else class="text-xs px-5 py-4 whitespace-nowrap">
              <span class="text-xs p-1 rounded bg-purple-600/10 px-2 text-purple-700">Start</span> -
              <span
                class="text-xs cursor-pointer bg-red-500/10 hover:bg-red-500 duration-200 text-red-500 hover:text-white p-1 rounded"
              >
                awaiting payment
              </span>
            </td>
            <td class="px-5 py-4 whitespace-nowrap">
              <div class="flex gap-2">
                <router-link to="/company">
                  <ViewButton />
                </router-link>
                <router-link to="/company-add">
                  <EditButton />
                </router-link>
                <ToggleButton />
                <DeleteButton />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination />
  </div>
</template>

<style scoped></style>
