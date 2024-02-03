<template>
  <div>
    <!-- Banner -->
    <div class="banner center">
      <div class="banner__container">
        <img :src="image" alt="background" />
        <div class="banner__box">
          <div class="banner__title">Let Your Home Be Unique</div>
          <p class="banner__text">
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
          <button class="banner__button">
            <div class="button__content">
              <p>Get Started</p>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                  stroke="#CDA274"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageBackground from "@/assets/img/internoBanner/banner.png";

    export default {
      data() {
          return {
          image: imageBackground,
          };
      },
    };
</script>

<style scoped></style>
