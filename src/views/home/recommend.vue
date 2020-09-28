<template>
  <div class="">
    <!-- 轮播 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in bannerlist" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!--  -->
    <van-grid :column-num="5">
      <van-grid-item icon="photo-o" text="小米秒杀" />
      <van-grid-item icon="photo-o" text="小米众筹" />
      <van-grid-item icon="photo-o" text="全芯超越" />
      <van-grid-item icon="photo-o" text="以旧换新" />
      <van-grid-item icon="photo-o" text="超值特卖" />
      <van-grid-item icon="photo-o" text="小米秒杀" />
      <van-grid-item icon="photo-o" text="小米众筹" />
      <van-grid-item icon="photo-o" text="全芯超越" />
      <van-grid-item icon="photo-o" text="以旧换新" />
      <van-grid-item icon="photo-o" text="超值特卖" />
    </van-grid>

    <van-row>
      <van-col span="12">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d692a30ee3d586c4274575eec255d3c5.jpg?f=webp&w=537&h=762&bg=C1DDE9"
          alt=""
        />
      </van-col>
      <van-col span="11" offset="1">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/827a686678f39b1bbdc99c6e6b6a13c8.jpg?f=webp&w=537&h=378&bg=DAECFA"
          alt=""
        />
      </van-col>
      <van-col span="11" offset="1">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/267e988a99b5cf4e960747e8aa5fa831.jpg?f=webp&w=537&h=378&bg=EDFBFC"
          alt=""
        />
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/189acdf7e9b807cfc22d394df87c1958.jpg?f=webp&w=1080&h=420&bg=FEFEFE"
          alt=""
        />
      </van-col>
    </van-row>
    <!-- 每日精选 -->
    <van-row>
      <van-col span="24">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0c08e3519b4c98ae53734a405143ffee.jpg?f=webp&w=1080&h=660&bg=FFFFFF"
          alt=""
        />
      </van-col>
    </van-row>

    <van-row>
      <van-col span="12">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/53e729d30746033a042d8ae9399553a7.jpg?thumb=1&w=344&h=280"
          alt=""
        />
        <b>Redmi Note 8 Pro</b>
        <p>6400万全场景四摄</p>
        <p>￥1099起</p>
        <van-button type="danger">立即购买</van-button>
      </van-col>
      <van-col span="12">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280"
          alt=""
        />
        <b>Redmi Note 8 Pro</b>
        <p>6400万全场景四摄</p>
        <p>￥1099起</p>
        <van-button type="danger">立即购买</van-button>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="12">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/53e729d30746033a042d8ae9399553a7.jpg?thumb=1&w=344&h=280"
          alt=""
        />
        <b>Redmi Note 8 Pro</b>
        <p>6400万全场景四摄</p>
        <p>￥1099起</p>
        <van-button type="danger">立即购买</van-button>
      </van-col>
      <van-col span="12">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280"
          alt=""
        />
        <b>Redmi Note 8 Pro</b>
        <p>6400万全场景四摄</p>
        <p>￥1099起</p>
        <van-button type="danger">立即购买</van-button>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="12">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/53e729d30746033a042d8ae9399553a7.jpg?thumb=1&w=344&h=280"
          alt=""
        />
        <b>Redmi Note 8 Pro</b>
        <p>6400万全场景四摄</p>
        <p>￥1099起</p>
        <van-button type="danger">立即购买</van-button>
      </van-col>
      <van-col span="12">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280"
          alt=""
        />
        <b>Redmi Note 8 Pro</b>
        <p>6400万全场景四摄</p>
        <p>￥1099起</p>
        <van-button type="danger">立即购买</van-button>
      </van-col>
    </van-row>
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
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/57d93d8554014e09ba15cc3c16e2d5e7.jpeg?thumb=1&w=720&h=360",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/18690aba81e6c81705f2052480292efa.jpg?thumb=1&w=720&h=360",
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
/* 
van-row van-col {
  width: 4rem;
  background-color: aqua;
}
van-row van-col {
  width: 5rem;
  height: 4rem;
  background-color: brown;
} */
</style>
