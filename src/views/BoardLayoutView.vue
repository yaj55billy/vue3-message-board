<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

const router = useRouter();
const checkSuccess = ref(false);

const checkAdmin = () => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)metaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  axios.defaults.headers.common['Authorization'] = token;

  if (token) {
    checkSuccess.value = true;
  } else {
    alert('請登入唷～');
    router.push('/signin');
  }
};

onMounted(() => {
  checkAdmin();
});

</script>

<template>
  <template v-if="checkSuccess">
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
</template>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh - 67px);
}
</style>