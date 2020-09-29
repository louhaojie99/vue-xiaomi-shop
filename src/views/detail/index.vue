<template>
  <div class="">
    <!--  -->
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickShare"
      class="cartnav"
    >
      <template #right class="bbb">
        <van-cell is-link @click="show = true" />
        <van-icon class="bbb" name="share-o" size="18" />
        <van-action-sheet
          v-model="show"
          :actions="actions"
          @select="onSelect"
        />
      </template>
    </van-nav-bar>

    <van-image width="375" height="410" :src="list.coverImg" />
    <p>{{ list.name }}</p>
    <p>￥{{ list.price }}</p>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
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
    };
  },
  computed: {},
  components: {},
  created() {
    this.list = this.$route.query;
    console.log(this.list);
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
  },
};
</script>
<style lang="scss" scoped></style>
