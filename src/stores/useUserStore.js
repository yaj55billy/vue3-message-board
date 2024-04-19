import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import { useLoaderStore } from "@/stores/useLoaderStore.js";
import { apiBase, apiGetUsersProfile } from "@/utils/api.js";

export const useUserStore = defineStore("UserStore", () => {
	const loaderStore = useLoaderStore();
	const router = useRouter();

	const loginStatus = ref(false);
	const checkToken = () => {
		const token = document.cookie.replace(
			/(?:(?:^|.*;\s*)metaToken\s*=\s*([^;]*).*$)|^.*$/,
			"$1"
		);
		if (token) {
			apiBase.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			getUserData();
		} else {
			loginStatus.value = false;
		}
	};

	const userData = ref({});
	const getUserData = () => {
		loaderStore.changeIsLoading(true);
		apiGetUsersProfile()
			.then((res) => {
				loginStatus.value = true;
				userData.value = res.data.data;
			})
			.catch((error) => {
				loginStatus.value = false;
				console.log(error);
			})
			.finally(() => {
				loaderStore.changeIsLoading(false);
			});
	};

	return {
		loginStatus,
		checkToken,
		userData,
		getUserData,
	};
});
