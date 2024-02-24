<template>
  <div>
    <HeaderComp />
    <ProjectDetailsBannerComp />
    <ProjectDetailsBox />
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "../Header/HeaderComp.vue";
import FooterComp from "../Footer/FooterComp.vue";
import ProjectDetailsBannerComp from "./ProjectDetailsBannerComp.vue";
import ProjectDetailsBox from "./ProjectDetailsBox.vue";

export default {
  components: {
    HeaderComp,
    FooterComp,
    ProjectDetailsBannerComp,
    ProjectDetailsBox,
  },
};
</script>

<style scoped></style>
