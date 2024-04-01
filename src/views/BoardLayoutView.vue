<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
  <Header />
  <main class="main bg p-12">
    <div class="container mx-auto">
      <div class="flex ">
        <div class="content bg-slate-400 h-36 w-3/5 mr-7">
          <RouterView />
        </div>
        <div class=" bg-red-300 h-36 flex-1">
          <Sidebar />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.bg {
  background-image: url('@/assets/img/bg.png');
  background-repeat: repeat;
  background-size: 60px 60px;
  min-height: calc(100vh - 67px);
}
</style>