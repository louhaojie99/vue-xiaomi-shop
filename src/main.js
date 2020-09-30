//引入rem自适应
import "amfe-flexible";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入UI库(Vant)
import Vant from "vant";
import "vant/lib/index.css";
import { getToken } from "./utils/auth";
// axios挂到原型上，全局使用
import request from "./utils/request";
Vue.prototype.$http = request;

Vue.config.productionTip = false;
Vue.use(Vant); // 全局使用Vant

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 路由导航守卫
/* router.beforeEach((to, from, next) => {
  if (getToken()) {
    next();
  } else {
    if (to.path === "/login") {
      //在登陆页面
      next();
    } else {
      //不在登录页，跳转到登录页
      next("/login");
    }
  }
}); */
