<template>
  <div>
    <div>
      <!--header-->
      <Header></Header>
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
    return {};
  },
  components: {
    Footer,
    ProductList,
    Header
  }
};
</script>
