<template>
  <div class="">
    <van-row>
      <van-col span="24">
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/35b4aba24daac25b58d63f16d07546bc.jpg?f=webp"
        />
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e249ed91c1dd4774d66f2f7da73e21cc.jpg?f=webp"
        />
      </van-col>
    </van-row>

    <van-swipe :loop="false" :width="300">
      <van-swipe-item v-for="(img, index) in bannerimg" :key="index">
        <van-image :src="img" />
      </van-swipe-item>
    </van-swipe>

    <van-row>
      <van-col span="12">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/53e729d30746033a042d8ae9399553a7.jpg?thumb=1&w=344&h=280"
          alt=""
        />
        <div class="txt">
          <b>Redmi Note 8 Pro</b>
          <p>6400万全场景四摄</p>
          <p>￥1099起</p>
          <van-button type="danger">立即购买</van-button>
        </div>
      </van-col>
      <van-col span="12">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/53e729d30746033a042d8ae9399553a7.jpg?thumb=1&w=344&h=280"
          alt=""
        />
        <div class="txt">
          <b>Redmi Note 8 Pro</b>
          <p>6400万全场景四摄</p>
          <p>￥1099起</p>
          <van-button type="danger">立即购买</van-button>
        </div>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="12">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/53e729d30746033a042d8ae9399553a7.jpg?thumb=1&w=344&h=280"
          alt=""
        />
        <div class="txt">
          <b>Redmi Note 8 Pro</b>
          <p>6400万全场景四摄</p>
          <p>￥1099起</p>
          <van-button type="danger">立即购买</van-button>
        </div>
      </van-col>
      <van-col span="12">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/53e729d30746033a042d8ae9399553a7.jpg?thumb=1&w=344&h=280"
          alt=""
        />
        <div class="txt">
          <b>Redmi Note 8 Pro</b>
          <p>6400万全场景四摄</p>
          <p>￥1099起</p>
          <van-button type="danger">立即购买</van-button>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "Phone",
  data() {
    return {
      bannerimg: [
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a1abcc26da7bd48cb48ce4b8e1e14ae.jpg?thumb=1&w=304&h=280",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a122fd2ffcebcd861cc0979c9fe192f.jpg?thumb=1&w=304&h=280",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3087a4f9f7e2866da54468b05efccc47.jpg?thumb=1&w=304&h=280",
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
.txt {
  margin-left: 1.066667rem;
}
</style>
