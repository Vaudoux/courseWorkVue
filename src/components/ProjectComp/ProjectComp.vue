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
import HeaderComp from "../Header/HeaderComp.vue";
import ProjectBannerComp from "./ProjectBannerComp.vue";
import ProjectProjectsComp from "./ProjectProjectsComp.vue";
import BlockPaginationComp from "../BannerComp/BlockPaginationComp.vue";
import FooterComp from "../Footer/FooterComp.vue";

export default {
  components: {
    HeaderComp,
    ProjectBannerComp,
    ProjectProjectsComp,
    BlockPaginationComp,
    FooterComp,
  },
};
</script>

<style scoped></style>
