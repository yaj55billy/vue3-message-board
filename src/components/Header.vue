<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/useUserStore.js";
const userStore = useUserStore();

const isMenuOpen = ref(false);

const mouseToggle = () => {
	isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
	<header class="bg-white border-b-3 border-slate-900">
		<div class="container mx-auto">
			<div class="flex items-center justify-between">
				<RouterLink class="font-paytone text-2xl font-normal" to="/"
					>MetaWall</RouterLink
				>
				<nav
					class="relative py-3"
					@mouseover="mouseToggle()"
					@mouseout="mouseToggle()"
					v-if="userStore.loginStatus === true"
				>
					<div
						class="flex items-center space-x-1.5 relative z-10"
						v-if="userStore.userData"
					>
						<template v-if="userStore.userData.photo">
							<img
								:src="userStore.userData.photo"
								:alt="userStore.userData.name"
								class="w-10 border-slate-900 border-2 rounded-full"
							/>
						</template>
						<template v-else>
							<span
								class="w-10 h-10 border-slate-900 border-2 rounded-full flex justify-center items-center"
							>
								<i class="pi pi-user text-xl"></i>
							</span>
						</template>

						<h3
							class="font-azeret-mono text-lg font-medium border-b-2 border-slate-900"
						>
							{{ userStore.userData.name }}
						</h3>
					</div>
					<Transition name="fade">
						<ul
							class="border-slate-900 border-2 bg-white w-[180px] text-center absolute z-0 left-0 mt-1"
							v-show="isMenuOpen"
						>
							<li>
								<RouterLink
									to="/"
									class="w-full block p-2.5 border-slate-900 border-b-2 hover:bg-gray-100"
									>我的貼文牆</RouterLink
								>
							</li>
							<li>
								<RouterLink
									to="/updateprofile"
									class="w-full block p-2.5 border-slate-900 border-b-2 hover:bg-gray-100"
									>修改個人資料</RouterLink
								>
							</li>
							<li>
								<button
									type="button"
									class="w-full block p-2.5 border-slate-900 border-b-2 hover:bg-gray-100"
								>
									登出
								</button>
							</li>
						</ul>
					</Transition>
				</nav>
				<div class="py-3 flex items-center" v-else>
					<div
						class="flex items-center space-x-1.5 relative z-10"
						v-if="userStore.userData"
					>
						<span
							class="w-10 h-10 border-slate-900 border-2 rounded-full flex justify-center items-center"
						>
							<i class="pi pi-user text-xl"></i>
						</span>
						<h3
							class="font-azeret-mono text-lg font-medium border-b-2 border-slate-900"
						>
							訪客
						</h3>
					</div>
					<RouterLink to="/signin" class="ml-6 text-blue-500 font-bold"
						>登入</RouterLink
					>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
