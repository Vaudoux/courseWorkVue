<template>
  <div>
    <HeaderComp />
    <DetailsBannerComp />
    <DetailsContentComp />
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "../Footer/FooterComp.vue";
import HeaderComp from "../Header/HeaderComp.vue";
import DetailsBannerComp from "./DetailsBannerComp.vue";
import DetailsContentComp from "./DetailsContentComp.vue";

export default {
  components: { HeaderComp, DetailsBannerComp, DetailsContentComp, FooterComp },
};
</script>

<style scoped></style>
