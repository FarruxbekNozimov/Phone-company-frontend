<script setup>
import DeleteButton from '@/components/Buttons/DeleteButton.vue'
import ToggleButton from '@/components/Buttons/ToggleButton.vue'
import EditButton from '@/components/Buttons/EditButton.vue'
import ViewButton from '@/components/Buttons/ViewButton.vue'
import MoreButton from '@/components/Buttons/MoreButton.vue'
import Pagination from '@/components/Pagination.vue'
</script>

<template>
  <div class="relative">
    <div class="flex items-center justify-between mb-5">
      <button class="flex items-center gap-2 bg-teal-700 rounded px-5 p-2 text-white">
        <i class="bx bx-plus"></i>
        <span>Add Form</span>
      </button>
      <div class="flex items-center gap-5">
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
        <MoreButton />
      </div>
    </div>

    <div class="mb-5 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-md text-gray-500 uppercase bg-white">
          <tr>
            <th class="px-5 py-3 font-bold whitespace-nowrap">FORM NAME</th>
            <th class="px-5 py-3 font-bold whitespace-nowrap">AVAILABLE FOR USERS</th>
            <th class="px-5 py-3 font-bold whitespace-nowrap">FIELDS</th>
            <th class="px-5 py-3 font-bold whitespace-nowrap">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="el in 10" class="bg-white font-medium text-gray-900 border-b hover:bg-gray-50">
            <td class="px-5 py-4 whitespace-nowrap gap-2">
              <router-link to="form" class="block text-md">Form name</router-link>
              <span class="text-sm">Company name</span>
            </td>
            <td class="px-5 py-4 whitespace-nowrap">32</td>
            <td class="px-5 py-4 whitespace-nowrap">
              Field name Field name Field name Field name Field name + 2
            </td>
            <td class="flex gap-2 px-5 py-4 w-full whitespace-nowrap">
              <ViewButton />
              <EditButton />
              <ToggleButton />
              <DeleteButton />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination />
  </div>
</template>

<style scoped></style>
