<template>
<div>

<div>
<Header></Header>
</div>

<div class="container-fluid aboutUs">

     <div class="title py-4 text-center">
  <h1 class="h2">About Us</h1>
        <h1 class="h2">關於我們</h1>
    </div>

    <div class="row bg-gray">
      <div class="col-md-6 col-12 order-0 order-md-1">
        <div class="about-img design"></div>
      </div>
       <div class="col-md-6 p-4 order-1 order-md-0">
        <div class="about-title">
          <h2>大眾化設計</h2>
          <!-- eslint-disable-next-line -->
          <p class="text-justify">具有斜角邊緣的桌子，賦予它獨特的手工質感、輕質風格的家具，且經久耐用，容易組裝。」
          對我們來說，好的設計就是結合了形式、功能、品質、永續發展及人人負擔得起的價格。我們稱它為「大眾化設計」，因為我們相信好的家具是為每個人所設計。
          </p>
        </div>
      </div>
    </div>
    <div class="row bg-white">
      <div class="col-md-6 col-12">
        <div class="about-img future"></div>
      </div>
       <div class="col-md-6 p-4">
        <div class="about-title">
          <h2>永續發展的未來</h2>
          <p class="text-justify">
            <!-- eslint-disable-next-line -->
            我們的世界正在迅速變化，但我們對未來感到樂觀。 我們相信，隨著時間的推移，越來越多的人可以並且將會擁有更美好的生活。要實現這一目標，需要強大的企圖心和對採取立即行動的承諾。它還意味著借由同心協力來應對我們無法單獨解決的重大挑戰。
          </p>
        </div>
      </div>
    </div>

    <div class="row bg-gray">
      <div class="col-md-6 col-12 order-0 order-md-1">
        <div class="about-img people"></div>
      </div>
       <div class="col-md-6 p-4 order-1 order-md-0">
        <div class="about-title">
          <h2>同心協力</h2>
          <p class="text-justify">同心協力是我們文化的核心。當我們相信彼此、往同一個目標邁進並一起愉快工作時，就會無堅不摧。
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
    return {


    };
  },
  components: {
    Footer,

    Header
  }, 

    
  
};
</script>