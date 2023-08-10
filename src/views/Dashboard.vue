<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="bg-gray-100 w-full h-screen overflow-x-hidden">
    <Sidebar />
    <div class="ml-72">
      <Header />
      <div class="p-5">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
