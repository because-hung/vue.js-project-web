<template>
  <div>
    <div>
      <Header></Header>
    </div>

    <div class="logo-header mt-5 d-flex justify-content-center ">
      <img src="../../../src/assets/img/logo2.png" alt="" class="logoImg" />
      <h1 class=" text-secondary ml-3">Slack 結帳</h1>
    </div>

    <div class="my-5 container justify-content-center">
      <div class="row d-flex header align-items-center text-center">
        <div class="col-12 col-md-4 mt-3">
          <div class="alert alert-secondary alert-rounded mb-0" role="alert">
            1.輸入訂單資料
          </div>
        </div>
        <div class="col-12 col-md-4 mt-3 ">
          <div
            v-if="!order.is_paid"
            class="alert alert-success alert-rounded mb-0"
            role="alert"
          >
            2.金流付款
          </div>
          <div
            v-else
            class="alert alert-secondary alert-rounded mb-0"
            role="alert"
          >
            2.金流付款
          </div>
        </div>
        <div class="col-12 col-md-4 mt-3 ">
          <div
            v-if="!order.is_paid"
            class="alert alert-secondary alert-rounded mb-0"
            role="alert"
          >
            3.完成
          </div>
          <div
            v-else
            class="alert alert-success alert-rounded mb-0 "
            role="alert"
          >
            3.完成
          </div>
        </div>
      </div>
      <form class="p-4 mt-4 shadow" @submit.prevent="payOrder">
        <table class="table">
          <thead>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">{{ item.qty }}</td>
              <td class="align-middle text-right">
                {{ Math.round(item.final_total) }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-right">總計</td>
              <td class="text-right">{{ Math.round(order.total) }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid" class="text-danger payContent"
                  >尚未付款</span
                >
                <span v-else class="text-success payContent">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right mb-3 " v-if="order.is_paid === false">
          <button class="btn btn-danger">確認付款去</button>
        </div>
      </form>
    </div>
    <!--footer-->
    <Footer />
  </div>
</template>

<script>
import $ from "jquery";
import Footer from "./views/Footer";
import Header from "./views/Header";
export default {
  data() {
    return {
      order: {
        user: {}
      },
      orderId: ""
    };
  },
  components: {
    Footer,
    Header
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.order = response.data.order;
        console.log(response);
        vm.isLoading = false;
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(url).then(response => {
        console.log(response);
        if (response.data.success) {
          vm.getOrder();
        }
        vm.isLoading = false;
      });
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
    console.log(this.orderId);
  }
};
</script>

<style>
.header {
  font-size: 20px;
}

tr {
  font-size: 18px;
}
td {
  font-size: 18px;
}
.payContent {
  font-size: 24px;
  font-weight: 700;
}
body {
  overflow-x: hidden !important;
}

@media (max-width: 375px) {
  .header {
    flex-direction: column;
  }
  .logoImg {
    display: none;
  }
}
</style>
