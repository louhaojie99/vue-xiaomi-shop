<template>
  <div class="classify">
    <van-nav-bar
      title="分类"
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
    <van-tree-select
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
      height="700px"
    >
      <template #content>
        <div v-if="activeIndex === 0">
          <van-image
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/43c2c24fac68da8f2fa4ffd4bcd9d5e7.jpg?f=webp&w=750&h=300&bg=FFFFFF"
          />
          <h5>小米数字系列</h5>
          <van-row>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
          </van-row>
          <div class="enter">进入手机频道 &gt;</div>
        </div>

        <!--  -->
        <div v-if="activeIndex === 1">
          <van-image
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9da143d6e1bbce78cda92d4be76bf4e5.jpg?f=webp&w=750&h=300&bg=FFFFFF"
          />
          <h5>小米数字系列</h5>
          <van-row>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
          </van-row>
          <div class="enter">进入手机频道 &gt;</div>
        </div>

        <!--  -->
        <div v-if="activeIndex === 2">
          <van-image
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2d1fb3b7db6722bb4cb638d8c6ebefa6.jpg?f=webp&w=750&h=300&bg=FFFFFF"
          />
          <h5>小米数字系列</h5>
          <van-row>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
          </van-row>
          <div class="enter">进入手机频道 &gt;</div>
        </div>

        <div v-if="activeIndex === 3">
          <h5>小米数字系列</h5>
          <van-row>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
          </van-row>
          <div class="enter">进入手机频道 &gt;</div>
        </div>

        <div v-if="activeIndex === 4">
          <h5>众筹好物</h5>
          <van-row>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
            <van-col span="8">
              <van-image
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
              />
              <p>小米10至尊版</p>
            </van-col>
          </van-row>
          <div class="enter">进入手机频道 &gt;</div>
        </div>
      </template>
    </van-tree-select>

    <!-- 页脚 -->
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from "../../components/FooterBar";

export default {
  name: "classify",
  data() {
    return {
      activeId: 1,
      activeIndex: 0,
      items: [
        { text: "小米手机" },
        { text: "Redmi手机" },
        { text: "黑鲨手机" },
        { text: "5G合约" },
        { text: "小米众筹" },
        { text: "电视" },
        { text: "大家电" },
        { text: "电脑办公" },
        { text: "小爱音箱" },
        { text: "路由器" },
        { text: "生活电器" },
        { text: "厨房电器" },
        { text: "智能穿戴" },
        { text: "智能家居" },
        { text: "车载出行" },
        { text: "个护健康" },
      ],
    };
  },
  computed: {},
  components: {
    FooterBar,
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
    onClickSearch() {
      this.$router.push("/search");
    },
  },
};
</script>
<style lang="scss" scoped>
h5,
.enter {
  text-align: center;
}
</style>
