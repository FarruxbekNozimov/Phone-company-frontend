<script setup>
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="bg-gray-100 w-full h-screen overflow-x-hidden">
    <Sidebar />
    <div class="ml-[260px]">
      <Header />
      <div class="p-5 relative">
        <RouterView></RouterView>
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
