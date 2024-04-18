<script setup>
import { ref, computed } from "vue";
import { RouterLink, useRouter } from "vue-router";
import AuthPanel from "@/components/AuthPanel.vue";
import Button from "@/components/Button.vue";
import { apiSignUp } from "@/utils/api.js";
import { useLoaderStore } from "@/stores/useLoaderStore.js";
const loaderStore = useLoaderStore();
const router = useRouter();

const user = ref({
	name: "",
	email: "",
	password: "",
});

const errorMessage = ref("");

const buttonDisabled = computed(() => {
	return !user.value.name || !user.value.email || !user.value.password;
});

const signUp = () => {
	loaderStore.changeIsLoading(true);
	apiSignUp(user.value)
		.then((res) => {
			const { token } = res.data.user;
			document.cookie = `metaToken=${token};`;
			router.push("/");
		})
		.catch((error) => {
			errorMessage.value = error.response.data.message;
		})
		.finally(() => {
			loaderStore.changeIsLoading(false);
		});
};
</script>

<template>
	<AuthPanel subtitle="註冊">
		<form action="" @submit.prevent="signUp">
			<div class="mt-4">
				<input
					type="text"
					id="name"
					name="name"
					placeholder="暱稱"
					class="w-full border-slate-900 border-2 px-4 py-3"
					required
					v-model="user.name"
				/>
			</div>
			<div class="mt-4">
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					class="w-full border-slate-900 border-2 px-4 py-3"
					required
					v-model="user.email"
				/>
			</div>
			<div class="mt-4">
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					class="w-full border-slate-900 border-2 px-4 py-3"
					required
					v-model="user.password"
				/>
			</div>

			<div class="mt-8">
				<p class="text-sm text-red-400 text-center mt-4" v-if="errorMessage">
					{{ errorMessage }}
				</p>
			</div>

			<Button
				text="註冊"
				buttonType="submit"
				:buttonDisabled="buttonDisabled"
				class="mt-4"
			/>
			<div class="text-center">
				<RouterLink to="/signin" class="mt-4 inline-block">登入</RouterLink>
			</div>
		</form>
	</AuthPanel>
</template>
