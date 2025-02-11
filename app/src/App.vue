<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import CreateScore from './components/ProductCart.vue'
</script>

<template>
  <div class="flex">
    <NavBar />
    <CreateScore />
    <RouterView />
  </div>
</template>

<style scoped></style>
