<template>
  <div id="search">
    <van-sticky>
      <div class="search">
        <div>
          <van-icon class="i" name="arrow-left" @click="onClickLeft" />
        </div>
        <div>
          <input
            class="serach"
            type="search"
            placeholder="搜索商品名称"
            v-model="keywords"
          />
        </div>
        <div>
          <van-icon class="i" name="search" />
        </div>
      </div>

      <div class="menu">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
      </div>
    </van-sticky>
    <van-swipe-cell v-for="item in listFilter" :key="item._id">
      <van-card
        :price="item.price"
        :desc="item.descriptions"
        title="商品标题"
        class="goods-card"
        :thumb="item.coverImg"
      />
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      keywords: "",
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
      list: [],
    };
  },
  computed: {
    listFilter() {
      return this.list.filter((item) => item.name.includes(this.keywords));
    },
  },
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
        console.log(res.products);
        this.list = res.products;
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

<style>
.van-dropdown-menu__bar {
  background: #f2f2f2 !important;
}
</style>
