<script setup>
import Button from '@/components/Button.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="bg-white border-slate-900 border-2 px-6 py-8">
    <RouterLink to="/createpost" class="block w-full p-4 bg-blue-500 text-white font-bold text-center border-slate-900 border-2 border-l-4 border-b-4 rounded-lg hover:bg-yellow-400 hover:text-slate-900 transition-colors">張貼動態</RouterLink>
    <div class="">
      <RouterLink to="/" class="flex items-center mt-6 group transition">
        <div class="w-[50px] h-[50px] border-slate-900 border-1 rounded-full">
          <img src="@/assets/img/user.png" alt="" class="w-[50px]">
        </div>
        <h4 class="pl-4 font-bold group-hover:text-blue-500 transition-color">邊緣杰哥</h4>
      </RouterLink>
      <RouterLink to="/" class="flex items-center mt-6 group">
        <div class="w-[50px] h-[50px] border-slate-900 border-2 rounded-full bg-blue-200 flex justify-center items-center group-hover:bg-blue-500 transition-color">
          <span class="pi pi-bell text-xl group-hover:text-white"></span>
        </div>
        <h4 class="pl-4 font-bold group-hover:text-blue-500 transition-color">追蹤名單</h4>
      </RouterLink>
      <RouterLink to="/" class="flex items-center mt-6 group">
        <div class="w-[50px] h-[50px] border-slate-900 border-2 rounded-full bg-blue-200 flex justify-center items-center group-hover:bg-blue-500 transition-color">
          <span class="pi pi-thumbs-up text-xl group-hover:text-white"></span>
        </div>
        <h4 class="pl-4 font-bold group-hover:text-blue-500 transition-color">我按讚的文章</h4>
      </RouterLink>
    </div>
  </div>
</template>