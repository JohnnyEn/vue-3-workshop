<template>
  <div>
    <h3>Store input</h3>

    <input v-model="store.inputState" type="text">
    <p>{{ store.inputState }}</p>
    <button
      @click="resetInput"
    >
      Reset
    </button>

    <h3>Local ref input</h3>

    <input v-model="localInputState" type="text">
    <p>{{ localInputState }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from './store.js';

const store = useStore();
const localInputState = ref('');

function resetInput() {
  store.resetInputState();
}
</script>
