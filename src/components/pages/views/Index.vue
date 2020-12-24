<template>
  <div>
    <div>
      <!--header-->
      <Header></Header>
    </div>

    <!--middle-->

    <div>
      <section
        class="container-fluid py-5 bg-light banner-one bg-skin"
        style="position: relative"
      >
        <div class="row justify-content-end text-lg-dark">
          <div
            class="col-lg-5 bg-cover backimg-one"
            data-aos="flip-left"
            style="position: absolute; top:0; bottom: 0;"
          ></div>

          <div class="container">
            <div class="row ">
              <div class="col-lg-7 content-one " data-aos="fade-up">
                <h2>什麼！！！ 別鬧吧！</h2>

                <h2>肥皂可以吃！？</h2>
                <br />
                <p class="text-justify">
                  Slack
                  專業團隊使用天然食品級的原料成份，不添加任何化學物質，生產出對肌膚.頭皮最好的清潔用品，經專業醫生
                  團隊改良及證明，產品對保濕.清潔.治療敏感性肌膚與頭皮　，十分有效
                </p>
                <p class="text-danger font-weight-bolder dangerWord">
                  本公司的產品雖然味道很香，但是請勿把肥皂當食物享用，以上純屬廣告效果
                </p>
                <br />
                <router-link to="layout">
                  <a
                    href="#"
                    class="btn btn-hover btn-info mt-5"
                    data-aos="fade-down-left"
                    >查看更多商品</a
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="container-fluid py-5 bg-light banner-two bg-skin "
        style="position: relative;"
      >
        <div class="row">
          <div
            class="col-lg-5 bg-cover backimg-two "
            data-aos="flip-left"
            style="
        position: absolute;top:0;bottom: 0;

        "
          ></div>
        </div>
        <div class="container">
          <div class="row justify-content-end text-lg-dark ">
            <div class="col-lg-7" data-aos="fade-up">
              <h2>
                知名影后 <strong class="text-danger">艾蜜兒</strong> 強力推薦
              </h2>
              <br />
              <p class="text-justify">
                知名電影影星艾蜜兒是 Slack的大客戶，長期使用 Slack的產品
                ，艾蜜兒本身愛用之外，也推薦給家人朋友使用，Slack
                的產品深受親朋好友的喜愛，艾蜜兒本人表示很注重保養跟養生，
                本公司的產品天然無添加的配方，淡淡花草清香，深得艾蜜兒的心
              </p>

              <p>
                即日期輸入艾蜜兒提供的優惠折扣碼，<strong class="text-danger"
                  >即可享 88 折優惠</strong
                >
              </p>
              <br />

              <div class="text-right mt-5">
                <router-link to="layout">
                  <a
                    href="#"
                    class="btn btn-hover btn-info text-right"
                    data-aos="flip-down"
                    >查看更多商品</a
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-3 banner-three ">
        <div class="image-news container-fluid ">
          <div
            class="middle-title  text-center d-flex justify-content-center p-4"
          >
            <div class="line-box align-self-center mx-3 mb-3"></div>
            <h2 class="middle-title-text font-weight-bold">
              Slack 的初衷 <br />
              三大訴求缺一不可
            </h2>
            <div class="line-box align-self-center mx-3 mb-3"></div>
          </div>
          <div class="image-news-img row">
            <div class="col-lg-4 ">
              <div class="card mx-auto" style="width: 70%;">
                <img
                  src="../../../../src/assets/img/report/index-c1.jpg"
                  class="card-img-top p-4"
                  alt="..."
                />
                <div class="card-body">
                  <h2 class="text-center">天然食品級的材料</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-4  ">
              <div class="card mx-auto" style="width: 55%;">
                <img
                  src="../../../../src/assets/img/report/index-c2.png"
                  class="card-img-top p-4"
                  alt="..."
                />
                <div class="card-body ">
                  <h2 class="text-center">無化學添加物</h2>
                </div>
              </div>
            </div>
            <div class=" col-lg-4 ">
              <div class="card mx-auto" style="width: 80%;">
                <img
                  src="../../../../src/assets/img/report/index-c5.jpg"
                  class="card-img-top p-4"
                  alt="..."
                />
                <div class="card-body">
                  <h2 class="text-center ">專業醫生團隊保證</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="mt-3 banner-four bg-warning ">
      <div class="image-news">
        <div
          class="middle-title  text-center d-flex justify-content-center p-4"
        >
          <div class="line-box align-self-center mx-3 mb-3"></div>
          <h2 class="middle-title-text font-weight-bold">
            最新消息
          </h2>
          <div class="line-box align-self-center mx-3 mb-3"></div>
        </div>

        <div
          class="jumbotron jumbotron-fluid jumbotron-bg coupon text-white"
          data-aos="zoom-in"
        >
          <div class="bg-lighter p-3">
            <h3 class="mt-2">看過來看過來 價錢打折 買到骨折</h3>
            <br />
            <h3 class="text-center mt-2">Slack 周年慶 全館指定商品 特價優惠</h3>
            <br />
            <h3 class="text-right mt-5">即日期申辦加入會員 即可享9折優惠</h3>
            <div class="text-right mt-4">
              <router-link to="layout">
                <a href="#" class="btn btn-info text-right">查看更多商品</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div>
      <div
        class="container-fluid bg-danger text-white p-3 font-weight-bold text-center "
        style="font-size:30px;"
        data-aos="zoom-up"
      >
        熱門精選商品
      </div>
      <Swiper></Swiper>
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
import Swiper from "../../Swiper";

export default {
  data() {
    return {};
  },
  components: {
    Footer,
    Header,
    Swiper
  }
};
</script>

<style scoped>
.backimg-one {
  background-image: url(../../../../src/assets/img/report/index1.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.backimg-two {
  background-image: url(../../../../src/assets/img/report/index2.jpg);
  background-repeat: no-repeat;
}

.banner-one h2 {
  font-size: 50px;
}

.banner-one p {
  font-size: 24px;
}

.banner-two h2 {
  font-size: 50px;
}

.banner-two p {
  font-size: 24px;
}

.banner-three h2 {
  font-size: 40px;
  font-weight: 700;
}

.banner-four h2 {
  font-size: 40px;
  font-weight: 700;
}

.coupon h3 {
  font-size: 60px;
  font-weight: 700;
}

.coupon {
  background-image: url(../../../../src/assets/img/report/us6.jpg);

  height: 500px;
}

.middle-title-text {
  font-size: 40px;
}

.image-news img {
  border-radius: 50%;
}

.image-news .card {
  border: 0;
}

.image-news h4 {
  font-weight: 600;
  font-size: 28px;
}

.image-news p {
  font-size: 24px;
}

.line-box {
  width: 20%;
  height: 2px;
  background-color: gray;
}
.btn-hover:hover {
  padding: 3%;
  background-color: #7373b9;
}

@media (max-width: 992px) {
  .dangerWord {
    color: black !important;
  }

  .coupon h3 {
    font-size: 40px;
  }

  .banner-four h2 {
    font-size: 32px;
  }

  .backimg-one {
    background-position: center center;
  }
  .backimg-two {
    background-position: center center;
  }

  .banner-one h2 {
    font-size: 36px;
  }

  .banner-one p {
    font-size: 24px;
  }

  .banner-two h2 {
    font-size: 40px;
  }

  .banner-two p {
    font-size: 24px;
  }
}

@media (max-width: 569px) {
  .banner-one p {
    font-size: 16px;
  }

  .banner-two p {
    font-size: 16px;
  }
}
</style>
