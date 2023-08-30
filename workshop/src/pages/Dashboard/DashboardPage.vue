<template>
  <div>
    <test-input />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import TestInput from '@/components/TestInput/TestInput.vue';

onMounted(() => {
  console.log('Created by OnMounted hook');
});
</script>
