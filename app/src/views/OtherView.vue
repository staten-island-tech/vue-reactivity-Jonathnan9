<template>
  <div>
    <h2 class="">Other Instruments</h2>
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
