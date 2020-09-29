<template>
  <div class="setting">
    <van-nav-bar
      class="van-nav"
      title="功能设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div v-if="isShow">
      <van-cell
        class="van-cell"
        title="修改密码"
        is-link
        @click.native="changePwd"
      />
      <van-cell
        class="van-cell"
        title="退出登录"
        is-link
        @click.native="outLogin"
      />
    </div>
    <div v-else>
      <img class="logo" src="/images/logo.png" alt="" />
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="旧密码"
          label="旧密码"
          placeholder="旧密码"
          :rules="[{ required: true, message: '请填写旧密码' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="新密码"
          label="新密码"
          placeholder="新密码"
          :rules="[{ required: true, message: '请填写新密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { getToken, removeToken } from "../../utils/auth";
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      isShow: true,
      username: "",
      password: "",
    };
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push("/mine");
    },
    // 退出登录
    outLogin() {
      removeToken();
      Toast.success("账号退出成功");
      setTimeout(() => {
        this.$router.push("/login");
      });
    },
    // 修改密码显示
    changePwd() {
      console.log("修改密码");
      this.isShow = false;
    },
    // 修改密码走这里
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>
<style lang="scss" scoped>
.setting {
  font-size: 20px;
}
.van-nav {
  background: #f1f1f1;
}
.van-cell {
  border: 1px solid #f1f1f1;
}
.logo {
  width: 3.666667rem;
  display: block;
  margin: 0.666667rem auto;
}
</style>
