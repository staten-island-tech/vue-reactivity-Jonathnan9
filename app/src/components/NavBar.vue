<template>
  <div class="navbar bg-base-200">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">desrfdswt</a>
    </div>

    <div><ProductCart /></div>
  </div>
</template>

<script setup>
import ProductCart from './ProductCart.vue'
</script>

<style lang="scss" scoped></style>

<!-- thanks daisyui -->
