import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  // 首页
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/home/index.vue"),
    redirect: "/home/recommend",
    children: [
      {
        path: "recommend",
        name: "Recommend",
        component: () => import("../views/home/recommend.vue"),
      },
      {
        path: "phone",
        name: "Phone",
        component: () => import("../views/home/phone.vue"),
      },
    ],
  },
  // 分类
  {
    path: "/classify",
    name: "Classify",
    component: () => import("../views/classify/index.vue"),
  },
  // 星球
  {
    path: "/starball",
    name: "Starball",
    component: () => import("../views/starball/index.vue"),
  },
  // 购物车
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/cart/index.vue"),
  },
  // 我的
  {
    path: "/mine",
    name: "Mine",
    component: () => import("../views/mine/index.vue"),
  },
  // 登录
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/user/Login.vue"),
  },
  // 注册
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/user/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
