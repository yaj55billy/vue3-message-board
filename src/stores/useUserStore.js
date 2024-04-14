import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import { useLoaderStore } from '@/stores/useLoaderStore.js';


export const useUserStore = defineStore('UserStore', () => {
  const loaderStore = useLoaderStore();
  const router = useRouter();

  const token = document.cookie.replace(/(?:(?:^|.*;\s*)metaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');

  // 驗證
  const checkSuccess = ref(false);
  const checkAdmin = () => {

    if (token) {
      checkSuccess.value = true;
    } else {
      alert('請登入唷～');
      router.push('/signin');
    }
  };

  const userData = ref({});
  const getUserData = () => {
    loaderStore.changeIsLoading(true);

    axios
      .get('http://127.0.0.1:3005/api/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        userData.value = res.data.data;
        loaderStore.changeIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        loaderStore.changeIsLoading(false);
      });
  }

  return { checkSuccess, checkAdmin, userData, getUserData };
});
