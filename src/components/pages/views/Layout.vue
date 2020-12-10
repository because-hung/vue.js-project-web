<template>
<div>

  

   <!--header-->
 
    <nav class="navbar navbar-expand-lg " style="background-color:#dcdcdc;">
        <a class="navbar-brand" href="#"><img src="../../../../src/assets/img/logo3.png"  alt=""></a>
        
         
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">首頁 <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link" href="#">所有商品</a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link" href="#">沐浴乳</a>
            </li>
            <li class="nav-item mx-1">
                <a class="nav-link" href="#">洗髮精</a>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link" href="#">洗面乳</a>
              </li>
              <li class="nav-item mx-1" >
                <a class="nav-link" href="#">肥皂</a>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link" href="#">配件</a>
              </li>
          
          
          </ul>
        </div>

        <ul class="list-inline mb-0">
            <li class="list-inline-item">
            <router-link to="/login">
             <div class="btn btn-outline-primary rounded-circle">
            <i class="fas fa-user-circle"></i>
         </div>
            </router-link>
        
            </li>
            <li class="list-inline-item">
              <button class="btn btn-outline-primary rounded-circle btn-cart"
              data-toggle="dropdown">
              <i class="fas fa-cart-plus"></i>
                <div class="badge badge-pill badge-danger"></div>
              </button>
              </li>
              </ul>
      </nav>

      <div class="header">
     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
   
          <div class="carousel-item img-one header-carousel-item bg-cover active">
              
              <div class="carousel-caption  d-none d-md-block px-3">
                  <h3 class="display-4 mb-5 mr-5">你 ! 還在用化學成分的清潔用品洗身體嗎 ?</h3>
                  
              </div>
          </div>
          <div class="carousel-item img-two header-carousel-item bg-cover ">
  
              <div class="carousel-caption  d-none d-md-block px-3">
                  <h3 class="display-4 mb-2 text-warning">不明成分的沐浴用品</h3>
                  <h3 class="display-4  text-warning " >造成肌膚和頭皮 癢到不行嗎 ? </h3>
            
  
                  
              </div>
          </div>
          <div class="carousel-item img-three header-carousel-item bg-cover ">
             
              <div class="carousel-caption d-none d-md-block px-3">
                  <h3 class="display-4  ">快試試我們天然無添加的產品</h3>
                  <p class="display-4 ">讓你的肌膚和頭皮 受到最溫柔溫和的對待</p>
              </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </a>
      </div>
  </div>
      </div>

<!--middle-->
<div>
<ProductList/>
</div>
<!--footer-->
<div>
    <Footer/>
</div>
</div>

</template>


<script>

import Footer from "./Footer";
import ProductList from "./ProductList";
export default {

    data() {
    return {

   };
  },
  components: {
    Footer,ProductList
  },
}
</script>


<style>

.carousel-item{
  height:600px;
}
    .carousel-caption {
            background-color: rgba(0, 0, 0, .2);
            
        }
.img-one{
  background-image: url(../../../../src/assets/img/report/report5.jpg);
   background-repeat:no-repeat;
   background-size:cover;
  
}
.img-two{
  background-image: url(../../../../src/assets/img/report/report2.jpg);
   background-repeat:no-repeat;
   background-position:center;
  background-size:cover;
   
}
.img-three{
  background-image: url(../../../../src/assets/img/report/report11.jpg);
  background-repeat:no-repeat;
    background-size:cover;
    
}

.backimg{
background-image:url(../../../../src/assets/img/report/report5.jpg); 
background-repeat: no-repeat; 

background-size:cover;


}
</style>