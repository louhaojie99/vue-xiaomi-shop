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
      class="cartnav"
    >
      <template #right class="bbb">
        <van-icon class="bbb" name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="cartCon">
      <van-cell
        class="msgLogin"
        title="登陆后享受更多优惠"
        is-link
        value="去登陆"
        @click="goLogin"
        v-show="product == ''"
      />
      <!-- end -->
      <div class="cart-bom" v-show="product == ''">
        <van-icon class="i" name="cart-o" />
        <span class="span">购物车还是空的</span>
        <em class="em" @click="goProList">去逛逛</em>
      </div>
      <!-- 商品列表 -->
      <div class="cartprolist">
        <div class="item" v-for="item in product" :key="item._id">
          <div class="chckbox">
            <input type="checkbox" v-model="item.checked" />
          </div>
          <div class="proimg">
            <img :src="item.product.coverImg" alt="" />
          </div>
          <div class="proinfo">
            <div>
              <div class="name">{{ item.product.name }}</div>
              <div class="price">售价：{{ item.product.price }}元</div>
            </div>
            <div>
              <input type="button" value="-" />
              <span class="pricee">1</span>
              <input type="button" value="+" />
            </div>
          </div>
          <div class="del">
            <button @click="del(item._id)">删除</button>
          </div>
        </div>
      </div>
    </div>
    <!-- CartBar -->
    <div class="cartbar" v-show="product != ''">
      <div class="d1">
        <div>
          共{{ count }}件 <span style="font-weight: bold;">金额：</span>
        </div>
        <div>
          <span style="color:#ff6700;font-weight: bold;">{{ sumPrices }}</span>
          元
        </div>
      </div>
      <div class="d2" @click="goBuy">
        继续购物
      </div>
      <div class="d3" @click="onSubmit">
        去结算
      </div>
    </div>
    <!-- 页脚 -->
    <FooterBar v-show="product == ''"></FooterBar>
  </div>
</template>

<script>
import FooterBar from "../../components/FooterBar";
import { getToken } from "../../utils/auth";
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      product: [],
    };
  },
  computed: {
    sumPrices() {
      return this.product
        .filter((item) => item.checked)
        .reduce((pre, cur) => {
          return pre + cur.product.price * cur.amount;
        }, 0);
    },
    count() {
      return this.product.filter((item) => item.checked).length;
    },
  },
  components: {
    FooterBar,
  },
  created() {
    this.getUserCartInfo(); // 获取用户购物车数据
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
    onClickSearch() {
      this.$router.push("/search");
    },
    goLogin() {
      this.$router.push("/login");
    },
    // 点击去逛逛跳转到首页
    goProList() {
      this.$router.push({
        path: "/home",
      });
    },
    // 获取用户购物车数据
    getUserCartInfo() {
      this.$http.get("/api/v1/shop_carts").then((res) => {
        // this.product = res;
        this.product = res.map((v) => {
          return { ...v, checked: false, amount: 1 };
        });
        console.log(this.product);
      });
    },
    //删除
    del(id) {
      // console.log(id);
      this.$http.delete("/api/v1/shop_carts/" + id).then((res) => {
        // console.log(res);
        this.getUserCartInfo();
      });
    },
    //
    goBuy() {
      this.$router.push("/home");
    },
    // 去结算
    onSubmit() {
      if (getToken()) {
        // console.log(this.product);
        let result = this.product.every((v) => {
          return v.checked == false;
        });
        // console.log(result);
        if (result) {
          Toast("您什么商品都没有勾选！");
        } else {
          let arr = this.product.filter((v) => {
            return v.checked == true;
          });
          // this.$eventBus.$emit("dingdan", arr);
          this.$router.push({
            name: "Order",
            query: arr,
          });
          console.log(arr);
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.cartnav {
  background: #f1f1f1;
}
.bbb {
  // color: #ccc;
  font-weight: bold;
}
.cartCon {
  .msgLogin {
    background: #ffffff;
    border-bottom: 0.0133rem solid #cccccc;
  }
  .cart-bom {
    height: 1.666667rem;
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    .i {
      font-size: 1rem;
    }
    .span {
      font-size: 0.426667rem;
      margin: 0 0.133333rem;
    }
    .em {
      display: block;
      padding: 0.0667rem 0.3333rem;
      border: 1px solid #ccc;
      font-style: normal;
    }
  }
}

// 商品列表样式
.cartprolist {
  min-height: 3.146667rem;

  overflow: hidden;
  .item {
    display: flex;
    position: relative;
    align-items: center;

    border: 1px solid #f1f1f1;
    .chckbox {
      width: 0.84rem;
      text-align: center;
    }
    .proimg {
      img {
        width: 2.666667rem;
      }
    }
    .proinfo {
      .pricee {
        display: inline-block;
        width: 0.6rem;
        text-align: center;
        border: 2px solid #ccc;
      }
    }
    .del {
      button {
        width: 50px;
        margin-right: 10px;
      }
    }
  }
}
.cartbar {
  width: 100%;
  height: 1.386667rem;
  display: flex;
  align-items: center;
  border-top: 1px solid #cccccc;
  position: fixed;
  bottom: 0;
  div {
    flex: 1;
  }
  .d1 {
    height: 1.386667rem;
    text-align: center;
    line-height: 0.7rem;
  }
  .d2 {
    height: 1.386667rem;
    line-height: 1.386667rem;
    text-align: center;
    background-color: #f4f4f4;
  }
  .d3 {
    height: 1.386667rem;
    line-height: 1.386667rem;
    text-align: center;
    background-color: #ff6700;
  }
}
</style>
