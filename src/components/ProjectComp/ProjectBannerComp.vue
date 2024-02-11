<template>
  <!-- Banner (stretching) -->
  <div class="stretching">
    <div class="stretching__banner">
      <img :src="image" alt="banner" />
    </div>
    <div class="stretching__box">
      <div class="stretching__title">Our Project</div>
      <p class="stretching__links">
        <a href="index.html">Home</a> / <a href="#">Blog</a>
      </p>
    </div>
  </div>
</template>

<script>
import imageBackground from "@/assets/img/projectBanner/Image.png";
export default {
  data() {
    return {
      image: imageBackground,
    };
  },
};
</script>

<style scoped></style>
