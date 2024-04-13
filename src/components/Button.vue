<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  buttonType: {
    type: String,
    required: true
  },
  buttonDisabled: {
    type: Boolean,
    required: true
  }
});

// disabled 狀態需判斷
</script>

<template>
  <button :type="buttonType" class="w-full p-4 bg-blue-500 text-white font-bold text-center border-slate-900 border-2 border-l-4 border-b-4 rounded-lg hover:bg-yellow-400 hover:text-slate-900 transition-colors disabled:border-[#808080] disabled:bg-[#A8B0B9] disabled:text-white disabled:border-2" :disabled="props.buttonDisabled">{{ props.text }}</button>
</template>