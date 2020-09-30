<template>
  <div class="home">
    <!-- Header页眉 -->
    <div class="headBar">
      <div class="logo">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
      <div class="search" @click="search">
        <van-icon class="icofont" size="0.6rem" name="search" />
        搜索商品名字
      </div>
      <div class="login">
        <van-icon name="user-o" size="20px" @click="isLogin" />
      </div>
    </div>
    <!-- 导航 -->
    <van-tabs v-model="active" animated background="#f1f1f1">
      <van-tab v-for="item in navNameList" :title="item" :key="item">
        <!-- 推荐页样式 -->
        <div class="recommend" v-show="item == '推荐'">
          <!-- 轮播 -->
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="list in bannerlist" :key="list.id">
              <img class="bannerimg" v-lazy="list.imgurl" />
            </van-swipe-item>
          </van-swipe>
          <!-- 菜单栏 -->
          <div class="menu">
            <van-row type="flex" justify="space-around">
              <van-col>
                <a href="https://m.mi.com/seckill">
                  <img src="/images/ge01.png" alt="" />
                </a>
              </van-col>
              <van-col>
                <a href="https://m.mi.com/crowdfunding/home">
                  <img src="/images/ge02.png" alt="" />
                </a>
              </van-col>
              <van-col>
                <a href="https://s1.mi.com/m/app/hd/index.html?id=15325">
                  <img src="/images/ge03.png" alt="" />
                </a>
              </van-col>
              <van-col>
                <a
                  href="https://m.mi.com/recycling/index?headless=1&needValidHost=false"
                >
                  <img src="/images/ge04.png" alt="" />
                </a>
              </van-col>
              <van-col>
                <a href="https://s1.mi.com/m/app/hd/index.html?id=11366">
                  <img src="/images/ge05.png" alt="" />
                </a>
              </van-col>
            </van-row>
            <van-row type="flex" justify="space-around">
              <van-col>
                <a href="https://m.mi.com/channel/all/14709">
                  <img src="/images/ge06.png" alt="" />
                </a>
              </van-col>
              <van-col>
                <a href="https://m.mi.com/channel/all/13326">
                  <img src="/images/ge07.png" alt="" />
                </a>
              </van-col>
              <van-col>
                <a href="https://m.mi.com/channel/all/13249">
                  <img src="/images/ge08.png" alt="" />
                </a>
              </van-col>
              <van-col>
                <a href="https://m.mi.com/channel/all/13365">
                  <img src="/images/ge09.png" alt="" />
                </a>
              </van-col>
              <van-col>
                <a href="https://service.10046.mi.com/channel/">
                  <img src="/images/ge10.png" alt="" />
                </a>
              </van-col>
            </van-row>
          </div>

          <van-row>
            <van-col span="12">
              <img
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d692a30ee3d586c4274575eec255d3c5.jpg?f=webp&w=537&h=762&bg=C1DDE9"
                alt=""
              />
            </van-col>
            <van-col span="12">
              <img
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/827a686678f39b1bbdc99c6e6b6a13c8.jpg?f=webp&w=537&h=378&bg=DAECFA"
                alt=""
              />
            </van-col>
            <van-col span="12">
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
            <van-col span="12" v-for="item in productlist" :key="item._id">
              <img class="itemimg" :src="item.coverImg" alt="" />
              <div class="txt">
                <b>Redmi Note 8 Pro</b>
                <p>6400万全场景四摄</p>
                <!-- <p>{{ item.name }}</p> -->
                <p>￥{{ item.price }}起</p>
                <van-button type="danger" @click="goDetail(item)"
                  >立即购买</van-button
                >
              </div>
            </van-col>
          </van-row>
        </div>
        <!-- 手机 -->
        <div v-show="item == '手机'">
          000000000
        </div>
        <!-- 智能 -->
        <div v-show="item == '智能'">11111111</div>
        <!-- 电视 -->
        <div v-show="item == '电视'">22222222</div>
        <!-- 笔记本 -->
        <div v-show="item == '笔记本'">33333333</div>
        <!-- 家电 -->
        <div v-show="item == '家电'">44444444</div>
        <!-- 生活周边 -->
        <div v-show="item == '生活周边'">5555555</div>
      </van-tab>
    </van-tabs>
    <!-- 置顶按钮 -->
    <div class="goTop" @click="goTop" v-show="isgoTopShow">
      <van-icon name="back-top" />
    </div>
    <!-- 页脚 -->
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from "../../components/FooterBar";
import NavBar from "../../components/NavBar";
import { getToken } from "../../utils/auth";
import { Lazyload } from "vant"; // 图片懒加载
import { Toast } from "vant";
import Vue from "vue";
Vue.use(Lazyload);

export default {
  name: "",
  data() {
    return {
      active: 0, // 默认导航选中第一个
      navNameList: [
        "推荐",
        "手机",
        "智能",
        "电视",
        "笔记本",
        "家电",
        "生活周边",
      ],
      value: "",
      bannerlist: [],
      productlist: [],
      isgoTopShow: true, // 置顶按钮默认不显示
    };
  },
  watch: {},
  computed: {},
  components: {
    FooterBar,
    NavBar,
  },
  created() {
    this.getBanner();
    this.getProduct();
  },
  mounted() {},
  methods: {
    search() {
      this.$router.push("/search");
    },
    isLogin() {
      if (getToken) {
        this.$router.push("/mine");
      } else {
        this.$router.push("/login");
      }
    },
    getBanner() {
      this.$http.get("/banner").then((res) => {
        // console.log(res);
        this.bannerlist = res;
      });
    },
    // 获取商品
    getProduct() {
      this.$http.get("/api/v1/products").then((res) => {
        // console.log(res);
        this.productlist = res.products;
      });
    },
    //
    goDetail(item) {
      // console.log("item", item._id);
      this.$router.push({
        path: "/detail",
        query: {
          id: item._id,
        },
      });
    },
    goTop() {
      if (document.documentElement.scrollTop > 200) {
        document.documentElement.scrollTop = 0;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$headColor: #f1f1f1; // 头部颜色
.headBar {
  width: 100%;
  height: 1.166933rem;
  background-color: $headColor;
  display: flex;
  align-items: center;
  .logo {
    width: 1.389067rem;
    img {
      display: block;
      width: 0.6667rem;
      margin: 0 auto;
    }
  }
  .search {
    flex: 1;
    height: 0.886933rem;
    border-radius: 0.0667rem;
    background-color: #ffffff;
    color: #ccc;
    font-size: 0.4rem;
    line-height: 0.88rem;
    text-indent: 0.05rem;
    .icofont {
      vertical-align: middle;
      position: relative;
      top: -0.05rem;
    }
  }
  .login {
    width: 1.389067rem;
    text-align: center;
  }
}

/* 推荐页样式 */
// 菜单栏
.menu {
  img {
    width: 1.901067rem;
    height: 2.1072rem;
  }
}
img {
  width: 100%;
}
.bannerimg {
  width: 100%;
  height: 200px;
}
.txt {
  margin-left: 1.066667rem;
}
.itemimg {
  width: 4.333333rem;
  text-align: center;
}
// 置顶
.goTop {
  width: 1rem;
  height: 1rem;
  background-color: #fdf2f2;
  border: 0.0133rem solid #ccc;
  border-radius: 50%;
  text-align: center;
  line-height: 1.1rem;
  font-size: 0.5rem;
  color: #867d7d;
  position: fixed;
  bottom: 1.8rem;
  right: 0.4rem;
}
</style>
