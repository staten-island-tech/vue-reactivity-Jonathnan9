<script setup>
import { ref } from "vue";
import axios from "axios";

const API_KEY = "YOUR_API_KEY"; // Replace with your Flat.io API Key
const API_URL = "https://api.flat.io/v2/scores";

const scoreTitle = ref("My First Flat.io Score");
const scoreResponse = ref(null);
const isLoading = ref(false);
const errorMessage = ref("");

const handleCreateScore = async () => {
  try {
    isLoading.value = true;
    errorMessage.value = "";

    const response = await axios.post(
      API_URL,
      {
        title: scoreTitle.value,
        privacy: "public", // "private" or "public"
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    scoreResponse.value = response.data;
  } catch (error) {
    errorMessage.value = "Failed to create score.";
    console.error("Error creating score:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div>
    <h2>Create a Flat.io Score</h2>
    <input v-model="scoreTitle" placeholder="Enter score title" />
    <button @click="handleCreateScore" :disabled="isLoading">
      {{ isLoading ? "Creating..." : "Create Score" }}
    </button>

    <div v-if="scoreResponse">
      <h3>Score Created:</h3>
      <p><strong>Title:</strong> {{ scoreResponse.title }}</p>
      <p><strong>Score ID:</strong> {{ scoreResponse.id }}</p>
      <a :href="`https://flat.io/score/${scoreResponse.id}`" target="_blank">View Score</a>
    </div>

    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
input {
  padding: 8px;
  margin-right: 8px;
}
button {
  padding: 8px;
}
</style>
 // help
