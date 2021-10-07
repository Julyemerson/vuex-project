import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "@/assets/css/style.css";

//prettier-ignore
createApp(App)
    .use(store)
    .mount("#app");
