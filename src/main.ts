import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "./plugins/axios";
import VueAxios from "vue-axios";
import store from "./store";

const Vue = createApp(App);

Vue.use(store as any);
Vue.use(router);
Vue.use(VueAxios as any, axios);
Vue.provide("axios", Vue.config.globalProperties.axios);

Vue.mount("#app");
