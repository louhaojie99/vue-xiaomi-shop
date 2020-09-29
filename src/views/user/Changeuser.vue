<template>
  <div class="">
    <van-nav-bar
      class="van-nav"
      title="修改信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-uploader :after-read="afterRead" />
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
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
  },
};
</script>
<style lang="scss" scoped>
.van-nav {
  background: #f1f1f1;
}
</style>
