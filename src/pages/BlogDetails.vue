<template>
  <div>
    <HeaderComp />
    <DetailsBannerComp />
    <DetailsContentComp />
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "@/components/Footer/FooterComp.vue";
import HeaderComp from "@/components/Header/HeaderComp.vue";
import DetailsBannerComp from "@/components/DetailsComp/DetailsBannerComp.vue";
import DetailsContentComp from "@/components/DetailsComp/DetailsContentComp.vue";

export default {
  components: { HeaderComp, DetailsBannerComp, DetailsContentComp, FooterComp },
};
</script>

<style scoped></style>
