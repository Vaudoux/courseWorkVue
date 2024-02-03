<template>
  <!-- Banner (stretching) -->
  <div class="stretching">
    <div class="stretching__banner">
      <img :src="image" alt="banner" />
    </div>
    <div class="stretching__box">
      <div class="stretching__title">Articles & News</div>
      <p class="stretching__links">
        <a href="index.html">Home</a> / <a href="#">Blog</a>
      </p>
    </div>
  </div>
</template>

<script>
import imageBanner from "@/assets/img/blogStretching/laceholder.png";

export default {
    data() {
        return {
          image: imageBanner,
        };
    },
};
</script>

<style scoped></style>
