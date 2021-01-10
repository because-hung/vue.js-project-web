<template>
  <div>
    <!--header-->

    <nav class="navbar navbar-expand-lg bg-light">
      <a class="navbar-brand" href="#" data-aos="zoom-out"
        ><img src="../../../../src/assets/img/logo3.png" alt=""
      /></a>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              首頁
            </router-link>
          </li>

          <li class="nav-item mx-1">
            <router-link to="/product" class="nav-link">
              商品列表
            </router-link>
          </li>
          <li class="nav-item mx-1">
            <router-link to="/news" class="nav-link">最新活動</router-link>
          </li>
          <li class="nav-item mx-1">
            <router-link to="/aboutus" class="nav-link">關於我們</router-link>
          </li>
          <li class="nav-item mx-1">
            <router-link to="/shop" class="nav-link">門市資訊</router-link>
          </li>
        </ul>
      </div>
      <div class="ham">
        <b-dropdown id="dropdown" text="Menu">
          <b-dropdown-item>
            <router-link to="/" class="nav-link ">
              首頁
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/product" class="nav-link ">
              商品列表
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/news" class="nav-link">最新活動</router-link>
          </b-dropdown-item>

          <b-dropdown-item>
            <router-link to="/aboutus" class="nav-link"
              >關於我們</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link to="/shop" class="nav-link"
              >門市資訊</router-link
            ></b-dropdown-item
          >

          <b-dropdown-item>
            <router-link to="/login">
              <div class="btn btn-outline-primary  dashbtn">
                <i class="fas fa-user-circle "></i>
                會員登入
              </div>
            </router-link></b-dropdown-item
          >
          <b-dropdown-item>
            <router-link to="/cart">
              <li class="list-inline-item">
                <button class="btn btn-outline-primary  btn-cart dashbtn">
                  我要結帳

                  <i class="fas fa-cart-plus cartImg "></i>
                  <span class="badge badge-danger  ml-2 ">{{ Cart }}</span>
                </button>
              </li>
            </router-link></b-dropdown-item
          >
        </b-dropdown>
      </div>

      <ul class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/login">
            <div class="btn btn-outline-primary  navbtn ">
              <i class="fas fa-user-circle "></i>
              會員登入
            </div>
          </router-link>
        </li>

        <router-link to="/cart">
          <li class="list-inline-item">
            <button class="btn btn-outline-primary  btn-cart navbtn ">
              我要結帳

              <i class="fas fa-cart-plus "></i>
              <span class="badge badge-danger badge-Number ml-2">{{
                Cart
              }}</span>
            </button>
          </li>
        </router-link>
      </ul>
    </nav>

    <div class="header">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div
            class="carousel-item img-one header-carousel-item bg-cover active"
          >
            <div class="carousel-caption  d-none d-md-block px-3">
              <h3 class="display-4 mb-5 mr-5 title">
                你 ! 還在用化學成分的清潔用品洗身體嗎 ?
              </h3>
            </div>
          </div>
          <div class="carousel-item img-two header-carousel-item bg-cover ">
            <div class="carousel-caption  d-none d-md-block px-3">
              <h3 class="display-4 mb-2 title">不明成分的沐浴用品</h3>
              <h3 class="display-4  title">
                造成肌膚和頭皮 癢到不行嗎 ?
              </h3>
            </div>
          </div>
          <div class="carousel-item img-three header-carousel-item bg-cover ">
            <div class="carousel-caption d-none d-md-block px-3">
              <h3 class="display-4  title">快試試我們天然無添加的產品</h3>
              <p class="display-4 title">
                讓你的肌膚和頭皮 受到最溫柔溫和的對待
              </p>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Cart: 0
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;

      this.$http.get(url).then(response => {
        vm.Cart = response.data.data.carts.length;
        //  console.log(vm.Cart);
      });
    }
  },
  created() {
    this.getCart();
    this.$bus.$on("getcart", () => {
      this.getCart();
    });
  }
};
</script>
<style lang="scss" scoped>
.carousel-item {
  height: 450px;
}
.carousel-caption {
  background-color: rgba(0, 0, 0, 0.2);
}
.img-one {
  background-image: url(../../../../src/assets/img/report/report5.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.img-two {
  background-image: url(../../../../src/assets/img/report/report22.png);
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
.img-three {
  background-image: url(../../../../src/assets/img/report/report21.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.backimg {
  background-image: url(../../../../src/assets/img/report/report5.jpg);
  background-repeat: no-repeat;

  background-size: cover;
}
.nav-item:hover {
  background-color: #9d9d9d;
}

.nav-link:hover {
  color: white;
}
.ham {
  display: none;
}

.dashbtn {
  display: none;
}

.cartImg {
  position: relative;
}
.badge-Number {
  position: absolute;
  top: 15px;
  right: 17px;
}

@media (max-width: 992px) {
  .carousel-item {
    height: 250px;
  }
  .title {
    font-size: 24px;
  }
  .ham {
    display: block;

    padding-right: 32%;
  }
}

@media (max-width: 414px) {
  .header {
    display: none;
  }
  .navbtn {
    display: none;
  }

  .dashbtn {
    display: block;
  }
}
</style>
