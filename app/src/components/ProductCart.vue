<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="(instrument, index) in instrumentData.brass.trombone.regular"
      :key="index"
      class="card border border-gray-300 rounded-lg p-4 hover:scale-105 transition-transform"
    >
      <div class="flex flex-col items-center">
        <img :src="instrument.image" alt="Instrument" class="w-full h-auto object-contain mb-4" />
        <h3 class="text-lg font-semibold text-gray-900">{{ instrument.name }}</h3>
        <p class="text-sm text-gray-500">${{ instrument.price.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { instruments } from '@/instruments.js'

const instrumentData = ref(instruments)
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}
</style>
