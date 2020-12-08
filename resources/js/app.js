require('./bootstrap');

import { createApp } from "vue";
import App from "../App.vue";
import router from "../js/router/index"
import store from "../js/store/index"

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");