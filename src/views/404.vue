<script setup></script>

<template>
  <div class="bg-gray-100 w-full h-screen flex items-center justify-center">
    <div class="bg-white w-[550px] p-14 rounded-lg shadow text-gray-700 text-center">
      <h3 class="text-4xl text-center mb-5">404</h3>
      <h4 class="text-2xl text-center">Ooops... Something went wrong...</h4>
      <router-link
        class="text-center mt-5 flex gap-2 text-teal-500 items-center justify-center text-sm"
        to="/"
      >
        <i class="bx bx-left-arrow-alt"></i>
        <span> Back to main page</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
