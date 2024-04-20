<script setup>
import { ref, computed, watch, onMounted } from "vue";
import Button from "@/components/Button.vue";
import { apiUploadImage, apiProfileUpdate } from "@/utils/api";
import { SwalHandle } from "@/utils/sweetalert2";
import { useLoaderStore } from "@/stores/useLoaderStore";
import { useUserStore } from "@/stores/useUserStore";
const loaderStore = useLoaderStore();
const userStore = useUserStore();

const props = defineProps({
	userData: {
		type: Object,
		require: true,
	},
});

const user = ref({
	name: "",
	gender: "",
	photo: "",
});

const errorMessage = ref("");
const buttonDisabled = computed(() => {
	return !user.value.name;
});

watch(
	() => props.userData,
	(newIdx, oldIdx) => {
		user.value.name = newIdx.name;
		user.value.gender = newIdx.gender;
		user.value.photo = newIdx.photo;
	}
);

const handleImageUpload = (event) => {
	loaderStore.changeIsLoading(true);

	const file = event.target.files[0];
	const formData = new FormData();
	formData.append("file", file);

	apiUploadImage(formData)
		.then((res) => {
			user.value.photo = res.data.fileUrl;
			SwalHandle.showSuccessMsg("大頭照上傳成功～");
		})
		.catch((error) => {
			SwalHandle.showErrorMsg(error.response.data.message);
			errorMessage.value = error.response.data.message;
		})
		.finally(() => {
			loaderStore.changeIsLoading(false);
		});
};

const handleProfileUpdate = () => {
	loaderStore.changeIsLoading(true);

	apiProfileUpdate(user.value)
		.then(() => {
			userStore.getUserData();
			SwalHandle.showSuccessMsg("個人資料編輯成功～");
		})
		.catch((error) => {
			errorMessage.value = error.response.data.message;
		})
		.finally(() => {
			loaderStore.changeIsLoading(false);
		});
};

onMounted(() => {
	userStore.getUserData(); // 切換元件的觸發
});
</script>

<template>
	<div class="text-center">
		<div
			class="w-[105px] h-[105px] mx-auto border-slate-900 border-2 bg-blue-200 rounded-full flex justify-center items-center overflow-hidden"
		>
			<template v-if="user.photo">
				<img :src="user.photo" :alt="user.name" />
			</template>
			<template v-else>
				<i class="pi pi-user text-5xl"></i>
			</template>
		</div>
		<label
			for="dropzone-file"
			class="bg-slate-900 text-white py-2 px-6 mt-4 inline-block cursor-pointer hover:opacity-85"
		>
			上傳大頭照
			<input
				id="dropzone-file"
				type="file"
				class="hidden"
				@change="handleImageUpload"
			/>
		</label>
	</div>
	<form action="">
		<div class="mt-4">
			<label for="nickname" class="block">暱稱</label>
			<input
				type="text"
				id="nickname"
				placeholder="暱稱"
				class="border-slate-900 border-2 mt-1 w-full py-3 px-5"
				v-model="user.name"
			/>
		</div>
		<div class="mt-4">
			<label class="block">性別</label>
			<div class="flex items-center space-x-6 mt-1">
				<div class="flex items-center">
					<div
						class="w-5 h-5 bg-white rounded-full flex justify-center items-center relative cursor-pointer"
					>
						<input
							type="radio"
							id="male"
							value="male"
							class="checkbox appearance-none w-full h-full border-slate-900 border-2 rounded-full"
							v-model="user.gender"
						/>
						<div
							class="check-icon hidden bg-slate-900 rounded-full w-2.5 h-2.5 z-1 absolute"
						></div>
					</div>
					<label for="male" class="ml-1.5 text-slate-900 cursor-pointer"
						>男性</label
					>
				</div>
				<div class="flex items-center">
					<div
						class="w-5 h-5 bg-white rounded-full flex justify-center items-center relative"
					>
						<input
							type="radio"
							id="female"
							value="female"
							class="checkbox appearance-none w-full h-full border-slate-900 border-2 rounded-full"
							v-model="user.gender"
						/>
						<div
							class="check-icon hidden bg-slate-900 rounded-full w-2.5 h-2.5 z-1 absolute"
						></div>
					</div>
					<label for="female" class="ml-1.5 text-slate-900 cursor-pointer"
						>女性</label
					>
				</div>
			</div>
		</div>

		<div class="mt-8">
			<p class="text-sm text-red-400 text-center mt-4" v-if="errorMessage">
				{{ errorMessage }}
			</p>
		</div>

		<Button
			class="mt-4"
			text="送出更新"
			buttonType="submit"
			:buttonDisabled="buttonDisabled"
			@click="handleProfileUpdate"
		/>
	</form>
</template>

<style scoped>
.checkbox:checked + .check-icon {
	display: flex;
}
</style>
