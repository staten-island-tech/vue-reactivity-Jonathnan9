<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>

    <div class="flex-1 p-4" data-theme="emerald">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
