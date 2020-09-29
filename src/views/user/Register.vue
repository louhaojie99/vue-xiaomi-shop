<template>
  <div class="login">
    <div class="head">
      <h3 class="title">小米账号注册</h3>
      <img class="logo" src="/images/logo.png" alt="" />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <a
        href="javascript:;"
        style="margin-left:230px;text-decoration: underline;"
        @click="goLogin"
        >已注册，去登录</a
      >
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "",
  data() {
    return {
      username: "",
      password: "",
      ppp: "",
    };
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {
    // 账号注册提交
    onSubmit(values) {
      // this.$http
      //   .post("/api/v1/auth/reg", {
      //     userName: this.username,
      //     password: this.password,
      //   })
      //   .then((res) => {
      //     console.log("执行了");
      //     console.log(res);
      //   });
      axios
        .post("/api/v1/auth/reg", {
          userName: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log("执行了");
          console.log(res);
        });
    },
    goLogin() {
      this.$router.push("/login", { params });
    },
  },
};
</script>
<style lang="scss" scoped>
.head {
  display: flex;
  flex-direction: column;
  padding-bottom: 0.6667rem;
  margin-top: 0.5rem;
  .title {
    font-size: 0.48rem;
    text-align: center;
    font-weight: normal;
    margin-top: 1.6667rem;
  }
  .logo {
    width: 2rem;
    margin: 0 auto;
  }
}
</style>
