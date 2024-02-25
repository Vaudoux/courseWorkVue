<template>
  <div>
    <HeaderComp />

    <div class="notfound center">
      <div class="notfound__container">
        <div class="notfound__item">
          <h2 class="notfound__title">404</h2>
          <p class="notfound__text">
            We are sorry, but the page you requested was not found
          </p>
          <router-link to="/">
            <button class="notfound__button">Back To Home <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path></svg></button>
          </router-link>
        </div>
        <img class="notfound__image" :src="image" alt="image 404" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComp from "@/components/Header/HeaderComp.vue";
import imageNotFound from "@/assets/img/notFound/Photo.jpg";

export default {
  data() {
    return {
      image: imageNotFound,
    };
  },
  components: {
    HeaderComp,
  },
};
</script>

<style scoped></style>
