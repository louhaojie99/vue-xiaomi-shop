<template>
  <div class="">
    <van-nav-bar
      class="van-nav"
      title="修改信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- <van-uploader :after-read="afterRead" /> -->
    <van-image width="100" height="100" :src="avatar" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="avatar"
        name="avatar"
        label="头像"
        placeholder="头像"
        :rules="[{ required: true, message: '请填写头像' }]"
      />
      <van-field
        v-model="newNick"
        name=" newNick"
        label="新昵称"
        placeholder="新昵称"
        :rules="[{ required: true, message: '请填写新昵称' }]"
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
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      isShow: true,
      avatar: "",
      newNick: "",
    };
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    onClickLeft() {
      this.$router.push("/mine");
    },
    onSubmit(values) {
      console.log("submit", values);
      // console.log(this.newNick);
      this.$http
        .post("/api/v1/users/change_info", {
          nickName: this.newNick,
          avatar: this.avatar,
        })
        .then((res) => {
          // console.log(res);
          if (res.code == "success") {
            Toast.success(res.message);
          } else {
            Toast.fail(res.message);
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.van-nav {
  background: #f1f1f1;
}
</style>
