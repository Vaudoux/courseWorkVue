<template>
  <div>
    <!-- Project -->
    <div class="project center">
      <div class="project__heading">
        <div class="project__title">Follow Our Projects</div>
        <p class="project__text">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div class="project__box">
        <div class="project__item">
          <!-- 1 -->
          <div class="project__image">
            <img :src="images.image1" alt="decor" />
            <div class="item__box">
              <div class="item__info">
                <div class="item__title">Modern Kitchan</div>
                <p class="item__text">Decor / Artchitecture</p>
              </div>
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                <path
                  d="M32 44L40 35L32 26"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <!-- 2 -->
          <div class="project__image">
            <img :src="images.image2" alt="decor" />
            <div class="item__box">
              <div class="item__info">
                <div class="item__title">Modern Kitchan</div>
                <p class="item__text">Decor / Artchitecture</p>
              </div>
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                <path
                  d="M32 44L40 35L32 26"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <!-- 3 -->
          <div class="project__image">
            <img :src="images.image3" alt="decor" />
            <div class="item__box">
              <div class="item__info">
                <div class="item__title">Modern Kitchan</div>
                <p class="item__text">Decor / Artchitecture</p>
              </div>
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                <path
                  d="M32 44L40 35L32 26"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <!-- 4 -->
          <div class="project__image">
            <img :src="images.image4" alt="decor" />
            <div class="item__box">
              <div class="item__info">
                <div class="item__title">Modern Kitchan</div>
                <p class="item__text">Decor / Artchitecture</p>
              </div>
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                <path
                  d="M32 44L40 35L32 26"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/img/internoProject/1.png";
import image2 from "@/assets/img/internoProject/2.png";
import image3 from "@/assets/img/internoProject/3.png";
import image4 from "@/assets/img/internoProject/4.png";

export default {
  data() {
    return {
      images: {
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
      },
    };
  },
};
</script>

<style scoped></style>
