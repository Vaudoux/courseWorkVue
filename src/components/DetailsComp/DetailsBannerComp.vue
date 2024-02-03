<template>
  <!-- Banner (stretching) -->
  <div class="stretching">
    <div class="stretching__banner">
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script>
import imageBanner from "@/assets/img/detailsStretching/laceholder.png";

export default {
  data() {
    return {
      image: imageBanner,
    };
  },
};
</script>

<style scoped></style>
