<template>
  <div class="login">
    <div class="head">
      <h3 class="title">小米账号登录</h3>
      <img class="logo" src="/images/logo.png" alt="" />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <a
        href="javascript:;"
        style="margin-left:230px;text-decoration: underline;"
        @click="goRegister"
        >没有账号，去注册</a
      >
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import axios from "axios";
import { setToken } from "../../utils/auth"; // auth验证token
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {
    // 用户登录
    onSubmit(values) {
      const { username, password } = values;
      this.$http
        .post("/api/v1/auth/login", {
          userName: username,
          password: password,
        })
        .then((res) => {
          console.log(res.code);
          if (res.code == "success") {
            Toast.success("登录成功");
            setToken(res.token);
            this.$router.push({
              path: "/home",
            });
          } else {
            Toast.fail(res.message);
          }
        });
    },
    goRegister() {
      this.$router.push("/register");
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
