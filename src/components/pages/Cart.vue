<template>
  <div>
    <div>
      <Header></Header>
    </div>

    <!--cart-->

    <div class="container">
      <div class="logo-header mt-5 d-flex justify-content-center ">
        <img src="../../../src/assets/img/logo2.png" alt="" class="logoImg" />
        <h1 class=" text-secondary ml-3">Slack 結帳</h1>
      </div>
      <section class="form-row align-items-center text-center mt-5">
        <div class="col-12 col-md-4 ">
          <div class="alert alert-success alert-rounded mb-0" role="alert">
            1.輸入訂單資料
          </div>
        </div>
        <div class="col-12 col-md-4 mt-3 mt-md-0">
          <div class="alert alert-secondary alert-rounded mb-0" role="alert">
            2.金流付款
          </div>
        </div>
        <div class="col-12 col-md-4 mt-3 mt-md-0">
          <div class="alert alert-secondary alert-rounded mb-0" role="alert">
            3.完成
          </div>
        </div>
      </section>
    </div>

    <div class="middle" style="overflow:hidden;">
      <div class="row ">
        <div class="col-lg-6 col-12 shadow mt-3 product ">
          <table
            class="table mt-4 mx-auto"
            v-if="cart.total >= 1"
            style="width:85%"
          >
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>產品名稱</th>
                <th>數量</th>
                <th class="text-right">售價</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts">
                <td class="text-right">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm "
                    @click="removeCart(item.id)"
                  >
                    <i class="far fa-trash-alt "></i>
                  </button>
                </td>

                <div>
                  <div
                    class="order-img mx-auto"
                    :style="{
                      backgroundImage: `url(${item.product.imageUrl})`
                    }"
                  ></div>
                </div>
                <td>
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td class="text-center">{{ item.qty }}</td>

                <td class="text-right">{{ Math.round(item.final_total) }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">總計</td>
                <td class="text-center">{{ Sum }}</td>
                <td class="text-right">{{ cart.total }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-right text-success">折扣價</td>
                <td></td>
                <td class="text-success text-right">
                  {{ Math.round(cart.final_total) }}
                </td>
              </tr>
            </tfoot>
          </table>
          <div
            class="input-group mb-5 mt-2 input-group-sm ml-auto"
            v-if="cart.total >= 1"
          >
            <input
              type="text"
              class="form-control"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append ">
              <button
                class="btn btn-danger"
                type="button"
                @click="addCouponCode"
              >
                套用優惠碼
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-12 mt-3 shadow ">
          <div class=" row justify-content-center  justify-content-lg-start">
            <form @submit.prevent="createOrder" style="width:70%;">
              <div class="form-group">
                <label for="useremail">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="useremail"
                  v-validate="'required|email'"
                  :class="{ 'is-invalid': errors.has('email') }"
                  v-model="form.user.email"
                  placeholder="請輸入 Email"
                />
                <span class="text-danger" v-if="errors.has('email')">
                  {{ errors.first("email") }}
                </span>
              </div>

              <div class="form-group">
                <label for="username">收件人姓名</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="username"
                  :class="{ 'is-invalid': errors.has('name') }"
                  v-model="form.user.name"
                  v-validate="'required'"
                  placeholder="輸入姓名"
                />
                <span class="text-danger" v-if="errors.has('name')"
                  >姓名必須輸入</span
                >
              </div>

              <div class="form-group">
                <label for="usertel">收件人電話</label>
                <input
                  type="tel"
                  class="form-control"
                  name="tel"
                  :class="{ 'is-invalid': errors.has('tel') }"
                  id="usertel"
                  v-model="form.user.tel"
                  v-validate="'required'"
                  placeholder="請輸入電話"
                />
                <span class="text-danger" v-if="errors.has('tel')"
                  >電話欄位不得留空</span
                >
              </div>

              <div class="form-group">
                <label for="useraddress">收件人地址</label>
                <input
                  type="text"
                  class="form-control"
                  name="address"
                  :class="{ 'is-invalid': errors.has('address') }"
                  id="useraddress"
                  v-model="form.user.address"
                  v-validate="'required'"
                  placeholder="請輸入地址"
                />
                <span class="text-danger" v-if="errors.has('address')"
                  >地址欄位不得留空</span
                >
              </div>

              <div class="form-group">
                <label for="useraddress">留言</label>
                <textarea
                  name=""
                  id=""
                  class="form-control"
                  cols="30"
                  rows="10"
                  v-model="form.message"
                ></textarea>
              </div>
              <div class="text-right">
                <button class="btn btn-danger">送出訂單</button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
      props: ["cartNumber"],
      cart: {},
      cartLen: "",
      Sum: 0,
      Num: 0,
      status: {
        loadingItem: ""
      },
      isLoading: false,
      coupon_code: "",
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      }
    };
  },
  components: {
    Footer,
    Header
  },
  methods: {
    getCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        // vm.products = response.data.products;
        vm.cart = response.data.data;
        vm.cartLen = response.data.data.carts.length;

        if (vm.Num == 0) {
          for (var i = 0; i < vm.cartLen; i++) {
            vm.Sum += response.data.data.carts[i].qty;
          }
        }
        console.log(response);

        vm.isLoading = false;
        vm.Num = 1;
      });
    },

    removeCart(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then(response => {
        vm.getCart();
        console.log(response);
        vm.isLoading = false;
        this.$router.go(0);
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code
      };
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then(response => {
        vm.getCart();

        console.log(response);
        vm.isLoading = false;
      });
    },
    createOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      // vm.isLoading = true;
      this.$validator.validate().then(result => {
        if (result) {
          this.$http.post(url, { data: order }).then(response => {
            console.log("訂單已建立", response);
            if (response.data.success) {
              vm.$router.push(`/pay/${response.data.orderId}`);
            }
            // vm.getCart();
            // vm.isLoading = false;
          });
        } else {
          console.log("欄位不完整");
        }
      });
    }
  },

  created() {
    this.getCart();
  }
};
</script>

<style scoped>
.order-img {
  background-position: center center;
  background-size: cover;
  width: 150px;
  height: 120px;
}
.alert {
  font-size: 20px;
}
form {
  padding: 3%;
  border: 3px solid red;
  font-size: 18px;
}

tr {
  font-size: 18px;
}
td {
  font-size: 18px;
}

.product {
  margin-left: 4%;
}
.input-group {
  width: 30%;
  margin-right: 8%;
}

@media (max-width: 375px) {
  .product {
    margin-left: 0;
  }
  .order-img {
    display: none;
  }

  .input-group {
    width: 70%;
  }
  .logoImg {
    display: none;
  }
}
</style>
