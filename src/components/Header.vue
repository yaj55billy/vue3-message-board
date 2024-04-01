<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="bg-white border-b-3 border-slate-900 py-3">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <RouterLink class="font-paytone text-2xl font-normal" to="/">MetaWall</RouterLink>
        <nav class="menu">
          <div class="flex items-center space-x-1.5">
            <img src="@/assets/img/user.png" alt="" class="w-10">
            <h3 class="font-azeret-mono text-lg font-medium border-b-2 border-slate-900">Member</h3>
          </div>
          <!-- <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul> -->
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
