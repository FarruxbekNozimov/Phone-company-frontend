<script setup>
import DeleteButton from '@/components/Buttons/DeleteButton.vue'
import ToggleButton from '@/components/Buttons/ToggleButton.vue'
import EditButton from '@/components/Buttons/EditButton.vue'
</script>

<template>
  <div>
    <div class="flex items-end gap-5 mb-5">
      <img src="/users/avatar-2.jpg" class="h-8 w-8 object-cover rounded-full" alt="" />
      <h3 class="text-4xl text-gray-700">Company name</h3>
      <div class="flex items-center gap-3">
        <router-link to="/company-add">
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
    <div class="bg-white w-full p-4 shadow rounded mb-5">
      <div class="mb-4 flex items-end gap-2 text-gray-700">
        <i class="bx bx-list-check text-lg"></i>
        <span class="text-lg">Forms</span>
      </div>
      <div class="flex items-end gap-2 text-gray-700 mb-5"></div>
      <div class="flex items-center gap-5">
        <router-link to="form" class="text-sm bg-black/10 text-gray-700 p-2 px-3 rounded">
          Form name
        </router-link>
        <router-link to="form" class="text-sm bg-black/10 text-gray-700 p-2 px-3 rounded">
          Form name
        </router-link>
        <div
          class="text-teal-600 hover:text-white border border-teal-600 hover:bg-teal-600 cursor-pointer px-2 py-1 rounded"
        >
          Load more...
        </div>
      </div>
    </div>
    <div class="bg-white w-full p-4 shadow rounded mb-5">
      <div class="flex items-center gap-2 text-gray-700 mb-5">
        <i class="bx bx-receipt text-xl"></i>
        <h3>Requests</h3>
      </div>
      <div class="flex items-center gap-5">
        <router-link to="/request" class="text-sm bg-black/10 text-gray-700 p-2 px-3 rounded">
          #001234
        </router-link>
        <router-link to="/request" class="text-sm bg-black/10 text-gray-700 p-2 px-3 rounded">
          #001234
        </router-link>
        <router-link to="/request" class="text-sm bg-red-500 text-gray-700 p-2 px-3 rounded">
          #001234
        </router-link>
        <router-link to="/request" class="text-sm bg-red-500/30 text-gray-700 p-2 px-3 rounded"
          >#001234
        </router-link>
        <router-link to="/request" class="text-sm bg-black/10 text-gray-700 p-2 px-3 rounded">
          #001234
        </router-link>
        <div
          class="text-teal-600 hover:text-white border border-teal-600 hover:bg-teal-600 cursor-pointer px-2 py-1 rounded"
        >
          Load more...
        </div>
      </div>
    </div>
    <div class="bg-white w-full p-4 shadow rounded mb-5">
      <div class="flex items-center gap-2 text-gray-700 mb-5">
        <i class="bx bx-dollar text-xl"></i>
        <h3>Tariff</h3>
      </div>
      <div class="flex items-center gap-5">
        <router-link to="" class="flex items-center gap-3">
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
