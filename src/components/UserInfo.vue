
<script setup>
import { ref, computed, onMounted } from 'vue';
import Button from '@/components/Button.vue';

const user = ref({
  password: '',
  passwordCheck: ''
});
const errorMessage = ref('');
const buttonDisabled = computed(() => {
  return !user.value.password || !user.value.passwordCheck;
});

const picker = ref('male');

</script>

<template>
  <div>
    上傳大頭照
  </div>
  <form action="">
    <div class="mt-4">
      <label for="nickname" class="block">暱稱</label>
      <input type="text" id="nickname" placeholder="暱稱" class="border-slate-900 border-2 mt-1 w-full py-3 px-5">
    </div>
    <div class="mt-4">
      <label for="gender" class="block">性別</label>
      <!-- <input type="radio" name="" id=""> 男性
      <input type="radio" name="" id=""> 女性 -->
      <div class="flex items-center">
        <div class="w-5 h-5 bg-white rounded-full flex justify-center items-center relative cursor-pointer">
          <input type="radio" id="male" value="male" class="checkbox appearance-none w-full h-full border-slate-900 border-2 rounded-full" v-model="picker" checked/>
          <div class="check-icon hidden bg-slate-900 rounded-full w-2.5 h-2.5 z-1 absolute"></div>
        </div>
        <label for="male" class="ml-1.5 text-slate-900 cursor-pointer">男性</label>
      </div>
      <div class="flex items-center">
        <div class="w-5 h-5 bg-white rounded-full flex justify-center items-center relative">
          <input type="radio" id="female" value="female" class="checkbox appearance-none w-full h-full border-slate-900 border-2 rounded-full" v-model="picker" />
          <div class="check-icon hidden bg-slate-900 rounded-full w-2.5 h-2.5 z-1 absolute"></div>
        </div>
        <label for="female" class="ml-1.5 text-slate-900 cursor-pointer">女性</label>
      </div>
    </div>
    <Button text="送出更新" buttonType="submit" :buttonDisabled="buttonDisabled" class="mt-4"/>  
  </form>
</template>

<style scoped>
  .checkbox:checked {
    /* border: none; */
  }
  .checkbox:checked + .check-icon {
    display: flex;
  }
</style>