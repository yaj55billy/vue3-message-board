import { ref } from "vue";
import { defineStore } from "pinia";
import { useLoaderStore } from "@/stores/useLoaderStore.js";
import { apiGetUsersProfile } from "@/utils/api.js";

export const useUserStore = defineStore("UserStore", () => {
	const loaderStore = useLoaderStore();
	const loginStatus = ref(false);

	const userData = ref({});
	const getUserData = () => {
		loaderStore.changeIsLoading(true);
		apiGetUsersProfile()
			.then((res) => {
				loginStatus.value = true;
				userData.value = res.data.data;
			})
			.catch(() => (loginStatus.value = false))
			.finally(() => {
				loaderStore.changeIsLoading(false);
			});
	};

	return {
		loginStatus,
		userData,
		getUserData,
	};
});
