<script setup></script>

<template>
  <div class="my-5 flex items-center justify-between">
    <span> Showing <strong>1</strong> to <strong>5</strong> of <strong>10</strong> results</span>
    <nav>
      <div class="inline-flex -space-x-px text-base h-10">
        <div
          class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
        >
          Previous
        </div>
        <div
          class="flex items-center justify-center px-4 h-10 leading-tight bg-teal-600 text-white border border-gray-300 cursor-pointer"
        >
          1
        </div>
        <div
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
        >
          2
        </div>
        <div
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 cursor-pointer"
        >
          Next
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
