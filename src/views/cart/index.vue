<template>
  <div class="">
    <!--
      搜索栏
          参数： fixed固定在顶部
                placeholder 固定在顶部时，是否在标签位置生成一个等高的占位元素
    -->
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickSearch"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
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
  methods: {
    onClickLeft() {
      console.log("返回");
    },
    onClickSearch() {
      console.log("搜索");
    },
  },
};
</script>
<style lang="scss" scoped>
.red {
  color: red;
  background: red;
}
</style>
