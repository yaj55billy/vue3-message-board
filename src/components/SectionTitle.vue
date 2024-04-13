<script setup>
const props = defineProps({
  text: {
    type: String,
    require: true,
  }
});
</script>

<template>
  <div class="relative before:block before:absolute before:bottom-[-6px] before:left-[-6px] before:border-slate-900 before:border-2 before:bg-white before:w-full before:h-full before:z-0">
    <h2 class="text-center text-xl font-bold p-5 border-slate-900 border-2 bg-white relative z-1">{{ props.text }}</h2>
  </div>
</template>