<template>
  <div class="navbar">
    <van-tabs v-model="active" route>
      <van-tab title="推荐" to="/home/recommend"></van-tab>
      <van-tab title="手机" to="/home/phone"></van-tab>
      <van-tab title="智能"></van-tab>
      <van-tab title="电视"></van-tab>
      <van-tab title="笔记本"></van-tab>
      <van-tab title="家电"></van-tab>
      <!-- <van-tab title="">
        <van-popup v-model="show" position="top" :style="{ height: '30%' }" />
      </van-tab> -->
    </van-tabs>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      active: "",
      show: "",
    };
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
