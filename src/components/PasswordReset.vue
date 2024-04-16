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
</script>

<template>
  <form action="" @submit.prevent="">
    <div>
      <label for="password" class="block">輸入新密碼</label>
      <input type="password" id="password" placeholder="輸入新密碼" class="border-slate-900 border-2 mt-1 w-full py-3 px-5" v-model="user.password">
    </div>
    <div class="mt-4">
      <label for="passwordCheck" class="block">再次輸入</label>
      <input type="password" id="passwordCheck" placeholder="再次輸入新密碼" class="border-slate-900 border-2 mt-1 w-full py-3 px-5" v-model="user.passwordCheck">
    </div>
    <div class="mt-6">
      <p class="text-sm text-red-400 text-center mt-4" v-if="errorMessage">{{ errorMessage }}</p>  
    </div>
    <Button text="重設密碼" buttonType="submit" :buttonDisabled="buttonDisabled" class="mt-4"/>
  </form>
</template>