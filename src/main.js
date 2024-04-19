import "./assets/index.scss";
import "primeicons/primeicons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("Loading", Loading);
app.use(createPinia());
app.use(router);

app.mount("#app");
