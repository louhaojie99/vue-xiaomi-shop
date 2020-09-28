<template>
  <div class="">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in bannerlist" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);
export default {
  name: "recommend",
  data() {
    return {
      bannerlist: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
