<template>
  <div class="footer">
    <!--
      footerbar页脚
      参数说明：
        route 开启路由
        active-color="#07c160" 选中背景色
        inactive-color="#000"  字体颜色
    -->
    <van-tabbar
      route
      v-model="active"
      active-color="#ff6700"
      inactive-color="#999999"
    >
      <van-tabbar-item to="/home" replace icon="wap-home">
        首页
      </van-tabbar-item>
      <van-tabbar-item to="/classify" replace icon="search"
        >分类</van-tabbar-item
      >
      <van-tabbar-item to="/starball" replace icon="circle" badge=""
        >星球</van-tabbar-item
      >
      <van-tabbar-item to="/cart" replace icon="shopping-cart-o" badge=""
        >购物车</van-tabbar-item
      >
      <van-tabbar-item to="/mine" replace icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
  data() {
    return {
      active: 1,
    };
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
