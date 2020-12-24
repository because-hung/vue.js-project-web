<template>
  <div>
    <div>
      <Header :cartNumber="CartNumber"></Header>
    </div>
    <CartAlert></CartAlert>

    <!-- Middle -->

    <div class="container">
      <div class="row ">
        <div class="col-lg-5  order-1 order-lg-0">
          <div class="mt-4">
            <a href="#" class="badge badge-warning p-2">{{
              product.category
            }}</a>
            <div class="my-4">
              <h1 class="h2">{{ product.title }}</h1>
              <div class="d-flex ">
                <del
                  class=" font-weight-bold mr-5"
                  style="font-size:26px;"
                  v-if="product.origin_price > 0"
                >
                  原價 {{ product.origin_price | currency }}</del
                >
                <span
                  class=" text-danger font-weight-bold"
                  style="font-size:32px;"
                  v-if="product.origin_price > 0"
                  >現在只要 {{ product.price | currency }}</span
                >
                <span
                  class=" font-weight-bold"
                  style="font-size:32px;"
                  v-else
                  >{{ product.price | currency }}</span
                >
              </div>
            </div>
            <hr />

            <div class="footer mt-5 d-flex justify-content-between ">
              <div
                class="btn-group border border-secondary mr-2 selectNum"
                role="group"
              >
                <button type="button" class="btn btn-white" @click="minusNum">
                  -
                </button>
                <input
                  type="text"
                  class="btn btn-white num-text "
                  v-model.number="num"
                />
                <span class="mt-2">{{ product.unit }}</span>
                <button type="button" class="btn btn-white" @click="plusNum">
                  +
                </button>
              </div>

              <div class="text-muted text-nowrap mr-3" style="font-size:22px;">
                小計
                <strong v-if="num * product.price > 0">{{
                  num * product.price
                }}</strong>
                元
              </div>
            </div>
            <div class="mt-5 text-right ">
              <button
                type="button"
                class="btn btn-primary p-3"
                @click="addtoCart(product.id, num)"
              >
                <i
                  class="fas fa-spinner fa-spin"
                  v-if="product.id === status.loadingItem"
                ></i>
                加到購物車
              </button>
            </div>

            <div class="my-5">
              <h5 class="h3 bg-warning p-2 font-weight-bold text-center">
                商品資訊
              </h5>
              <p class="product-content mt-4 text-justify">
                {{ product.description }}
              </p>
            </div>
            <div class="my-4">
              <p class="product-content text-justify">{{ product.content }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-7 order-0 order-lg-1">
          <img
            class="productImg img-fluid mt-4"
            :src="product.imageUrl"
            alt=""
          />
        </div>
      </div>
    </div>

    <div>
      <div
        class="container-fluid bg-warning p-3 font-weight-bold text-center mt-5 hotProduct"
      >
        買了此商品的人，也買了...
      </div>
      <Swiper></Swiper>
    </div>

    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Header from "./Header";
import Footer from "./Footer";
import CartAlert from "../../CartAlert";
import Swiper from "../../Swiper";

export default {
  data() {
    return {
      productId: "",
      product: {},
      CartNumber: 0,

      status: {
        loadingItem: ""
      },
      isLoading: false,
      num: 1
    };
  },
  components: {
    Footer,
    CartAlert,
    Header,
    Swiper
  },
  methods: {
    getProduct(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.productId}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then(response => {
        vm.product = response.data.product;

        $("#productModal").modal("show");
        console.log(response);

        vm.status.loadingItem = "";
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(url, { data: cart }).then(response => {
        console.log(response);
        vm.status.loadingItem = "";
        vm.getCart();
        vm.$bus.$emit("cart:message", "加入購物車成功", "success");
      });
    },

    getCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        // vm.productALL = response.data.productALL;
        vm.cart = response.data.data;
        console.log(response);
        vm.CartNumber = response.data.data.carts.length;

        vm.isLoading = false;
      });
    },
    plusNum() {
      this.num += 1;
    },
    minusNum() {
      // eslint-disable-next-line no-unused-expressions
      this.num > 1 ? (this.num -= 1) : (this.num = 1);
    }
  },

  created() {
    this.productId = this.$route.params.id;
    this.getProduct();
    this.getCart();
  }
};
</script>
<style scoped>
.badge {
  width: 60px;
}

.product-content {
  font-size: 26px;
}
.hotProduct {
  font-size: 30px;
}
@media (max-width: 375px) {
  .hotProduct {
    font-size: 26px;
  }
}
</style>
