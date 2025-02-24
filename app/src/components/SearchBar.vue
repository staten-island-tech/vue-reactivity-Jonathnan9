<template>
  <div>
    <div class="relative max-w-xs" id="searchBar">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />
      <input
        id="searchInput"
        class="w-full py-2 pl-4 pr-10 border border-neutral-600 rounded-md text-base bg-transparent"
        type="text"
        placeholder="Search.."
        @keyup.enter="showAlert = true"
      />
      <i
        class="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 text-e"
      ></i>
    </div>

    <!-- Alert Box -->
    <div v-if="showAlert" role="alert" class="alert alert-error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>whatever youre searching for you cant afford, just give up</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showAlert = ref(false)
</script>

<style lang="scss" scoped></style>
