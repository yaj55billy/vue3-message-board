<script setup>
const props = defineProps({
  subtitle: {
    type: String,
    required: true,
  }
}); 

</script>

<template>
  <div class="bg min-h-screen">
    <div class="container mx-auto pt-36">
      <section class="flex items-center px-12 py-20 space-x-12 border-slate-900 border-2 bg-gray-100 shadow-[-8px_8px_0px_rgba(0,0,0,0.15)]">
        <div class="w-[48%]">
          <img src="@/assets/img/authpanel.png" alt="">
        </div>
        <div class="w-[52%]">
          <h1 class="font-paytone text-6xl text-blue-500 text-center">MetaWall</h1>
          <h3 class="font-semibold text-2xl text-center mt-4">{{ props.subtitle }}</h3>
          <div class="mt-5">
            <slot></slot>
          </div>
        </div>
      </section>
    </div>
  </div>
  
</template>