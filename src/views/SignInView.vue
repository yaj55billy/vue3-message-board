<script setup>
import axios from 'axios';
import { ref, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import AuthPanel from '@/components/AuthPanel.vue';
import Button from '@/components/Button.vue';

import { useLoaderStore } from '@/stores/useLoaderStore.js';
const loaderStore = useLoaderStore();
const router = useRouter();

const user = ref({
  email: '',
  password: ''
});
const errorMessage = ref('');
const buttonDisabled = computed(() => {
  return !user.value.email || !user.value.password;
});

const signIn = () => {
  // https://node-api-cqno.onrender.com/api/users/sign_in
  loaderStore.changeIsLoading(true);
  axios.post('http://127.0.0.1:3005/api/users/sign_in' ,user.value)
    .then((res) => {
      const { token } = res.data.user;
      document.cookie = `metaToken=${token};`;
      router.push('/');
      loaderStore.changeIsLoading(false);
    })
    .catch((error) => {
      errorMessage.value = error.response.data.message;
      loaderStore.changeIsLoading(false);
    });
};

</script>

<template>
  <AuthPanel subtitle="到元宇宙展開全新社交圈">
    <form action="" @submit.prevent="signIn">
      <div class="mt-4">
        <input type="email" id="email" name="email" placeholder="Email" class="w-full border-slate-900 border-2 px-4 py-3" required v-model="user.email">
      </div>
      <div class="mt-4">
        <input type="password" id="password" name="password"  placeholder="Password" class="w-full border-slate-900 border-2 px-4 py-3" required v-model="user.password">
      </div>

      <div class="mt-8">
        <p class="text-sm text-red-400 text-center mt-4" v-if="errorMessage">帳號或密碼錯誤，請重新輸入！</p>  
      </div>
      
      <Button text="登入" buttonType="submit" :buttonDisabled="buttonDisabled" class="mt-4" />
      <div class="text-center">
        <RouterLink to="/signup" class="mt-4 inline-block">註冊帳號</RouterLink>
      </div>
    </form>
  </AuthPanel>
</template>