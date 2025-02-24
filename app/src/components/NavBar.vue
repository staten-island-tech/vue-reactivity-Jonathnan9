<template>
  <div class="navbar bg-base-200 fixed z-30">
    <SideBar />
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Instruments</a>
    </div>

    <div>
      <SearchBar />
      <ProductCart />
    </div>
  </div>
</template>

<script setup>
import ProductCart from './ProductCart.vue'
import SearchBar from './SearchBar.vue'
import SideBar from './SideBar.vue'
</script>

<style lang="scss" scoped></style>

<!-- thanks daisyui -->
