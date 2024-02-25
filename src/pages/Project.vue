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
import HeaderComp from "@/components/Header/HeaderComp.vue";
import ProjectBannerComp from "@/components/ProjectComp/ProjectBannerComp.vue";
import ProjectProjectsComp from "@/components/ProjectComp/ProjectProjectsComp.vue";
import BlockPaginationComp from "@/components/BannerComp/BlockPaginationComp.vue";
import FooterComp from "@/components/Footer/FooterComp.vue";

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
