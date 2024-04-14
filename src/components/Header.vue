<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/useUserStore.js';
const userStore = useUserStore();

onMounted(() => {
  userStore.getUserData();
});
</script>

<template>
  <header class="bg-white border-b-3 border-slate-900 py-3">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <RouterLink class="font-paytone text-2xl font-normal" to="/">MetaWall</RouterLink>
        <nav class="menu">
          <div class="flex items-center space-x-1.5" v-if="userStore.userData">
            <img :src="userStore.userData.photo" :alt="userStore.userData.name" class="w-10 border-slate-900 border-2 rounded-full">
            <h3 class="font-azeret-mono text-lg font-medium border-b-2 border-slate-900">{{ userStore.userData.name }}</h3>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
