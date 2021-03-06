import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
