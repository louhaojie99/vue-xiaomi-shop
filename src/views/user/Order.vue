<template>
  <div class="">
    <van-nav-bar
      class="navbar"
      title="用户结算"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-contact-card
      type="edit"
      name="张三"
      tel="13000000000"
      :editable="false"
    />
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
  created() {
    this.$http("/api/v1/orders", {
      per: 10,
      page: 1,
    }).then((res) => {
      console.log(res);
    });
  },
  mounted() {},
  methods: {
    onClickLeft() {
      history.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  background-color: #f1f1f1;
}
</style>
<style>
.van-nav-bar__left .van-nav-bar__arrow {
  color: #ccc;
  font-size: 0.7rem;
}
</style>
