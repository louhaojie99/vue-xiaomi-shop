<template>
  <div class="mine">
    <!-- 头部 -->
    <header class="header">
      <div class="user-center">
        <div class="logo">
          <img src="/images/avatar.76a.png" alt="" />
        </div>
        <div class="login">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">/注册</a>
        </div>
      </div>
    </header>
    <van-cell title="我的订单" is-link value="全部订单" />
    <div class="service">
      <div>
        <van-icon name="balance-pay" />
        <span>
          待付款
        </span>
      </div>
      <div>
        <van-icon name="logistics" />
        <span>
          待收货
        </span>
      </div>
      <div>
        <van-icon name="flag-o" />
        <span>
          退换修
        </span>
      </div>
    </div>
    <!-- 设置 -->
    <van-cell class="setting" title="设置" icon="setting-o" />

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
  methods: {},
};
</script>
<style lang="scss" scoped>
.mine {
  height: 100%;
  background-color: #f1f1f1;
}
.header {
  height: 2.2235rem;
  background: url("/images/bg.63c8e19851.png") no-repeat center 0 #f37d0f;
  background-size: auto 100%;
  overflow: hidden;
  .user-center {
    height: 1.3341rem;
    margin-top: 0.4447rem;
    display: flex;
    justify-content: left;
    align-items: center;
    .logo {
      margin-left: 0.4667rem;
      margin-right: 0.3667rem;
      img {
        width: 1.1741rem;
        height: 1.1741rem;
        vertical-align: middle;
      }
    }
    .login {
      a {
        font-size: 0.42rem;
        color: #fff;
      }
    }
  }
}
.service {
  height: 2.333333rem;
  border-top: 0.0133rem solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.4rem;
  background-color: #ffffff;
  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    i {
      text-align: center;
      font-size: 0.8rem;
      color: #c1c1c1;
    }
    span {
      text-align: center;
    }
  }
}
.setting {
  border-top: 0.0233rem solid #f1f1f1;
  border-bottom: 0.0233rem solid #f1f1f1;
  font-size: 0.42rem;
}
</style>
