<template>
  <div class="">
    <van-nav-bar
      title="订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickSearch"
      class="cartnav"
    >
    </van-nav-bar>

    <div class="top">
      <van-notice-bar mode="closeable"
        >订单含付款减库存商品，支付完成才会为您预留库存，库存不足时系统将自动取消未支付的订单。</van-notice-bar
      >
    </div>
    <!-- 联系人卡片 -->
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="showList = true"
    />

    <!-- 联系人列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-contact-list
        v-model="chosenContactId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </van-popup>

    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>

    <!--  -->
    <div class="product">
      <ul>
        <li v-for="v in product" :key="v._id">
          <van-card
            :num="v.quantity"
            :price="v.product.price"
            :desc="v.product.descriptions"
            :title="v.product.name.substr(0, 9)"
            :thumb="v.product.coverImg"
          >
            <template #tags>
              <van-tag plain type="danger">12期免息可购买</van-tag>
            </template>
          </van-card>
          <van-cell is-link :title="Ftet" @click="Fshow2 = true" />
          <van-action-sheet
            v-model="Fshow2"
            :actions="Factions"
            cancel-text="取消"
            description="发票种类"
            close-on-click-action
            @select="Fchoose"
          ></van-action-sheet>
        </li>
      </ul>
      <van-cell is-link :title="tet" @click="show2 = true" />
      <van-action-sheet
        v-model="show2"
        :actions="actions"
        cancel-text="取消"
        description="发票种类"
        close-on-click-action
        @select="choose"
      ></van-action-sheet>
    </div>
    <van-submit-bar
      :price="sum * 100"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [
        {
          name: "张三",
          tel: "13000000000",
          id: 0,
        },
      ],
      // 分期操作
      Ftet: "分期",
      Fshow2: false,
      Factions: [{ name: "6期" }, { name: "12期" }],
      // 发票选择框
      tet: "电子发票",
      show2: false,
      actions: [{ name: "电子普通发票-个人" }, { name: "纸质发票-公司报销" }],
      // 地址选择
      show: false,
      sum: 0,
      product: [],
    };
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? "edit" : "add";
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter((item) => item.id === id)[0] : {};
    },
  },
  components: {},
  created() {
    console.log(this.$route.query);
    this.product = this.$route.query;
    this.product.forEach((v) => {
      this.sum += v.product.price * v.quantity;
    });
    console.log(this.sum);
  },
  mounted() {},
  methods: {
    // 添加联系人
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map((item) =>
          item.id === info.id ? info : item
        );
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter((item) => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    },

    // 返回购物车
    onClickLeft() {
      this.$router.push("/cart");
    },
    onClickSearch() {
      this.$router.push("/search");
    },
    // 发票选择框
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show2 = false;
      Toast(item.name);
    },
    choose(action, index) {
      console.log(action.name);
      console.log(index);
      this.tet = action.name;
    },
    // 分期操作
    Fchoose(action, index) {
      this.Ftet = action.name;
      console.log(action);
      console.log(index);
    },
    // 提交订单
    onSubmit() {
      Toast("差不多行了 又买不起！");
    },
  },
};
</script>
