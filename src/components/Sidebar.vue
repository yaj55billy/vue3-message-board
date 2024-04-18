<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/useUserStore.js";
import { RouterLink } from "vue-router";
const userStore = useUserStore();
</script>

<template>
	<div class="bg-white border-slate-900 border-2 px-6 py-8">
		<RouterLink
			to="/createpost"
			class="block w-full p-4 bg-blue-500 text-white font-bold text-center border-slate-900 border-2 border-l-4 border-b-4 rounded-lg hover:bg-yellow-400 hover:text-slate-900 transition-colors"
			>張貼動態</RouterLink
		>
		<div>
			<template v-if="userStore.loginStatus === true">
				<RouterLink
					to="/"
					class="flex items-center mt-6 group transition"
					v-if="userStore.userData"
				>
					<template v-if="userStore.userData.photo">
						<img
							:src="userStore.userData.photo"
							:alt="userStore.userData.name"
							class="w-[50px] h-[50px] border-slate-900 border-2 rounded-full"
						/>
					</template>
					<template v-else>
						<div
							class="w-[50px] h-[50px] border-slate-900 border-2 rounded-full flex justify-center items-center"
						>
							<i class="pi pi-user text-2xl"></i>
						</div>
					</template>
					<h4 class="pl-4 font-bold group-hover:text-blue-500 transition-color">
						{{ userStore.userData.name }}
					</h4>
				</RouterLink>
			</template>
			<template v-else>
				<div class="flex items-center mt-6">
					<div
						class="w-[50px] h-[50px] border-slate-900 border-2 rounded-full flex justify-center items-center"
					>
						<i class="pi pi-user text-2xl"></i>
					</div>
					<h4 class="pl-4 font-bold">訪客</h4>
				</div>
			</template>

			<RouterLink to="/" class="flex items-center mt-6 group">
				<div
					class="w-[50px] h-[50px] border-slate-900 border-2 rounded-full bg-blue-200 flex justify-center items-center group-hover:bg-blue-500 transition-color"
				>
					<span class="pi pi-bell text-xl group-hover:text-white"></span>
				</div>
				<h4 class="pl-4 font-bold group-hover:text-blue-500 transition-color">
					追蹤名單
				</h4>
			</RouterLink>
			<RouterLink to="/" class="flex items-center mt-6 group">
				<div
					class="w-[50px] h-[50px] border-slate-900 border-2 rounded-full bg-blue-200 flex justify-center items-center group-hover:bg-blue-500 transition-color"
				>
					<span class="pi pi-thumbs-up text-xl group-hover:text-white"></span>
				</div>
				<h4 class="pl-4 font-bold group-hover:text-blue-500 transition-color">
					我按讚的文章
				</h4>
			</RouterLink>
		</div>
	</div>
</template>
