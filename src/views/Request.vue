<script setup>
import ChatButton from '@/components/Buttons/ChatButton.vue'
import EditButton from '@/components/Buttons/EditButton.vue'
import DeleteButton from '@/components/Buttons/DeleteButton.vue'
import { ref } from 'vue'

const fields = [
  { icon: 'bx bx-coffee' },
  { icon: 'bx bxs-castle' },
  { icon: 'bx bx-info-circle' },
  { icon: '' },
  { icon: '' },
  { icon: '' },
  { icon: 'bx bx-task' }
]
</script>

<template>
  <div>
    <div class="flex items-end gap-5 mb-5">
      <img src="/users/avatar-2.jpg" class="h-8 w-8 object-cover rounded-full" alt="" />
      <h3 class="text-4xl text-gray-700">#001234</h3>
      <span class="text-4xl text-gray-500">(12.06.2023)</span>
      <div class="flex items-center gap-3">
        <router-link to="/chats">
          <ChatButton />
        </router-link>
        <router-link to="/request-add.html">
          <EditButton />
        </router-link>
        <DeleteButton />
      </div>
    </div>
    <div class="bg-white w-full p-4 shadow rounded mb-5">
      <div class="mb-4 flex items-end gap-2 text-gray-700">
        <i class="bx bx-user-circle text-md"></i>
        <span class="text-lg leading-5">User</span>
      </div>
      <div class="flex items-center gap-5">
        <router-link to="/user" class="bg-blue-500/10 w-28 p-2 rounded flex items-center gap-2">
          <img src="/users/avatar-2.jpg" class="w-8 h-8 rounded-full" alt="" />
          <span class="text-xs">John Doe</span>
        </router-link>
      </div>
    </div>
    <div class="mb-5 p-4 bg-white shadow rounded">
      <div class="mb-4 flex items-end gap-2 text-gray-700">
        <i class="bx bx-list-check text-md"></i>
        <span class="text-lg leading-5">Fields value</span>
      </div>
      <h3 class="mb-3 flex items-center gap-2 text-gray-500"></h3>
      <div v-for="el in fields" class="mb-3 flex items-center gap-2">
        <i v-if="el.icon" :class="el.icon" class="text-gray-500"></i>
        <span class="text-sm text-gray-500">Field name:</span>
        <span class="text-sm text-gray-900">Field value</span>
      </div>
    </div>
    <div class="mb-5 p-4 bg-white shadow rounded">
      <h3 class="mb-3 flex items-center gap-2 text-gray-500">
        <i class="bx bx-home-circle text-2xl"></i>
        <span class="text-lg text-gray-800">Company</span>
      </h3>
      <router-link to="company" class="mb-3 flex items-center gap-2">
        <img src="/logo.svg" alt="" />
        <span>Company name</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
