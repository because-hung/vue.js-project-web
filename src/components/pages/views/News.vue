<template>
  <div>
    <!--header-->
    <div>
      <Header></Header>
    </div>

    <!--middle-->
    <div class="container-fluid aboutUs">
      <div class="title py-4 text-center my-5  bg-primary text-white">
        <h1 class="h2" data-aos="zoom-out-down">最新消息</h1>
      </div>

      <div class=" news-content">
        <div class="row  ">
          <div
            class="col-lg-6 col-12 order-lg-1 about-img-one"
            data-aos="fade-left"
          ></div>
          <div class="col-lg-6 p-4  order-lg-0 ">
            <div class="about-title p-5">
              <h2>
                知名影后
                <strong class="text-danger" data-aos="zoom-in-up"
                  >艾蜜兒</strong
                >
                強力推薦
              </h2>

              <p class="text-justify mt-5 p-3 ">
                知名電影影星 <strong class="text-danger">艾蜜兒</strong> 是
                Slack的大客戶，長期使用 Slack的產品
                ，艾蜜兒本身愛用之外，也推薦給家人朋友使用，Slack
                的產品深受親朋好友的喜愛，艾蜜兒本人表示很注重保養跟養生，
                本公司的產品天然無添加的配方，淡淡花草清香，深得艾蜜兒的心，
              </p>
              <p class="text-justify mt-3 p-3 ">
                即日期輸入艾蜜兒提供的優惠折扣碼，即可享
                <strong class="text-danger"> 88 折優惠 </strong>
              </p>
              <div class="text-right mt-5">
                <router-link to="layout">
                  <a
                    href="#"
                    class="btn btn-warning p-3 font-weight-bold"
                    data-aos="fade-up-right"
                    >點我購物去</a
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row  ">
          <div
            class="col-lg-6 col-12 order-lg-1 about-img-two"
            data-aos="zoom-in-left"
          ></div>
          <div class="col-lg-6 p-4  order-lg-0 ">
            <div class="about-title p-5" data-aos="zoom-in-right">
              <h2 class="bg-warning p-2 ">新品上市</h2>

              <p class="text-justify mt-5 p-3 ">
                這款 MANxMYTH
                竹炭深層潔淨洗面乳，由專業團隊研發而成，竹炭加上奈米的技術，可以把深層的汙垢．角質徹底潔淨乾淨，還給肌膚一個清白，加上強大的抗汗去油的能力
          
              </p>

               <p class="text-justify mt-5 p-3 ">
          根本專為男人而打造的，讓你從阿宅變型男，本產品於下個月就會上市，各大通路都買的到
    
              </p>

                  <p class="text-justify mt-5 p-3 ">
    盡請期待，Coming Soon....
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div class="row  ">
          <div
            class="col-lg-6 col-12 order-lg-1 about-img-three"
            data-aos="fade-down"
          ></div>
          <div class="col-lg-6 p-4  order-lg-0 ">
            <div class="about-title p-5" data-aos="fade-up">
              <h2>
                Slack 周年慶 
              </h2>
<h2>  全館指定商品  <strong class="text-white bg-danger p-2 "> 特價優惠</strong></h2>
              <p class="text-justify mt-5 p-3 ">
                Slack
                周年慶，全館指定商品特價優惠，即日期申辦加入會員，即可再享9折優惠，讓你買到手軟，打折打到骨折
              </p>
              <div class="text-right mt-5">
                <router-link to="layout">
                  <a
                    href="#"
                    class="btn btn-warning p-3 font-weight-bold"
                    data-aos="flip-left"
                    >點我購物去</a
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--footer-->
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
.about-img-one {
  background-image: url(../../../../src/assets/img/report/index2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
}

.about-img-two {
  background-image: url(../../../../src/assets/img/report/img10.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
}

.about-img-three {
  background-image: url(../../../../src/assets/img/report/news3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 600px;
}

.about-title h2 {
  font-size: 44px;
}

.about-title p {
  font-size: 30px;
}
strong{
  line-height:2;
}

@media (max-width:375px){

  .about-title h2 {
  font-size: 32px;
}

.about-title p {
  font-size: 18px;
}




}

</style>
