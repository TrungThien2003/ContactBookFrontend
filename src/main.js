import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
// ...existing code...
import router from "./routers";
createApp(App).use(router).mount("#app");
