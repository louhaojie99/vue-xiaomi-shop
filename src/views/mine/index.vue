<template>
  <div class="mine">
    <!-- 头部 -->
    <header class="header">
      <div class="user ui-flex align-center">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <a href="javascript:;">登录</a>
          /
          <a href="javascript:;">注册</a>
        </div>
      </div>
    </header>

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
  methods: {},
};
</script>
<style lang="scss" scoped>
.header {
  height: 2.2235rem;
  background: url("../../../public/images/bg.63c8e19851.png") no-repeat center 0
    #f37d0f;
  background-size: auto 100%;
  overflow: hidden;
  .align-center {
    height: 1.3341rem;
    margin-top: 0.4447rem;
    border: 1px solid red;
  }
}
</style>
