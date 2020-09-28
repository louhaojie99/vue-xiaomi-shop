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
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
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
    onSubmit(values) {
      console.log("submit", values);
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
