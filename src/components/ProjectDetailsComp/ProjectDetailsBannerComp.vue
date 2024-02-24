<template>
  <!-- Banner (stretching) -->
  <div class="stretching">
    <div class="stretching__banner">
      <img :src="image" alt="banner" />
    </div>
  </div>
</template>

<script>
import imageBanner from "@/assets/img/projectDetailsBanner/Images.png";

export default {
  data() {
    return {
      image: imageBanner,
    };
  },
};
</script>

<style scoped></style>
