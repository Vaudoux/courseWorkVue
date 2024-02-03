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
import HeaderComp from "../Header/HeaderComp.vue";
import IndexBannerComp from "../IndexComp/IndexBannerComp.vue";
import IndexProjectComp from "../IndexComp/IndexProjectComp.vue";
import IndexCounterComp from "./IndexCounterComp.vue";
import IndexBlogComp from "./IndexBlogComp.vue";
import FooterComp from "../Footer/FooterComp.vue";

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
