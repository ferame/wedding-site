import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { createI18n } from "vue-i18n";
import languages from "./assets/languages.json";
import "./assets/style.css";

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: languages
});

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(router);

app.mount("#app");
