<script setup>
import ChatOne from '@/components/ChatOne.vue'
import Fields from '@/components/Fields.vue'
import Loading from '@/components/Loading.vue'
import Message from '../components/Message.vue'
import { chat_menus } from '../constants/chat_menus'
import { messages } from '../constants/messages'
import { ref } from 'vue'

const input = ref('')
const addMessage = () => {
  if (input.value.trim() != '') {
    messages.value.push({
      mine: true,
      msg: input.value.trim(),
      user_photo: '/users/avatar-1.jpg'
    })
  }
  input.value = ''
}
</script>

<template>
  <div class="flex gap-5 h-[80vh]">
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
    <div class="w-[45%] bg-white rounded-lg shadow relative">
      <div class="h-full overflow-y-scroll pb-14">
        <Message v-for="msg in messages" :msg="msg" />
      </div>

      <form
        @submit.prevent="addMessage"
        class="bg-white absolute bottom-0 w-full p-1 flex items-center"
      >
        <input
          type="text"
          class="h-10 outline-none rounded-l-lg px-2 w-full border border-teal-600"
          v-model="input"
        />
        <button
          class="h-10 p-2 px-4 bg-teal-600/30 hover:bg-teal-700 hover:text-white text-teal-700 flex items-center justify-center"
        >
          <i class="bx bx-image text-xl"></i>
        </button>
        <button
          class="h-10 p-2 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-r-lg flex items-center justify-center"
        >
          <i class="bx bx-paper-plane text-xl"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
