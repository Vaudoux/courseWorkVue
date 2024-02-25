<template>
  <div>
    <HeaderComp />
    <IndexBannerComp />
    <IndexProjectComp />
    <IndexCounterComp />
    <IndexBlogComp />
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "@/components/Header/HeaderComp.vue";
import IndexBannerComp from "@/components/IndexComp/IndexBannerComp.vue";
import IndexProjectComp from "@/components/IndexComp/IndexProjectComp.vue";
import IndexCounterComp from "@/components/IndexComp/IndexCounterComp.vue";
import IndexBlogComp from "@/components/IndexComp/IndexBlogComp.vue";
import FooterComp from "@/components/Footer/FooterComp.vue";

export default {
  components: {
    HeaderComp,
    IndexBannerComp,
    IndexProjectComp,
    IndexCounterComp,
    IndexBlogComp,
    FooterComp,
  },
};
</script>

<style scoped></style>
