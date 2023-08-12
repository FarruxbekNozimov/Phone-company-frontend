<script setup>
import ChatOne from '@/components/ChatOne.vue'
import Fields from '@/components/Fields.vue'
import Loading from '@/components/Loading.vue'
import { chat_menus } from "../constants/chat_menus";
</script>

<template>
  <div class="flex gap-5 h-screen">
    <div class="w-[25%] sticky">
      <select
        class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 outline-none"
      >
        <option selected>Choose a company</option>
        <option value="company 1">Company 1</option>
        <option value="company 2">Company 2</option>
        <option value="company 3">Company 3</option>
      </select>
      <div class="relative flex">
        <input
          type="text"
          autocomplete="off"
          class="border border-gray-300 outline-none block w-full p-2.5 pr-10 text-sm text-gray-900 rounded-l bg-white"
          placeholder="Search in user"
          required
        />
        <div
          class="inset-y-0 right-0 cursor-pointer hover:bg-gray-800 bg-gray-300 p-1 px-3 rounded-r flex items-center justify-center pl-3"
        >
          <i class="bx bx-search text-gray-500 text-xl"></i>
        </div>
      </div>
      <div role="status" class="text-center flex items-center justify-center py-3">
        <Loading />
      </div>
      <div class="">
        <ChatOne img="/users/avatar-2.jpg" title="John Doe" text="Online" isactive="1" />
        <ChatOne img="/users/avatar-2.jpg" title="John Doe" text="Offline" />
        <ChatOne img="/logo.svg" title="John Doe" text="Deleted" />
      </div>
    </div>
    <div class="w-[35%]">
      <div class="flex items-center mb-5">
        <div
          v-for="el in chat_menus"
          class="text-sm p-1 px-2 rounded cursor-pointer"
          :class="`${el.bg} ${el.color} ${el.this == 1 ? `${el.active} text-white` : 0}`"
          @click="
            () => {
              chat_menus.map((el) => (el.this = 0))
              el.this = 1
            }
          "
        >
          {{ el.name }}
        </div>
      </div>
      <Fields
        v-for="el in chat_menus"
        :isactive="el.this"
        :text="el.name"
        :fields="el.fields"
        :design="`${el.bg} ${el.color} hover:${el.active} hover:text-white`"
        :data="chat_menus.map((i) => i.name)"
      />
    </div>
    <div class="w-[45%] bg-white h-[80vh] rounded-lg shadow overflow-y-auto">
      <Message />
    </div>
  </div>
</template>

<style scoped></style>
