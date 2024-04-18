import { createRouter, createWebHashHistory } from "vue-router";
import BoardLayoutView from "../views/BoardLayoutView.vue";
import HomeView from "../views/HomeView.vue";
import CreatePostView from "../views/CreatePostView.vue";
import UpdateProfileView from "../views/UpdateProfileView.vue";
import SignUpView from "../views/SignUpView.vue";
import SignInView from "../views/SignInView.vue";
import { useUserStore } from "@/stores/useUserStore.js";
import { SwalHandle } from "@/utils/sweetalert2.js";

const requireAuth = (to, from, next) => {
	const userStore = useUserStore();
	if (userStore.loginStatus) {
		next();
	} else {
		SwalHandle.showErrorMsg("需先登入唷～");
		setTimeout(() => {
			next({ name: "SignIn" });
		}, 1500);
	}
};

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "BoardLayout",
			component: BoardLayoutView,
			children: [
				{
					path: "",
					name: "Home",
					component: HomeView,
				},
				{
					path: "/createpost",
					name: "CreatePost",
					component: CreatePostView,
					beforeEnter: requireAuth,
				},
				{
					path: "/updateprofile",
					name: "UpdateProfile",
					component: UpdateProfileView,
					beforeEnter: requireAuth,
				},
			],
		},
		{
			path: "/signin",
			name: "SignIn",
			component: SignInView,
		},
		{
			path: "/signup",
			name: "SignUp",
			component: SignUpView,
		},
	],
});

export default router;
