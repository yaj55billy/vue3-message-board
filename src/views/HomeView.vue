<script setup>
import axios from "axios";
import PostCard from "@/components/PostCard.vue";
import { ref, onMounted } from "vue";
import { apiGetPosts } from "@/utils/api.js";
import { SwalHandle } from "@/utils/sweetalert2.js";
import { useLoaderStore } from "@/stores/useLoaderStore.js";
const loaderStore = useLoaderStore();

const posts = ref([]);
const searchContent = ref("");
const timeSort = ref("desc"); // 遞減(由大到小)

const getPosts = () => {
	const params = {
		q: searchContent.value,
		timeSort: timeSort.value,
	};

	loaderStore.changeIsLoading(true);

	apiGetPosts(params)
		.then((res) => {
			posts.value = res.data.data;
		})
		.catch(() => {
			SwalHandle.showErrorMsg("貼文取得失敗，請稍候再嘗試看看～");
		})
		.finally(() => {
			loaderStore.changeIsLoading(false);
		});
};

onMounted(() => {
	getPosts();
});
</script>

<template>
	<div class="flex items-stretch">
		<select
			name=""
			id=""
			class="w-1/3 mr-3 p-3 border-slate-900 border-2"
			v-model="timeSort"
			@change="getPosts"
		>
			<option value="desc">最新貼文</option>
			<option value="asc">最舊貼文</option>
		</select>
		<div class="w-full relative">
			<input
				type="text"
				placeholder="搜尋貼文"
				class="w-full p-3 pr-14 border-slate-900 border-2"
				v-model="searchContent"
			/>
			<button
				type="button"
				class="absolute top-[2px] right-[2px] w-[48px] h-[48px] bg-blue-500 hover:bg-yellow-400 text-white hover:text-slate-900 transition-colors text-xl flex items-center justify-center"
				@click="getPosts"
			>
				<span class="pi pi-search"></span>
			</button>
		</div>
	</div>
	<ul v-if="posts.length !== 0">
		<li v-for="post in posts" :key="post._id" class="mt-4">
			<PostCard :post="post" />
		</li>
	</ul>
	<div v-else class="mt-4">
		<div
			class="bg-white border-slate-900 border-2 shadow-slate-900 shadow-[0_3px_0px] rounded-lg"
		>
			<div class="py-5 px-4 border-slate-900 border-b-2">
				<div class="flex space-x-2">
					<span
						class="w-[9px] h-[9px] rounded-full border-gray-600 bg-[#DE4B63]"
					></span>
					<span
						class="w-[9px] h-[9px] rounded-full border-gray-600 bg-[#FAA722]"
					></span>
					<span
						class="w-[9px] h-[9px] rounded-full border-gray-600 bg-[#83C51D]"
					></span>
				</div>
			</div>
			<p class="text-gray-400 text-center py-9 px-4">
				目前尚無動態，新增一則貼文吧！
			</p>
		</div>
	</div>
</template>
