import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  // 搜索
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/home/search.vue"),
  },

  // 首页
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/home/index.vue"),
  },
  // 详情
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../views/detail/index.vue"),
  },

  // 分类
  {
    path: "/classify",
    name: "Classify",
    component: () => import("../views/classify/index.vue"),
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
  // 设置
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../views/user/Setting.vue"),
  },
  // 修改用户信息
  {
    path: "/changeuser",
    name: "Changeuser",
    component: () => import("../views/user/Changeuser.vue"),
  },
  // 订单结算
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/user/Order.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  linkActiveClass: "active",
});

export default router;
