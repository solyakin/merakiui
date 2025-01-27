import Vue from "vue";
import App from "./App.vue";
import Meta from "vue-meta";
import VueClipboard from "vue-clipboard2";
import VueAnalytics from "vue-analytics";
import ViewComponent from "./components/utilities/ViewComponent";

Vue.use(Meta);

Vue.component("view-component", ViewComponent);

Vue.config.productionTip = false;

Vue.use(VueClipboard);

Vue.use(VueAnalytics, { id: "UA-167213766-1" });

console.log("Hello 😎, If you like it star it on Github 🚀");

new Vue({ render: (h) => h(App) }).$mount("#app");
