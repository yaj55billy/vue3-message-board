<script setup>
import axios from 'axios';
import { ref, computed } from 'vue';
import SectionTitle from "@/components/SectionTitle.vue";
import Button from "@/components/Button.vue";

const content = ref('');

const createPost = () => {

}

const buttonDisabled = computed(() => !content.value);


</script>

<template>
  <SectionTitle text="張貼動態"/>
  <section class="mt-6 border-slate-900 border-2 border-b-4 bg-white rounded-lg p-8">
    <form action="" @submit.prevent="createPost">
      <label for="content" class="block ">貼文內容</label>
      <textarea name="content" id="content" class="mt-2 border-slate-900 border-2 w-full h-[160px] px-4 py-3" required v-model="content"></textarea>

      <label for="">圖片欄位</label>
      <input type="text" id="pic" name="pic" placeholder="圖片" class="w-full border-slate-900 border-2 px-4 py-3 mt-2" required v-model="pic" />

      <div class="mt-8">
        <p class="text-sm text-red-400 text-center" v-if="true">帳號或密碼錯誤，請重新輸入！</p>  
      </div>

      <div class="w-3/5 mx-auto mt-4">
        <Button text="送出貼文" buttonType="submit" :buttonDisabled="buttonDisabled" />
      </div>
      
    </form>
  </section>
</template>
