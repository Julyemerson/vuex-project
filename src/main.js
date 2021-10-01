import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

//prettier-ignore
createApp(App)
    .use(store)
    .mount("#app");
