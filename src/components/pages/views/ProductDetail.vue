<template>
    <div>
        
<div>
<Header :cartNumber="CartNumber"></Header>
</div>
<CartAlert></CartAlert>

<!-- Middle -->

<div class="container">
<div class="row ">
       
        <div class="col-md-5  ">
          <div class="mt-4">
            <a href="#" class="badge badge-warning p-1">{{product.category}}</a>
            <div class="my-4">
              <h1 class="h2">{{product.title}}</h1>
              <div class="d-flex ">
               
                <del class=" font-weight-bold mr-5"  style="font-size:26px;" v-if="product.origin_price > 0">
                  原價 {{product.origin_price | currency}}</del>
                   <span class=" text-danger font-weight-bold"  style="font-size:32px;" v-if="product.origin_price > 0">現在只要 {{product.price | currency}}</span>
                   <span class=" font-weight-bold"  style="font-size:32px;" v-else>{{product.price | currency}}</span>
              </div>
              
            </div>
            <hr>

           
                
            <div class="footer mt-3 d-flex justify-content-between">

            <div class="btn-group border border-secondary mr-2 selectNum" role="group">
                <button type="button" class="btn btn-white" @click="minusNum">-</button>
                <input type="text" class="btn btn-white num-text" v-model.number="num">
                <span class="mt-2">{{ product.unit }}</span>
                <button type="button" class="btn btn-white" @click="plusNum">+</button>

                
                </div>

                  <div class="text-muted text-nowrap mr-3" style="font-size:22px;">
                    小計 <strong v-if="num * product.price > 0">{{ num * product.price }}</strong> 元
                  </div>
                
            </div>
             <div class="mt-3 text-right">
              <button
                    type="button"
                    class="btn btn-primary "
                    @click="addtoCart(product.id, product.num)"
                  >
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="product.id === status.loadingItem"
                    ></i>
                    加到購物車
                  </button>
             </div>
         
            <div class="my-4">
              <h5>商品描述</h5>
              <p style="line-height:2">{{product.description}}</p>
            </div>
            <div class="my-4">
              <h5>商品資訊</h5>
              <ul class="pl-4">
              
              </ul>
            </div>
          </div>
        </div>

         <div class="col-md-7 ">
       <img class="productImg img-fluid mt-4" :src="product.imageUrl" alt="">
        </div>
      </div>



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

export default {
    
  data() {
    return {
        productId:'',
 product: {},
 CartNumber:0,
     status: {
        loadingItem: ""
      },
      isLoading: false,
      num:1
    };
  },
  components: {
    Footer,
    CartAlert,
    Header
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
       vm.$bus.$emit("cart:message","加入購物車成功","success");
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
      this.num > 1 ? this.num -= 1 : this.num = 1;
    },
  },
 
created() {
    this.productId = this.$route.params.id;
    this.getProduct();
    this.getCart();
    

  
}

    
  
};
</script>
<style scoped>
.badge{
    width:50px;
   
}


</style>