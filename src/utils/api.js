import axios from "axios";
const { VITE_API_BASE } = import.meta.env;

// 後台相關
export const apiBase = axios.create({
	baseURL: `${VITE_API_BASE}`,
});

// get users profile
export const apiGetUsersProfile = () => apiBase.get("/users/profile");

// 註冊
// https://node-api-cqno.onrender.com/api/users/sign_up
export const apiSignUp = (userData) => apiBase.post("/users/sign_up", userData);

// 登入
// https://node-api-cqno.onrender.com/api/users/sign_in
export const apiSignIn = (userData) => apiBase.post("/users/sign_in", userData);

// 後台驗證
// export const apiAdminCheck = () => apiAdminBase.post('/api/user/check', {});

// 登出
// export const apiSignOut = () => apiAdminBase.post('/logout');

// 後台取得產品列表
// export const apiGetAdminProducts = (page = 1) =>
//   apiAdminBase.get(`/api/${VITE_API_PATH}/admin/products?page=${page}`);

// 後台上傳圖片
// export const apiUploadAdminImage = (fileData) =>
//   apiAdminBase.post(`/api/${VITE_API_PATH}/admin/upload`, fileData);
