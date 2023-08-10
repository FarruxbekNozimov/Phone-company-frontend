<script setup>
import Modal from '@/components/Modal.vue'
import { ref, reactive } from 'vue'

const access = ref(false)
const changeAccess = () => (access.value = !access.value)
const accessData = reactive({
  title: 'How to get access data?',
  text: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.'
})
const forgotData = reactive({
  title: 'Forgot data?',
  text: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.'
})

const forgot = ref(false)
const changeForgot = () => (forgot.value = !forgot.value)
</script>

<template>
  <div class="">
    <Modal
      :modalFunc="changeAccess"
      :modal="access"
      :title="accessData.title"
      :text="accessData.text"
    />
    <Modal
      :modalFunc="changeForgot"
      :modal="forgot"
      :title="forgotData.title"
      :text="forgotData.text"
    />

    <div class="bg-[#eee] w-full h-screen overflow-y-auto pt-10 pb-5">
      <form @submit.prevent="" class="p-10 pb-5 w-[500px] bg-white shadow-lg rounded-md mx-auto">
        <h3 class="text-center text-slate-700 text-4xl mb-5">Log in</h3>
        <div
          class="bg-yellow-200/50 text-yellow-800/70 text-center text-sm p-2 shadow roudned mb-5"
        >
          Please, enter verified data!
        </div>
        <div class="w-full mb-3">
          <label for="name" class="text-sm block mb-2">Client ID</label>
          <input
            type="text"
            placeholder="Enter Client ID"
            class="p-2 px-3 w-full outline-none text-sm border border-gray-300 rounded"
          />
        </div>
        <div class="w-full mb-3">
          <label for="name" class="text-sm block mb-2">Access KEY</label>
          <input
            type="text"
            placeholder="Enter Access KEY"
            class="p-2 px-3 w-full outline-none text-sm border border-gray-300 rounded"
          />
        </div>
        <div class="w-full mb-3">
          <label for="name" class="text-sm block mb-2">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            class="p-2 px-3 w-full outline-none text-sm border border-gray-300 rounded"
          />
        </div>
        <div class="w-full mb-3">
          <label for="name" class="text-sm block mb-2">Password</label>
          <input
            type="text"
            placeholder="Enter Password"
            class="p-2 px-3 w-full outline-none text-sm border border-gray-300 rounded"
          />
        </div>
        <button class="w-full bg-teal-700 hover:bg-teal-800 text-white p-2 text-sm rounded">
          Log in
        </button>
        <h4
          @click="changeAccess"
          class="cursor-pointer pt-3 text-center text-sm text-teal-700 underline"
        >
          How to get access data?
        </h4>
        <h4
          @click="changeForgot"
          class="cursor-pointer pt-3 text-center text-sm text-teal-700 underline"
        >
          Forgot data?
        </h4>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
