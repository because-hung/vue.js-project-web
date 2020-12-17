<template>
  <div>
    <div>
      <!--header-->
      <Header :cartNumber="CartNumber"></Header>
    </div>

    <!--middle-->
    <div>
      <ProductList></ProductList>
    </div>
    <!--footer-->
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
export default {
  data() {
    return {
CartNumber:0

    };
  },
  components: {
    Footer,
    ProductList,
    Header
  }, 
  created() {
    const vm = this;
    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    vm.$bus.$on("cart:Number", (CartNumber) => {
      console.log(CartNumber);
    return vm.CartNumber = CartNumber ;
    });
    // vm.$bus.$emit('messsage:push');
  }
 
  
};
</script>
