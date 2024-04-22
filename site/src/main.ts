import TDesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";

import "./style/index.less";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// import site webcomponents
import "wzz-site-components";
import "wzz-site-components/lib/styles/style.css";
import "wzz-site-components/lib/styles/prism-theme.less";
import "wzz-site-components/lib/styles/prism-theme-dark.less";
import { registerLocaleChange } from "wzz-site-components";

registerLocaleChange();

const app = createApp(App);

app.use(TDesign);
app.use(createPinia());
app.use(router);

app.mount("#app");
