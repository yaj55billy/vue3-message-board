import { createRouter, createWebHashHistory } from "vue-router";
import BoardLayoutView from "../views/BoardLayoutView.vue";
import HomeView from "../views/HomeView.vue";
import CreatePostView from "../views/CreatePostView.vue";
import UpdateProfileView from "../views/UpdateProfileView.vue";
import SignUpView from "../views/SignUpView.vue";
import SignInView from "../views/SignInView.vue";
import { apiBase } from "@/utils/api";
import { SwalHandle } from "@/utils/sweetalert2.js";

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
				},
				{
					path: "/updateprofile",
					name: "UpdateProfile",
					component: UpdateProfileView,
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

router.beforeEach((to, from) => {
	const token = document.cookie.replace(
		/(?:(?:^|.*;\s*)metaToken\s*=\s*([^;]*).*$)|^.*$/,
		"$1"
	);
	if (!token && (to.name === "CreatePost" || to.name === "UpdateProfile")) {
		SwalHandle.showErrorMsg("需先登入唷～");
		return { name: "SignIn" };
	}
	if (token) {
		apiBase.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	}
});

export default router;
