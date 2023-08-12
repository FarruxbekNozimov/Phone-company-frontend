<script setup>
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="bg-gray-100 w-full h-screen overflow-x-hidden">
    <Sidebar />
    <div class="lg:ml-[260px] md:ml-20">
      <Header />
      <div class="pt-[90px] p-5">
        <RouterView></RouterView>
      </div>
      <div class="w-full relative">
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
