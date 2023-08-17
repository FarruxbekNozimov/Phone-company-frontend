<script setup>
import DeleteButton from '@/components/Buttons/DeleteButton.vue'
import ToggleButton from '@/components/Buttons/ToggleButton.vue'
import EditButton from '@/components/Buttons/EditButton.vue'
import ViewButton from '@/components/Buttons/ViewButton.vue'
import Pagination from '@/components/Pagination.vue'
import StatusButton from '@/components/Buttons/StatusButton.vue'
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-5">
      <router-link
        to="user-add"
        class="flex items-center gap-2 bg-teal-700 rounded px-5 p-2 text-white"
      >
        <i class="bx bx-plus"></i>
        <span>Add users</span>
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
            <th class="px-5 py-3 font-bold">MEMBER NAME</th>
            <th class="px-5 py-3 font-bold">COMPANY</th>
            <th class="px-2 py-3 font-bold">FORMS</th>
            <th class="px-5 py-3 font-bold">REQUESTS</th>
            <th class="px-5 py-3 font-bold">APP STATUS</th>
            <th class="px-5 py-3 font-bold">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="el in 10" class="bg-white font-medium text-gray-900 border-b hover:bg-gray-50">
            <td class="py-4 whitespace-nowrap flex items-center justify-center gap-2">
              <img v-if="el % 2" src="/logo.svg" class="h-9 w-9 rounded-full" alt="" />
              <img v-else src="/users/avatar-2.jpg" class="h-9 w-9 rounded-full" alt="" />
              <router-link to="/company"> Company name </router-link>
            </td>
            <td class="px-5 py-4 whitespace-nowrap">
              <router-link to="/company"> company name </router-link>
            </td>
            <td class="px-2 py-4">1</td>
            <td class="px-5 py-4 whitespace-nowrap">
              <div class="flex items-center gap-2">
                <div class="">
                  <StatusButton text="12" bg="bg-green-500/10 block" color="text-green-900" />
                  <span class="text-xs">Active</span>
                </div>
                <div class="">
                  <StatusButton text="24" bg="bg-blue-500/10 block" color="text-blue-900" />
                  <span class="text-xs">Listed</span>
                </div>
                <div class="">
                  <StatusButton text="145" bg="bg-purple-500/10 block" color="text-purple-900" />
                  <span class="text-xs">Closed</span>
                </div>
                <div class="">
                  <StatusButton text="145" bg="bg-red-500/10 block" color="text-red-900" />
                  <span class="text-xs">Issued</span>
                </div>
                <div class="">
                  <StatusButton text="2" bg="bg-red-500 block" color="text-white" />
                  <span class="text-xs">Deleted</span>
                </div>
              </div>
            </td>
            <td v-if="el % 2" class="text-xs px-5 py-4 whitespace-nowrap">
              <StatusButton
                text="Active"
                bg="bg-green-500/10 block"
                color="text-green-900"
                pad="font-bold p-2 px-3"
              />
            </td>
            <td v-else-if="el % 3 == 1" class="text-xs px-5 py-4 whitespace-nowrap">
              <StatusButton
                text="Unactive"
                bg="bg-purple-500/10 block"
                color="text-purple-900"
                pad="font-bold p-2 px-3"
              />
            </td>
            <td v-else class="text-xs px-5 py-4 whitespace-nowrap">
              <StatusButton
                text="Deleted"
                bg="bg-red-500/10 block"
                color="text-red-700"
                pad="font-bold p-2 px-3"
              />
            </td>
            <td class="px-5 py-4 whitespace-nowrap">
              <div class="flex gap-2">
                <router-link to="/user">
                  <ViewButton />
                </router-link>
                <router-link to="/user-add">
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
