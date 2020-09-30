<template>
  <div id="search">
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
    <div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>

    <van-swipe-cell>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
        { text: "小米", value: 3 },
        { text: "华为", value: 4 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
        { text: "价格排序", value: "d" },
        { text: "城市搜索", value: "e" },
      ],
    };
  },
  computed: {},
  components: {},
  created() {
    this.getProducts();
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
    getProducts() {
      this.$http.get("/api/v1/products").then((res) => {
        console.log(res);
      });
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
img {
  width: 80%;
  border-radius: 0.266667rem;
}
.goods-card {
  margin: 0;
  background-color: #ffff;
}

.delete-button {
  height: 100%;
}
</style>
