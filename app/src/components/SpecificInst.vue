<template>
  <div class="card flex flex-col items-center p-6 border rounded-lg shadow-md">
    <h1 class="text-2xl font-semibold mb-2">{{ instrument.name }}</h1>
    <img :src="instrument.image" :alt="instrument.name" class="w-48 h-48 object-contain mb-2" />
    <p class="text-lg text-gray-600 font-bold">${{ instrument.price.toLocaleString() }}</p>
    <!-- toLocaleString converts number into a string! -->
  </div>
</template>

<script setup>
defineProps({
  instrument: Object,
})
</script>

<style scoped>
.card {
  transition: transform 0.2s;
  background-color: white;
}

.card:hover {
  transform: scale(1.05);
}
</style>
