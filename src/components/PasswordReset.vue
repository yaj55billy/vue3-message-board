<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { apiUpdatePassword } from "@/utils/api";
import { SwalHandle } from "@/utils/sweetalert2";
import { useLoaderStore } from "@/stores/useLoaderStore";
import Button from "@/components/Button.vue";

const loaderStore = useLoaderStore();
const router = useRouter();

const user = ref({
	password: "",
	confirmPassword: "",
});
const errorMessage = ref("");
const buttonDisabled = computed(() => {
	return !user.value.password || !user.value.confirmPassword;
});

const updatePassword = () => {
	loaderStore.changeIsLoading(true);

	apiUpdatePassword(user.value)
		.then(() => {
			document.cookie = "metaToken=;";
			SwalHandle.showSuccessMsg("密碼重設成功，請重新登入！");
			router.push("/signin");
		})
		.catch((error) => {
			SwalHandle.showErrorMsg(error.response.data.message);
			errorMessage.value = error.response.data.message;
		})
		.finally(() => {
			loaderStore.changeIsLoading(false);
		});
};
</script>

<template>
	<form action="" @submit.prevent="updatePassword">
		<div>
			<label for="password" class="block">輸入新密碼</label>
			<input
				type="password"
				id="password"
				placeholder="輸入新密碼"
				class="border-slate-900 border-2 mt-1 w-full py-3 px-5"
				v-model="user.password"
			/>
		</div>
		<div class="mt-4">
			<label for="confirmPassword" class="block">再次輸入</label>
			<input
				type="password"
				id="confirmPassword"
				placeholder="再次輸入新密碼"
				class="border-slate-900 border-2 mt-1 w-full py-3 px-5"
				v-model="user.confirmPassword"
			/>
		</div>
		<div class="mt-6">
			<p class="text-sm text-red-400 text-center mt-4" v-if="errorMessage">
				{{ errorMessage }}
			</p>
		</div>
		<Button
			text="重設密碼"
			buttonType="submit"
			:buttonDisabled="buttonDisabled"
			class="mt-4"
		/>
	</form>
</template>
