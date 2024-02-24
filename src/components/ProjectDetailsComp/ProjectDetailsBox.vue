<template>
  <div class="details-box center">
    <div class="title-box">{{ $store.getters.title }}</div>
    <p class="text-box">{{ $store.getters.text }}</p>
    <p class="text-box">{{ $store.getters.subtext }}</p>
    <ProjectDetailsSwiper />
  </div>
</template>

<script>
import ProjectDetailsSwiper from "./ProjectDetailsSwiper.vue";

export default {
  components: {
    ProjectDetailsSwiper,
  },
};
</script>

<style scoped></style>
