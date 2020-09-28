<template>
  <div class="">
    <!--
      搜索栏
          参数： fixed固定在顶部
                placeholder 固定在顶部时，是否在标签位置生成一个等高的占位元素
    -->
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickSearch"
      class="cartnav"
    >
      <template #right class="bbb">
        <van-icon class="bbb" name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="cartCon">
      <van-cell
        class="msgLogin"
        title="登陆后享受更多优惠"
        is-link
        value="去登陆"
        click="goLogin"
      />
      <div class="cart-bom">
        <van-icon class="i" name="cart-o" />
        <span class="span">购物车还是空的</span>
        <em class="em" @click="goProList">去逛逛</em>
      </div>
    </div>

    <!-- 页脚 -->
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from "../../components/FooterBar";

export default {
  name: "",
  data() {
    return {};
  },
  computed: {},
  components: {
    FooterBar,
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      console.log("返回");
    },
    onClickSearch() {
      console.log("搜索");
    },
    goLogin() {
      console.log(1);
    },
    // 点击去逛逛跳转到首页
    goProList() {
      this.$router.push({
        path: "/home",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.cartnav {
  background: #f1f1f1;
}
.bbb {
  // color: #ccc;
  font-weight: bold;
}
.cartCon {
  .msgLogin {
    background: #ffffff;
    border-bottom: 0.0133rem solid #cccccc;
  }
  .cart-bom {
    height: 1.666667rem;
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    .i {
      font-size: 1rem;
    }
    .span {
      font-size: 0.426667rem;
      margin: 0 0.133333rem;
    }
    .em {
      display: block;
      padding: 0.0667rem 0.3333rem;
      border: 1px solid #ccc;
      font-style: normal;
    }
  }
}
</style>
