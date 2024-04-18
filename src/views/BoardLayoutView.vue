<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import { useUserStore } from '@/stores/useUserStore.js';

const userStore = useUserStore();

onMounted(() => {
  userStore.checkToken();
});

</script>

<template>
  <Header />
  <main class="main bg p-12">
    <div class="container mx-auto">
      <div class="flex ">
        <div class="w-3/5 mr-7">
          <RouterView />
        </div>
        <div class="flex-1">
          <Sidebar />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh - 67px);
}
</style>