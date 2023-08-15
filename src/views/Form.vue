<script setup>
import DeleteButton from '@/components/Buttons/DeleteButton.vue'
import ToggleButton from '@/components/Buttons/ToggleButton.vue'
import EditButton from '@/components/Buttons/EditButton.vue'
</script>

<template>
  <div class="h-screen">
    <div class="flex items-end gap-5 mb-5">
      <img src="/users/avatar-2.jpg" class="h-8 w-8 object-cover rounded-full" alt="" />
      <h3 class="text-4xl text-gray-700">Form name</h3>
      <div class="flex items-center gap-3">
        <router-link to="/form-add">
          <EditButton />
        </router-link>
        <ToggleButton />
        <DeleteButton />
      </div>
    </div>
    <div class="bg-white w-full p-4 shadow rounded mb-5">
      <div class="mb-4 flex items-end gap-2 text-gray-700">
        <i class="bx bx-user-circle text-lg"></i>
        <span class="text-lg">User</span>
      </div>
      <div class="flex items-center gap-5">
        <router-link to="/user" class="bg-blue-500/10 w-28 p-2 rounded flex items-center gap-2">
          <img src="/users/avatar-2.jpg" class="w-8 h-8 rounded-full" alt="" />
          <span class="text-xs">John Doe</span>
        </router-link>
        <router-link to="/user" class="bg-purple-500/10 w-28 p-2 rounded flex items-center gap-2">
          <img src="/users/avatar-2.jpg" class="w-8 h-8 rounded-full" alt="" />
          <span class="text-xs">John Doe</span>
        </router-link>
        <router-link to="/user" class="bg-red-500/10 w-28 p-2 rounded flex items-center gap-2">
          <img src="/users/avatar-2.jpg" class="w-8 h-8 rounded-full" alt="" />
          <span class="text-xs">John Doe</span>
        </router-link>
        <div
          class="text-teal-600 hover:text-white border border-teal-600 hover:bg-teal-600 cursor-pointer px-2 py-1 rounded"
        >
          Load more...
        </div>
      </div>
    </div>
    <div class="mb-5 p-4 bg-white shadow rounded">
      <div class="mb-4 flex items-end gap-2 text-gray-700">
        <i class="bx bx-list-check text-md"></i>
        <span class="text-lg leading-5">Fields value</span>
      </div>
      <h3 class="mb-3 flex items-center gap-2 text-gray-500"></h3>
      <span v-for="el in 5" class="mr-3">Field name</span>
    </div>
    <div class="bg-white w-full p-4 shadow rounded mb-5">
      <div class="flex items-center gap-2 text-gray-700 mb-5">
        <i class="bx bx-home-circle text-lg"></i>
        <h3>Companies</h3>
      </div>
      <div class="flex items-center gap-3">
        <router-link v-for="el in 4" to="/company" class="flex items-center gap-3">
          <img src="/logo.svg" alt="" />
          <span>Company name</span>
        </router-link>
        <div
          class="text-teal-600 hover:text-white border border-teal-600 hover:bg-teal-600 cursor-pointer px-2 py-1 rounded"
        >
          Load more...
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
