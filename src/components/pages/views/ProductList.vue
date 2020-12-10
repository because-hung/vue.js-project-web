<template>
    <div>
       <div class="middle container-fluid p-4 ">
    <div class="row">
        <div class="col-md-2 ">
           <h3 class="mb-3 font-weight-bold text-center text-md-left ">所有商品</h3>
           <ul class="list-group pl-0 mb-4 mb-md-0 sticky-top">
            <li class="list-group-item font-weight-bold "><a href="#" @click.prevent="getCategory('沐浴乳')"
              >沐浴乳</a></li>
            <li class="list-group-item font-weight-bold "><a href="#"  @click.prevent="getCategory('洗髮精')">洗髮精</a></li>
            <li class="list-group-item font-weight-bold "><a href="#" @click.prevent="getCategory('洗面乳')">洗面乳</a></li>
            <li class="list-group-item font-weight-bold "><a href="#" @click.prevent="getCategory('肥皂')">肥皂</a></li>
            <li class="list-group-item font-weight-bold "><a href="#" @click.prevent="getCategory('配件')">配件</a></li>
       <div class="input-group mt-4">
  <input type="text" class="form-control" v-model="searchText" aria-label="Dollar amount (with dot and two decimal places)">
  <div class="input-group-append">
<button @click.prevent="searchProduct(searchText)" ><i class="fa fa-search " aria-hidden="true"></i></button>

  </div>
</div>
          </ul>

   
        </div>
        <div class="col-md-9 pl-0">

               
          <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in productALL" :key="item.id">
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
              <a href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <p class="card-text">{{ item.content }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!item.price">
                {{ item.origin_price }} 元
              </div>
              <del class="h5 font-weight-bold" v-if="item.origin_price > 0"
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
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click="addtoCart(item.id)"
            >
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>






<!--Modal-->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ product.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="" />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">
                {{ product.description }}
              </footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <del class="h6" v-if="product.price"
                >原價 {{ product.origin_price }} 元</del
              >
              <div class="h4" v-if="product.price">
                現在只要 {{ product.price }} 元
              </div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(product.id, product.num)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="product.id === status.loadingItem"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>

    <Pagination class="mt-5" :pages="pagination" @emitPages="getProductALL"></Pagination>




        </div>
    </div>

</div>  
    </div>
</template>

<script>
import $ from "jquery";
import Pagination from "../../Pagination";

export default {
  data() {
    return {
      searchText:'',
      productALL: [],
      product: {},
      pagination: {},
      cart: {},
      status: {
        loadingItem: ""
      },
      isLoading: false,
        message: ""
   };
  },
  components: {
    Pagination,
  },
  methods: {
    searchProduct(searchTitle) {
  const vm = this;
  console.log(searchTitle);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
       const searchProduct = response.data.products.filter(item =>{
          return item.title.match(searchTitle);
        }
      );
      console.log(searchProduct);
       vm.productALL = searchProduct;
        vm.isLoading = false;
      });
    },
    getCategory(currentcategory) {
       const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
       const filterProduct = response.data.products.filter(item =>{
            console.log(item);
          return item.category == currentcategory;
        }
      );
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
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;

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
        $("#productModal").modal("hide");
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
  }
};
</script>
