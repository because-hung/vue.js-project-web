<template>
  <div>
    <div>
      <!--header-->
      <Header></Header>
    </div>

    <!--middle-->

    <div>
      <section class="container-fluid bg-light banner-one bg-skin">
        <div class="row text-lg-dark px-lg-5">
          <div
            class="col-12 col-lg-7 order-2 order-lg-1 pt-sm-5 d-flex flex-column justify-content-center content-one px-sm-5 pb-4"
            data-aos="fade-up"
          >
            <h2>什麼！！！ 肥皂居然可以吃！？</h2>
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
            <router-link to="product">
              <a
                href="#"
                class="btn btn-hover btn-info mt-5"
                data-aos="fade-down-left"
                >查看更多商品</a
              >
            </router-link>
          </div>
          <div
            class="col-12 col-lg-5 order-1 order-lg-2 bg-cover backimg-one"
            data-aos="flip-left"
          ></div>
        </div>
      </section>
      <section class="container-fluid py-5 bg-light banner-two bg-skin ">
        <div class="row px-lg-5">
          <div
            class="col-12 col-lg-5 bg-cover backimg-two "
            data-aos="flip-left"
          ></div>

          <div class="col-12 col-lg-7 pt-5 px-sm-5" data-aos="fade-up">
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
              <router-link to="product">
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
              <div class="card mx-auto food">
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
              <div class="card mx-auto chemical">
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
              <div class="card mx-auto doctor">
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
            <h3 class="text-md-center mt-2">
              Slack 周年慶 全館指定商品 特價優惠
            </h3>
            <br />
            <h3 class="text-md-right mt-5">即日期申辦加入會員 即可享9折優惠</h3>
            <div class="text-right mt-4">
              <router-link to="product">
                <a href="#" class="btn btn-info text-right">查看更多商品</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div>
      <div
        class="container-fluid hotProduct bg-danger text-white p-3 font-weight-bold text-center "
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
import Header from "./Header"
import Footer from "./Footer"
import Swiper from "../../Swiper"

export default {
  data() {
    return {}
  },
  components: {
    Footer,
    Header,
    Swiper,
  },
  created() {
    document.title = "slack - 照顧你的每一寸肌膚"
  },
}
</script>

<style lang="scss" scoped>
.banner-one {
  h2 {
    font-size: 36px;
  }
  p {
    font-size: 20px;
  }
}
.backimg-one {
  width: 500px;
  height: 450px;
  background-image: url(../../../../src/assets/img/report/index1.png);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}

.banner-two {
  h2 {
    font-size: 36px;
  }
  p {
    font-size: 20px;
  }
}
.backimg-two {
  width: 500px;
  height: 500px;
  background-image: url(../../../../src/assets/img/report/index2.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.banner-three h2 {
  font-size: 36px;
  font-weight: 700;
}

.banner-four h2 {
  font-size: 36px;
  font-weight: 700;
}

.coupon {
  background-image: url(../../../../src/assets/img/report/us6.jpg);
  height: 500px;
  h3 {
    font-size: 48px;
    font-weight: 700;
  }
}

.middle-title-text {
  font-size: 40px;
}

.image-news {
  img {
    border-radius: 50%;
  }
  .card {
    border: 0;
  }
}

.food {
  width: 70%;
}

.chemical {
  width: 55%;
}
.doctor {
  width: 80%;
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

.hotProduct {
  font-size: 30px;
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

  .banner-one {
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 24px;
    }
  }

  .banner-two {
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 24px;
    }
  }
}

@media (max-width: 569px) {
  .banner-one p {
    font-size: 16px;
  }

  .banner-two p {
    font-size: 16px;
  }
  .coupon h3 {
    font-size: 32px;
  }
}
</style>
