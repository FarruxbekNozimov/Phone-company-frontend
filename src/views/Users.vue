<script setup>
import Popover from '@/components/Popover.vue'
</script>

<template>
  <div>
    <div class="flex items-end gap-5 mb-5">
      <img src="/users/avatar-2.jpg" class="h-8 w-8 object-cover rounded-full" alt="" />
      <h3 class="text-4xl text-gray-600">John Doe</h3>
      <div class="flex items-center gap-3">
        <button
          class="bg-blue-500/30 text-blue-700 hover:bg-blue-500 hover:text-white duration-300 p-2 px-3 rounded flex items-center justify-center"
        >
          <i class="bx bx-pencil"></i>
        </button>
        <button
          class="bg-blue-500/30 text-blue-700 hover:bg-blue-500 hover:text-white duration-300 p-2 px-3 rounded flex items-center justify-center"
        >
          <i class="bx bx-toggle-right"></i>
        </button>
        <button
          class="bg-red-500/30 text-red-700 hover:bg-red-500 hover:text-white duration-300 p-2 px-3 rounded flex items-center justify-center"
        >
          <i class="bx bx-trash"></i>
        </button>
      </div>
    </div>
    <div class="bg-white w-full p-5 shadow rounded mb-5">
      <div class="flex items-center gap-2 text-gray-600 mb-5">
        <i class="bx bx-list-check text-3xl"></i>
        <h3>Forms</h3>
      </div>
      <div class="flex items-center gap-5">
        <Popover title="Active">
          <router-link to="" class="text-sm bg-black/10 text-gray-700 p-2 px-3 rounded">
            Form name
          </router-link>
        </Popover>
        <Popover title="Unactive">
          <router-link to="" class="text-sm bg-black/10 text-gray-700 p-2 px-3 rounded">
            Form name
          </router-link>
        </Popover>
        <div
          class="text-teal-600 hover:text-white border border-teal-600 hover:bg-teal-600 cursor-pointer px-2 py-1 rounded"
        >
          Load more...
        </div>
      </div>
    </div>
    <div class="bg-white w-full p-5 shadow rounded mb-5">
      <div class="flex items-center gap-2 text-gray-600 mb-5">
        <i class="bx bx-receipt text-3xl"></i>
        <h3>Requests</h3>
      </div>
      <div class="flex items-center gap-5">
        <Popover title="Listed">
          <router-link to="" class="text-sm bg-black/10 text-gray-700 p-2 px-3 rounded">
            #001234
          </router-link>
        </Popover>
        <Popover title="Active">
          <router-link to="" class="text-sm bg-black/10 text-gray-700 p-2 px-3 rounded">
            #001234
          </router-link>
        </Popover>
        <Popover title="Issue">
          <router-link to="" class="text-sm bg-red-500 text-gray-700 p-2 px-3 rounded">
            #001234
          </router-link>
        </Popover>
        <Popover title="Deleted">
          <router-link to="" class="text-sm bg-red-500/30 text-gray-700 p-2 px-3 rounded">
            #001234
          </router-link>
        </Popover>
        <Popover title="Closed">
          <router-link to="" class="text-sm bg-black/10 text-gray-700 p-2 px-3 rounded">
            #001234
          </router-link>
        </Popover>
        <div
          class="text-teal-600 hover:text-white border border-teal-600 hover:bg-teal-600 cursor-pointer px-2 py-1 rounded"
        >
          Load more...
        </div>
      </div>
    </div>
    <div class="bg-white w-full p-5 shadow rounded mb-5">
      <div class="flex items-center gap-2 text-gray-600 mb-5">
        <i class="bx bx-receipt text-3xl"></i>
        <h3>Requests</h3>
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
