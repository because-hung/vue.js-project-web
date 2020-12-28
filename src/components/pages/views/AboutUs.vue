<template>
  <div>
    <div>
      <Header></Header>
    </div>

    <div class="container-fluid aboutUs">
      <div
        class="title py-4 text-center my-5  bg-info text-white"
        data-aos="zoom-in"
      >
        <h1 class="h2">About Us 關於我們</h1>
      </div>

      <div class="row  bg-danger">
        <div
          class="col-md-6 col-12 order-md-1 about-img-one bg-success "
          data-aos="flip-up"
        ></div>
        <div class="col-md-6 p-4  order-md-0 ">
          <div class="about-title p-5  bg-warning " data-aos="fade-down-right">
            <h2>我們的初衷</h2>

            <p class="text-justify mt-3 p-3 ">
              Slack
              的創辦人洪董事長，本身有過敏性的皮膚跟頭皮，肌膚相當的敏感，他的初衷是希望能打造天然的產品，讓有跟他一樣有肌膚困擾的人能夠有好的產品
              可以使用，然後進而可以改善肌膚的問題，不受肌膚又癢又紅腫的困擾，所以投入大量的資源，尋找最適合的天然原料，用最專業的團隊，打造出好的產品
            </p>
          </div>
        </div>
      </div>
      <div class="row bg-info">
        <div
          class="col-md-6 col-12 about-img-two bg-success"
          data-aos="flip-down"
        ></div>
        <div class="col-md-6 p-4">
          <div class="about-title p-5  bg-warning" data-aos="fade-down-left">
            <h2>永續發展的未來</h2>
            <p class="text-justify mt-3 p-3">
              本團隊使用天然資源，堅持不使用化學添加物，對肌膚有更溫柔的呵護外，對環境也相當友善，Slack
              的創辦人洪董事長的堅持，秉持著永續經營的理念，以永續發展的概念在打造產品，讓這個世界能夠更好
            </p>
          </div>
        </div>
      </div>

      <div class="row bg-primary">
        <div
          class="col-md-6 col-12  order-md-1 about-img-three bg-success"
          data-aos="flip-up"
        ></div>
        <div class="col-md-6 p-4  order-md-0">
          <div class="about-title p-5 bg-warning" data-aos="fade-down-right">
            <h2>廣受名人好評推薦</h2>

            <p class="text-justify mt-3 p-3">
              Slack
              創立於2000年，到至今受到無數人喜愛，各大政商名流，名人也愛用，還沒用過的，趕快買一組試試，絕對一試成主顧，
              右圖照片為知名饒舌歌手 <strong>Riane</strong>
            </p>
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

<style lang="scss" scoped>
.about-img-one {
  background-image: url(../../../../src/assets/img/report/img2.jpg);
  background-repeat: no-repeat;
  background-position: center;
  height: 600px;
}

.about-img-two {
  background-image: url(../../../../src/assets/img/report/us2.jpg);
  background-repeat: no-repeat;
  background-position: bottom;
  height: 600px;
}

.about-img-three {
  background-image: url(../../../../src/assets/img/report/us3.jpg);
  background-repeat: no-repeat;
  background-position: center;
  height: 600px;
}
.about-title {
  h2{
  font-size: 36px;
  }
  p{
  font-size: 22px;
}

}


</style>
