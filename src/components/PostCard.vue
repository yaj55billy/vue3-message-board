<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  post: Object,
  default: {}
});

const formatDate = (originalDateStr) => {


  const originalDate = new Date(originalDateStr);

  const year = originalDate.getFullYear(),
    month = originalDate.getMonth() + 1,
    day = originalDate.getDate(),
    hour = originalDate.getHours(),
    minute = originalDate.getMinutes();

  const formattedDateStr = year + '/' + month + '/' + day + ' ' + hour + ':' + (minute < 10 ? '0' : '') + minute;

  return formattedDateStr;
};
</script>

<template>
  <div class="bg-white border-slate-900 border-2 shadow-slate-900 shadow-[0_3px_0px] rounded-lg p-6">
    <div class="flex items-center">
      <div class="w-[45px]">
        <img class="w-full rounded-full border-slate-900 border-2" :src="props.post.user.photo" :alt="props.post.user.name">
      </div>
      <div class="pl-4">
        <h4 class="font-bold">{{ props.post.user.name }}</h4>
        <p class="text-xs text-gray-400">{{ formatDate(props.post.createdAt) }}</p>
      </div>
    </div>
    <p class="mt-4">
      {{ props.post.content }}
    </p>
    <div class="mt-4">
      <img
        class="w-full object-cover border-slate-900 border-2 rounded-lg"
        :src="props.post.image" v-if="props.post.image">
    </div>
  </div>
</template>