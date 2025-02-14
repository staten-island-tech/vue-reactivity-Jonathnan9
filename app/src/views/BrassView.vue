<template>
  <div>
    <h2>Brass Instruments</h2>
    <h3>f tbn</h3>
    <div class="grid">
      <InstrumentCard
        v-for="(instrument, index) in instruments.brass.trombone.f_attachment"
        :key="index"
        :instrument="instrument"
      />
    </div>
    <h3>reg</h3>
    <div class="grid">
      <InstrumentCard
        v-for="(instrument, index) in instruments.brass.trombone.regular"
        :key="index"
        :instrument="instrument"
      />
    </div>
    <h3>bass</h3>
    <div class="grid">
      <InstrumentCard
        v-for="(instrument, index) in instruments.brass.trombone.bass"
        :key="index"
        :instrument="instrument"
      />
    </div>
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
