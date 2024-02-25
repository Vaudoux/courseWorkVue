<template>
  <div>
    <HeaderComp />
    <ProjectDetailsBannerComp />
    <ProjectDetailsBox />
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "@/components/Header/HeaderComp.vue";
import FooterComp from "@/components/Footer/FooterComp.vue";
import ProjectDetailsBannerComp from "@/components/ProjectDetailsComp/ProjectDetailsBannerComp.vue";
import ProjectDetailsBox from "@/components/ProjectDetailsComp/ProjectDetailsBox.vue";

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
