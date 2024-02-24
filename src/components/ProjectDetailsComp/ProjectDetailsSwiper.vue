<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :zoom="true"
    :navigation="true"
    :pagination="{ clickable: true }"
    :modules="modules"
  >
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img class="swiper-zoom-image" :src="image" alt="image" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img class="swiper-zoom-image" :src="image2" alt="image" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img class="swiper-zoom-image" :src="image3" alt="image" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import image from "@/assets/img/projectDetailsBox/Photo.png";
import image2 from "@/assets/img/projectDetailsBox/Photo2.png";
import image3 from "@/assets/img/projectDetailsBox/Photo3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@/assets/scss/style.css";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

export default {
  data() {
    return {
      image: image,
      image2: image2,
      image3: image3,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
};
</script>
