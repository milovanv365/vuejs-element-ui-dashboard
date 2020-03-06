import Vue from "vue";
import "./plugins/";
import App from "./App.vue";
import router from "./router/";
import store from "./store/";
import VueTour from "vue-tour";

Vue.use(VueTour);

Vue.config.productionTip = false;

const vue = new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");

(async () => {
  const timeout = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));
  console.clear();
  await timeout(1000);
  const loader = document.querySelector(".a-loader");
  if (loader) loader.classList.add("--done");
  await timeout(1500);
  // @ts-ignore
  cancelAnimationFrame(window.ALoader);
  vue.$mount("#app");
})();
