<script setup>
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import OpenImage from '@/components/OpenImage.vue'
</script>

<template>
  <div class="bg-gray-100 w-full h-screen overflow-x-hidden">
    <Sidebar />
    <div class="lg:ml-[260px] ml-20">
      <Header />
      <div class="pt-[90px] p-5">
        <OpenImage />
        <RouterView></RouterView>
      </div>
      <div class="w-full relative">
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
