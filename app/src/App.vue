<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="flex">
    <NavBar />
  </div>
  <RouterView />
</template>

<style scoped></style>
