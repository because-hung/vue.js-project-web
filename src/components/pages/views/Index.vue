<template>
  <div>
    <div>
      <!--header-->
      <Header></Header>
    </div>

    <!--middle-->

    <div>
  

  <section class="container-fluid py-5 bg-light" style="position: relative">


            <div class="row justify-content-end text-md-dark">

                <div class="col-md-5 bg-cover backimg-one  "
                    style="position: absolute; top:0; bottom: 0;">
                </div>

                 <div class="container">
                    <div class="row ">
                        <div class="col-md-7">
    
                            <h2>title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt porro pariatur cum, neque
                                quod,
                                harum nam inventore officia nisi sapiente quas dolores, repellendus numquam! Facilis
                                officiis
                                quia rerum magni provident!</p>
                            <dl class="row">
                                <dt class="col-sm-3">Description lists</dt>
                                <dd class="col-sm-9">A description list is perfect for defining terms.</dd>
    
                                <dt class="col-sm-3">Euismod</dt>
                                <dd class="col-sm-9">
                                    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                                    <p>Donec id elit non mi porta gravida at eget metus.</p>
                                </dd>
    
                                <dt class="col-sm-3">Malesuada porta</dt>
                                <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
    
                                <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
                                <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                                    nibh, ut
                                    fermentum massa justo sit amet risus.</dd>
    
                                <dt class="col-sm-3">Nesting</dt>
                                <dd class="col-sm-9">
                                    <dl class="row">
                                        <dt class="col-sm-4">Nested definition list</dt>
                                        <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
                                            nunc.
                                        </dd>
                                    </dl>
                                </dd>
                            </dl>
                        </div>
                 </div>
                


                </div>


            </div>
       
    </section>
   <section class="container-fluid py-5 bg-light " style="position: relative;">
        <div class="row">
            <div class="col-md-5 bg-cover backimg-two " style="
        position: absolute;top:0;bottom: 0;

        "></div>
        </div>
        <div class="container">
            <div class="row justify-content-end text-md-dark">
                <div class="col-md-7">
                    <h3>錯密法式餐廳</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, cum blanditiis id qui
                        repellat dolore nam quasi. Tempora ratione quod soluta ipsam. Perspiciatis quae quo fuga dicta
                        aliquid saepe sint, non cumque! Vero iste nesciunt labore esse odit earum nemo saepe inventore,
                        voluptas similique quo? Totam eum voluptatum tempore sed.</p>
                    <a href="#" class="btn btn-outline-info">解鎖更多</a>
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <h4>我是標題</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, quisquam pariatur
                                dolore nesciunt beatae numquam alias quam quos error laborum repellendus non natus
                                mollitia dolorem nostrum, commodi quo dolorum! Reprehenderit.</p>
                        </div>
                        <div class="col-md-6">
                            <h4>我是標題</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, quisquam pariatur
                                dolore nesciunt beatae numquam alias quam quos error laborum repellendus non natus
                                mollitia dolorem nostrum, commodi quo dolorum! Reprehenderit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>


    <section>
    
     <div class="image-news container-fluid ">
                <div class="middle-title  text-center d-flex justify-content-center p-4">
                    <div class="line-box align-self-center mx-3 mb-3"></div>
                    <p class="middle-title-text font-weight-bold"> 客人總是在詢問 <br>好吃的秘訣什麼
                    </p>
                    <div class="line-box align-self-center mx-3 mb-3"></div>
                </div>
                <div class="image-news-img row">
                    <div class="col-lg-4 col-md-6">
                        <div class="card mx-auto" style="width: 70%;">
                            <img src="../../../../src/assets/img/report/index-c1.jpg" class="card-img-top p-4" alt="...">
                            <div class="card-body">
                                <h4 class="text-center">台灣本土蔬菜</h4>
                                <p class="card-text mt-4 ">Some quick example text to build on the card title and
                                    make up
                                    the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 ">
                        <div class="card mx-auto" style="width: 55%;">
                            <img src="../../../../src/assets/img/report/index-c2.png" class="card-img-top p-4" alt="...">
                            <div class="card-body ">
                                <h4 class="text-center">專業米其林廚師</h4>
                                <p class="card-text mt-4">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 col-md-6">
                        <div class="card mx-auto" style="width: 80%;">
                            <img src="../../../../src/assets/img/report/index-c5.jpg" class="card-img-top p-4" alt="...">
                            <div class="card-body">
                                <h4 class="text-center ">對於專業不能退讓</h4>
                                <p class="card-text mt-4">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
    
    </section>

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

.backimg-one{ 
background-image: url(../../../../src/assets/img/report/index1.png);

background-repeat:no-repeat;
background-size:cover;
}
.backimg-two{ 
background-image: url(../../../../src/assets/img/report/index2.jpg);
}



.middle-title-text{
    font-size: 40px;
} 

.image-news img{
    border-radius: 50%;
   
} 

.image-news .card{

    border: 0;
}

.image-news h4{
    font-weight: 600;
     font-size: 28px;
}

.image-news p{

    font-size: 24px;
}




.line-box {
   width: 20%;
    height: 2px;
    background-color: gray;
   

}


</style>