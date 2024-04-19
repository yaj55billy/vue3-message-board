<script setup>
import axios from "axios";
import { ref, computed, onMounted } from "vue";
import { useUserStore } from "@/stores/useUserStore.js";
import { useLoaderStore } from "@/stores/useLoaderStore.js";
import { useRouter } from "vue-router";
import { apiAddPost } from "@/utils/api";
import { SwalHandle } from "@/utils/sweetalert2.js";
import SectionTitle from "@/components/SectionTitle.vue";
import Button from "@/components/Button.vue";

const router = useRouter();
const userStore = useUserStore();
const loaderStore = useLoaderStore();

const content = ref("");
const pic = ref("");
const buttonDisabled = computed(() => !content.value);
const errorMessage = ref("");

const createPost = () => {
	loaderStore.changeIsLoading(true);
	const data = {
		user: userStore.userData._id,
		image: pic.value,
		content: content.value,
		type: "person",
		tags: ["新增測試"],
	};

	apiAddPost(data)
		.then(() => {
			SwalHandle.showSuccessMsg("貼文新增成功～");
			router.push("/");
		})
		.catch(() => {
			SwalHandle.showErrorMsg("貼文新增失敗，請稍候再嘗試看看！");
			errorMessage.value = error.response.data.message;
		})
		.finally(() => {
			loaderStore.changeIsLoading(false);
		});
};
</script>

<template>
	<SectionTitle text="張貼動態" />
	<section
		class="mt-6 border-slate-900 border-2 border-b-4 bg-white rounded-lg p-8"
	>
		<form action="" @submit.prevent="createPost">
			<label for="content" class="block">貼文內容</label>
			<textarea
				name="content"
				id="content"
				class="mt-2 border-slate-900 border-2 w-full h-[160px] px-4 py-3"
				required
				v-model="content"
			></textarea>

			<label for="">圖片欄位</label>
			<input
				type="text"
				id="pic"
				name="pic"
				placeholder="圖片"
				class="w-full border-slate-900 border-2 px-4 py-3 mt-2"
				v-model="pic"
			/>

			<div class="mt-8">
				<p class="text-sm text-red-400 text-center" v-if="errorMessage">
					{{ errorMessage }}
				</p>
			</div>

			<div class="w-3/5 mx-auto mt-4">
				<Button
					text="送出貼文"
					buttonType="submit"
					:buttonDisabled="buttonDisabled"
				/>
			</div>
		</form>
	</section>
</template>
