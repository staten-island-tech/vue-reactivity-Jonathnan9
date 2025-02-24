<template>
  <div>
    <h1 class="text-4xl font-semibold text-gray-900 mb-4">Brass Instruments</h1>

    <!-- loop for each category -->
    <div v-for="(category, categoryName) in instruments.brass" :key="categoryName">
      <h2 class="text-3xl font-semibold text-gray-800 mb-4 mt-9">
        {{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }}
      </h2>

      <!-- loop for each inst -->
      <div v-if="Array.isArray(category)">
        <div class="grid">
          <InstrumentCard
            v-for="(instrument, index) in category"
            :key="index"
            :instrument="instrument"
          />
        </div>
      </div>
      <div v-else>
        <!-- sub categories -->
        <div v-for="(subcategory, subcategoryName) in category" :key="subcategoryName">
          <h3 class="text-2xl font-medium text-gray-700 mb-2 mt-3">{{ subcategoryName }}</h3>
          <div class="grid">
            <InstrumentCard
              v-for="(instrument, index) in subcategory"
              :key="index"
              :instrument="instrument"
            />
          </div>
        </div>
      </div>
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
  gap: 20px;
}
</style>
