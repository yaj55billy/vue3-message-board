import axios from "axios";
const { VITE_API_BASE } = import.meta.env;

// http://127.0.0.1:3005/api
// https://node-api-cqno.onrender.com/api
export const apiBase = axios.create({
	baseURL: `${VITE_API_BASE}`,
});

// 註冊
// https://node-api-cqno.onrender.com/api/users/sign_up
export const apiSignUp = (userData) => apiBase.post("/users/sign_up", userData);

// 登入
// https://node-api-cqno.onrender.com/api/users/sign_in
export const apiSignIn = (userData) => apiBase.post("/users/sign_in", userData);

// 登出

// get users profile
export const apiGetUsersProfile = () => apiBase.get("/users/profile");

// 編輯 user 資料
export const apiProfileUpdate = (data) =>
	apiBase.patch("/users/updateProfile", data);

// 取得貼文
// http://127.0.0.1:3005/api/posts?timeSort=asc&q=貼文內容
// http://127.0.0.1:3005/api/posts?q=貼文內容
export const apiGetPosts = (params) => apiBase.get("/posts", { params });

// 新增貼文
export const apiAddPost = (data) => apiBase.post("/post", data);

// 上傳大頭照
export const apiUploadImage = (fileData) =>
	apiBase.post("/upload/file", fileData);
