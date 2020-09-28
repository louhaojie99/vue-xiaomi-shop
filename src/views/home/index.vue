<template>
  <div class="">
    <van-search v-model="value" placeholder="搜索关商品名字" />
    <!-- 导航 -->
    <NavBar></NavBar>
    <!-- 页脚 -->
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from "../../components/FooterBar";
import NavBar from "../../components/NavBar";

export default {
  name: "",
  data() {
    return {
      value: "",
    };
  },
  computed: {},
  components: {
    FooterBar,
    NavBar,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
