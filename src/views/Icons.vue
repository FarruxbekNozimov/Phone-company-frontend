<script setup>
try {
  const icons = await fetch(
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css'
  )
  console.log(icons.text())
} catch (error) {
  console.log(error)
}
</script>

<template>
  <div class="bg-white p-5 shadow rounded">
    {{ icons }}
    {{ icons.text() }}
    <h3 class="text-gray-800 mb-3">Icons</h3>
    <h3 class="text-gray-600 font-[400]">ACCESSIBILITY</h3>
  </div>
</template>

<style scoped></style>
