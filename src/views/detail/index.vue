<template>
  <div class="">
    <!-- 详情页 -->
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickShare"
      class="cartnav"
    >
      <template #right class="bbb">
        <van-icon class="bbb" name="share-o" size="18" @click="show = true" />
        <van-action-sheet
          v-model="show"
          :actions="actions"
          @select="onSelect"
        />
      </template>
    </van-nav-bar>

    <!-- 商品信息 -->
    <!-- {{ product }} -->
    <div v-for="item in product" :key="item._id">
      <van-image width="375" height="410" :src="item.coverImg" />
      <p>{{ item.name }}</p>
      <p>￥{{ item.price }}</p>
    </div>

    <!-- 底部 -->
    <van-goods-action>
      <van-goods-action-icon icon="smile-o" text="首页" @click="onClickIcon" />
      <van-goods-action-icon icon="user-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      list: [],
      show: false,
      actions: [{ name: "分享" }, { name: "分享到微博" }, { name: "取消" }],
      product: [], // 商品信息
    };
  },
  computed: {},
  components: {},
  created() {
    this.byIdGetProInfo(); // 根据id获取商品详情
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
    onClickShare() {
      //   this.$router.push("/search");
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },
    // 根据 id 获取商品详情
    async byIdGetProInfo() {
      const id = this.$route.query.id; // 商品id
      const productInfo = await this.$http.get(`/api/v1/products/${id}`);
      console.table(productInfo);
      this.product.push(productInfo);
    },
    // 点击加入购物车
  },
};
</script>
<style lang="scss" scoped></style>
