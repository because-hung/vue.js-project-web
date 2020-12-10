<template>
  <div>
    <div>
      <!--header-->
      <Header></Header>
    </div>

    <!--middle-->

    <!--footer-->
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  data() {
    return {};
  },
  components: {
    Footer,
    Header
  }
};
</script>
