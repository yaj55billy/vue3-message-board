<script setup>
import { RouterView } from 'vue-router';

import { useLoaderStore } from '@/stores/useLoaderStore.js';
const loaderStore = useLoaderStore();
</script>

<template>
  <Loading :active="loaderStore.isLoading" />
  <RouterView />
</template>

<style lang="scss">
body {
  color: #000400;
}
</style>
