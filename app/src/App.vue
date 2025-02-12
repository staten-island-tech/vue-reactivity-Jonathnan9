<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="flex">
    <NavBar />
    <RouterView />
  </div>
  <RouterLink to="/">home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
</template>

<style scoped></style>
