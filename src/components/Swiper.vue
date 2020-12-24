<template>
  <swiper class="swiper card mt-3 " :options="swiperOption">
    <swiper-slide
      v-for="item in productALL"
      :key="item.id"
      class="swiper-slide mb-5
       card__item"
    >
      <dl class="card__content">
        <div class="Productimg">
          <a href="" @click.prevent="getProduct(item.id)"
            ><img :src="item.imageUrl" class="bg-cover"
          /></a>
        </div>

        <div class="card-body">
          <span class="badge badge-secondary float-right ml-2">{{
            item.category
          }}</span>
          <h5 class="card-title">
            <a href="#" class="text-dark">{{ item.title }}</a>
          </h5>
          <p class="card-text">{{ item.description }}</p>
          <div class="d-flex justify-content-between align-items-baseline">
            <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
            <del class="h5 font-weight-bold" v-if="item.origin_price > 0"
              >原價 {{ item.origin_price }} 元</del
            >
            <div class="h3 ml-auto" v-if="item.origin_price > 0">
              <span class="badge badge-danger mr-1 py-2">特價 </span>
              {{ item.price }} 元
            </div>
            <div class="h3 ml-auto" v-else="item.price">
              {{ item.price }} 元
            </div>
          </div>
        </div>
      </dl>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

// Import Swiper styles
export default {
  data() {
    return {
      productALL: [],
      isLoading: false,

      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 4000
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },

          375: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getProductALL(currentPage = Math.floor(Math.random() * 3) + 1) {
      console.log(currentPage);
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${currentPage}`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.productALL = response.data.products;

        console.log(response);
        vm.isLoading = false;
      });
    },
    getProduct(id) {
      this.$router.push(`/layout/${id}`);
      this.$router.go(`/layout/blank`);
    },

    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    }
  },
  created() {
    this.getProductALL();
  }
};
</script>

<style scoped>
.swiper-slide {
  width: 60%;
}
.card {
  overflow: hidden;
  padding: 10px;
  background: #f6f6f6;
  border-radius: 5px;
}

.card__item {
  display: inline-block;
  width: 25%;
  padding: 0 10px;
  letter-spacing: normal;
  vertical-align: top;
}

.bg-cover {
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 350px;
}
@media screen and (max-width: 750px) {
  .card__item {
    width: 80%;
    margin-bottom: 10px;
  }
}
</style>
