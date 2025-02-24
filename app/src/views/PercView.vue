<template>
  <div>
    <h1 class="text-4xl font-semibold text-gray-900 mb-4">Percussion Instruments</h1>
    <h2 class="">These dont matter anyways, click the top left and go to brass instead!</h2>
  </div>
</template>

<script setup>
import { instruments } from '../instruments.js'
import InstrumentCard from '@/components/SpecificInst.vue'
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>
