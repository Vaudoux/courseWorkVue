<template>
  <div>
    <HeaderComp />
    <ProjectBannerComp />
    <ProjectProjectsComp />
    <BlockPaginationComp />
    <FooterComp />
  </div>
</template>

<script>
import BlockPaginationComp from "../BannerComp/BlockPaginationComp.vue";
import FooterComp from "../Footer/FooterComp.vue";
import HeaderComp from "../Header/HeaderComp.vue";
import ProjectBannerComp from "./ProjectBannerComp.vue";
import ProjectProjectsComp from "./ProjectProjectsComp.vue";

export default {
  components: {
    HeaderComp,
    FooterComp,
    BlockPaginationComp,
    ProjectBannerComp,
    ProjectProjectsComp,
  },
};
</script>

<style scoped></style>
