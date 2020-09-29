<template>
  <div class="search">
    <div>
      <van-icon class="i" name="arrow-left" @click="onClickLeft" />
    </div>
    <div>
      <input class="serach" type="search" placeholder="搜索商品名称" />
    </div>
    <div>
      <van-icon class="i" name="search" />
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {};
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  height: 1.106667rem;
  background-color: #f2f2f2;
  display: flex;
  div {
    height: 1.1rem;
  }
  :nth-of-type(1) {
    width: 1.2rem;
    .i {
      font-size: 0.8rem;
      color: #9c9c9c;
      text-align: center;
      line-height: 1.1rem;
    }
  }
  :nth-of-type(2) {
    flex: 1;
    .serach {
      width: 6.9664rem;
      height: 0.9072rem;
      margin-top: 0.1rem;
      margin-left: 0.4rem;
      border: none;
      text-indent: 0.3rem;
    }
  }
  :nth-of-type(3) {
    width: 1.3rem;
    .i {
      color: #9c9c9c;
      font-size: 0.8rem;
      text-align: center;
      line-height: 1.1rem;
    }
  }
}
</style>
