<template>
  <div>
    <div>
      <Header></Header>
    </div>

    <div class="marketInfo" style="overflow:hidden;">
      <div class="container-fluid mt-1">
        <div class="jumbotron jumbotron-bg-cover d-flex banner-img"></div>
      </div>
      <div class="title text-center">
        <div>store locator</div>
        <h1 class="h5">門市資訊</h1>
      </div>
      <div class="row store-wrap">
        <div class="col-lg-6 p-4 h-100 order-lg-0 order-1">
          <hr />
          <div class="d-flex ">
            <div class="store_info d-flex align-items-center p-lg-5 p-md-3">
              <div class="title  bg-warning p-2 mb-5">
                <h2 class="ml-1 align-self-start store-name ">台</h2>
                <h2 class="ml-1 align-self-start store-name ">中</h2>
                <h2 class="ml-1 align-self-start store-name ">三</h2>
                <h2 class="ml-1 align-self-start store-name ">民</h2>
                <h2 class="ml-1 align-self-start store-name ">店</h2>
              </div>

              <ul class="infomation ml-3 ">
                <li class="my-2 ">台中市中區三民路二段153號</li>
                <li class="my-2">
                  <a href="#"> <span>( 04 )</span> 2477 - 3567 </a>
                </li>
                <li class="my-2">營業時間：二~日 11:00 ~ 23:00</li>
                <li class="my-2">休息時間：周一公休</li>
                <li class="my-2">
                  全台唯一商場，交通最便利，寬敞的購物空間，讓來自各地的顧客都可以舒適的姿意購物，享有獨一無二的專屬服務。
                </li>
                <li class="my-2">
                  鄰近市區，靠近商圈，讓你逛到腳軟，買到手軟
                </li>
                <li class="my-2">
                  各大通路賣場，皆有販售 Slack
                  的產品，舉凡康氏美．屈臣氏．家樂福大賣場等等都買的到
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6 p-4 h-100 order-lg-1 order-0">
          <hr />
          <div class="store_map">
            <iframe
              id="map"
              width="95%"
              height="500px;"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14562.311780309954!2d120.663303228917!3d24.151455850322137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d6ce3bad93f%3A0xe7399af689fb0bf!2zNDAw5Y-w5Lit5biC5Lit5Y2A5LiJ5rCR6Lev5LqM5q61MTUz6Jmf!5e0!3m2!1szh-TW!2stw!4v1608623556375!5m2!1szh-TW!2stw"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>

    <div>
      <Footer></Footer>
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

<style scoped>
.banner-img {
  background-image: url(../../../../src/assets/img/report/img15.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

.title {
  font-size: 40px;
}

.title .h5 {
  font-size: 40px;
}

.infomation li {
  font-size: 22px;
}

@media (max-width: 375px) {
  .infomation li {
    font-size: 18px;
  }
}
</style>
