//引入rem自适应
import "amfe-flexible";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入UI库(Vant)
import Vant from "vant";
import "vant/lib/index.css";

// axios挂到原型上，全局使用
import request from "./utils/request";
Vue.prototype.$http = request;

import { Toast } from "vant";
Vue.use(Toast);

Vue.config.productionTip = false;
Vue.use(Vant); // 全局使用Vant

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
