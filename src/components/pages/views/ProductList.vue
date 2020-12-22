<template>
  <div>
    <div class="middle container-fluid p-4 ">
      <div class="row">
        <div class="col-md-2 ">
          <ul class="list-group pl-0 mb-4 mb-md-0 sticky-top ">
            <h3 class="mb-3 font-weight-bold text-center text-md-left ">
              所有商品
            </h3>
            <a href="#" @click.prevent="reload()">
              <li class="list-group-item font-weight-bold ">
                所有商品
              </li></a
            >
            <a href="#" @click.prevent="getCategory('沐浴乳')">
              <li class="list-group-item font-weight-bold ">
                沐浴乳
              </li></a
            >
            <a href="#" @click.prevent="getCategory('洗髮精')">
              <li class="list-group-item font-weight-bold ">
                洗髮精
              </li></a
            >
            <a href="#" @click.prevent="getCategory('洗面乳')">
              <li class="list-group-item font-weight-bold ">
                洗面乳
              </li></a
            >
            <a href="#" @click.prevent="getCategory('肥皂')">
              <li class="list-group-item font-weight-bold ">
                肥皂
              </li></a
            >
            <a href="#" @click.prevent="getCategory('配件')">
              <li class="list-group-item font-weight-bold ">
                配件
              </li></a
            >
            <div class="input-group mt-4">
              <input
                type="text"
                class="form-control"
                v-model="searchText"
                aria-label="Dollar amount (with dot and two decimal places)"
              />
              <div class="input-group-append">
                <button @click.prevent="searchProduct(searchText)">
                  <i class="fa fa-search " aria-hidden="true"></i>
                </button>
                <div></div>
              </div>
            </div>
          </ul>
        </div>
        <CartAlert></CartAlert>
        <div class="col-md-9 pl-0">
          <loading :active.sync="isLoading"></loading>
          <div class="row mt-4">
            <div
              class="col-md-4 mb-4"
              v-for="item in productALL"
              :key="item.id"
            >
              <div class="card border-0 shadow-sm">
                <div
                  style="height: 350px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
                <div class="card-body">
                  <span class="badge badge-secondary float-right ml-2">{{
                    item.category
                  }}</span>
                  <h5 class="card-title">
                    <a href="#" class="text-dark product-title">{{
                      item.title
                    }}</a>
                  </h5>
                  <p class="card-text product-content">
                    {{ item.description }}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-baseline"
                  >
                    <div class="h5" v-if="!item.price">
                      {{ item.origin_price }} 元
                    </div>
                    <del
                      class="h5 font-weight-bold"
                      v-if="item.origin_price > 0"
                      >原價 {{ item.origin_price }} 元</del
                    >
                    <div class="h4 ml-auto" v-if="item.origin_price > 0">
                      <span class="badge badge-danger mr-1 py-2">特價 </span>
                      {{ item.price }} 元
                    </div>
                    <div class="h4 ml-auto" v-else="item.price">
                      {{ item.price }} 元
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex">
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm"
                    @click="getProduct(item.id)"
                  >
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="status.loadingItem === item.id"
                    ></i>
                    了解產品更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm ml-auto "
                    @click="addtoCart(item.id)"
                  >
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Pagination
            class="mt-5"
            :pages="pagination"
            @emitPages="getProductALL"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Pagination from "../../Pagination";
import CartAlert from "../../CartAlert";
export default {
  data() {
    return {
      searchText: "",
      productALL: [],

      pagination: {},
      cart: {},
      num: 1,

      status: {
        loadingItem: ""
      },
      isLoading: false,
      message: ""
    };
  },
  components: {
    Pagination,
    CartAlert
  },
  methods: {
    searchProduct(searchTitle) {
      const vm = this;
      console.log(searchTitle);
      if (searchTitle == "") {
        this.getProductALL();
      } else {
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
        vm.isLoading = true;
        this.$http.get(url).then(response => {
          const searchProduct = response.data.products.filter(item => {
            return item.title.match(searchTitle);
          });
          console.log(searchProduct);
          vm.productALL = searchProduct;
          vm.isLoading = false;
        });
      }
    },
    reload() {
      this.$router.go(0);
    },
    getCategory(currentcategory) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        const filterProduct = response.data.products.filter(item => {
          return item.category == currentcategory;
        });
        console.log(filterProduct);
        vm.productALL = filterProduct;
        vm.isLoading = false;
      });
    },
    getProductALL(currentPage = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${currentPage}`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.productALL = response.data.products;
        vm.pagination = response.data.pagination;
        console.log(response);
        vm.isLoading = false;
      });
    },
    getProduct(id) {
      this.$router.push(`/layout/${id}`);
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
        this.$bus.$emit(
          "cart:Number", //傳購物車的數量
          response.data.data.carts.length
        );

        vm.isLoading = false;
      });
    },
    plusNum() {
      this.num += 1;
    },
    minusNum() {
      // eslint-disable-next-line no-unused-expressions
      this.num > 1 ? (this.num -= 1) : (this.num = 1);
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
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);
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
    this.getProductALL();
    this.getCart();

    // vm.$bus.$emit('messsage:push');

    //    this.$bus.$on("IndexCategory", Category => {
    // this.getCategory(Category);
    // console.log('bus:'+Category);

    // });

    //  this.$bus.$emit('messsage:push','這是一段訊息','success');
  }
};
</script>

<style scoped>
.num-text {
  max-width: 80px;
}

.list-group a {
  font-size: 20px;
}

.list-group li:hover {
  background-color: #46a3ff;
  color: white;
}
.product-title {
  font-size: 28px;
}

.product-content {
  font-size: 20px;
}
button:hover {
  padding: 3%;
}
</style>
