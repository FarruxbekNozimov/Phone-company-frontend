<script setup>
import Popover from '@/components/Popover.vue'
import DeleteButton from '@/components/Buttons/DeleteButton.vue'
import ToggleButton from '@/components/Buttons/ToggleButton.vue'
import ChatButton from '@/components/Buttons/ChatButton.vue'
import ViewButton from '@/components/Buttons/ViewButton.vue'
import Pagination from '@/components/Pagination.vue'
import Dropdown from '@/components/Dropdown.vue'
import StatusButton from '../components/Buttons/StatusButton.vue'
import DeleteModal from '../components/DeleteModal.vue'

const fitler = ['All', 'Username 1', 'Username 2', 'Username 3', 'Username 4', 'Username 5']
const status = ['All', 'Active', 'Listed', 'Closed', 'Issue', 'Deleted']

const checkAll = (check) => {
  console.log(check)
  const checkboxes = document.getElementsByClassName('checkboxes')
  for (let i in checkboxes) {
    checkboxes[i].checked = true
  }
}
</script>

<template>
  <DeleteModal />
  <div class="">
    <div class="flex items-center justify-between mb-5 gap-5">
      <button class="flex items-center gap-2 bg-teal-700 rounded px-5 p-2 text-white">
        <i class="bx bx-plus"></i>
        <span class="text-sm whitespace-nowrap">Add Request</span>
      </button>
      <div class="flex items-center gap-5">
        <div class="lg:flex items-center hidden relative w-72 h-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="bx bx-search text-gray-500 text-xl"></i>
          </div>
          <input
            type="text"
            autocomplete="off"
            class="outline-none block w-full h-full p-2.5 pl-10 text-sm text-gray-900 rounded bg-white border border-gray-300 ring-0 focus:ring-0 focus:border-gray-400"
            placeholder="Search for result"
            required
          />
        </div>
        <div class="flex items-center gap-5">
          <Dropdown icon="bx bx-user-circle" text="Filter by user" :data="fitler"> </Dropdown>
          <Dropdown icon="bx bx-check-circle" text="Filter by status" :data="status"> </Dropdown>
        </div>
      </div>
    </div>
    <div class="lg:hidden flex relative w-full h-full mb-5">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3">
        <i class="bx bx-search text-gray-500 text-xl"></i>
      </div>
      <input
        type="text"
        autocomplete="off"
        class="outline-none block w-full h-full p-2.5 pl-10 text-sm text-gray-900 rounded bg-white border border-gray-300 ring-0 focus:ring-0 focus:border-gray-400"
        placeholder="Search for result"
        required
      />
    </div>
    <div class="flex items-center gap-5 text-teal-500 px-1 mb-5">
      <router-link to="" class="flex items-center gap-2">
        <i class="bx bx-receipt"></i>
        <span>Export in xml</span>
      </router-link>
      <router-link to="" class="flex items-center gap-2">
        <i class="bx bx-paper-plane"></i>
        <span>Export in telegram</span>
      </router-link>
    </div>
    <div class="mb-5 overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-md text-gray-500 uppercase bg-white">
          <tr>
            <Popover title="Check All">
              <th scope="col" class="p-4">
                <input
                  @change="(e) => checkAll(e)"
                  type="checkbox"
                  class="cursor-pointer w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 rounded"
                />
              </th>
            </Popover>
            <th class="px-5 py-3 font-bold whitespace-nowrap">ID</th>
            <th class="px-5 py-3 font-bold whitespace-nowrap">USER</th>
            <th class="px-5 py-3 font-bold whitespace-nowrap">DATE</th>
            <th class="px-5 py-3 font-bold whitespace-nowrap">FORM</th>
            <th class="px-5 py-3 font-bold whitespace-nowrap">STATUS</th>
            <th class="px-5 py-3 font-bold whitespace-nowrap">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="el in 10" class="bg-white font-medium text-gray-900 border-b hover:bg-gray-50">
            <td class="w-4 p-4">
              <input
                type="checkbox"
                class="cursor-pointer w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 rounded checkboxes"
              />
            </td>
            <td class="px-5 py-4 whitespace-nowrap gap-2">
              <span class="text-teal-600">#001235</span>
            </td>
            <td class="px-5 py-4 whitespace-nowrap">
              <router-link to="form" class="block text-md">User name</router-link>
            </td>
            <td class="px-5 py-4 whitespace-nowrap">12.07.24</td>
            <td class="px-5 py-4 whitespace-nowrap gap-2">
              <router-link to="form" class="block text-md">Form name</router-link>
            </td>
            <td class="px-5 py-4 whitespace-nowrap gap-2">
              <StatusButton text="Listed" bg="bg-blue-500/20" color="text-blue-500" />
            </td>

            <td class="flex gap-2 px-5 py-4 w-full whitespace-nowrap">
              <router-link to="/request">
                <ViewButton />
              </router-link>
              <router-link to="/request">
                <ChatButton />
              </router-link>
              <router-link to="/request-add">
                <ToggleButton />
              </router-link>
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
