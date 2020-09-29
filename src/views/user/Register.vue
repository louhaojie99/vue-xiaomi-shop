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
      <van-field
        v-model="nickname"
        type="text"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />

      <a
        href="javascript:;"
        style="margin-left:230px;text-decoration: underline;"
        @click="goLogin"
        >已注册，去登录</a
      >
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
    };
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {
    // 账号注册提交
    onSubmit(values) {
      // axios
      this.$http
        .post("/api/v1/auth/reg", {
          userName: this.username,
          password: this.password,
          nickName: this.nickname,
        })
        .then((res) => {
          console.log(res);
          if (res.code == "success") {
            Toast.success("注册成功");
            this.$router.push({
              path: "/login",
            });
          } else {
            Toast.fail("注册失败");
          }
        });
    },
    goLogin() {
      this.$router.push("/login");
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
