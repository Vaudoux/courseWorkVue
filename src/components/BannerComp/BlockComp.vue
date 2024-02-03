<template>
  <div>
    <HeaderComp />

    <BlockBannerComp />
    <BlockLatestPostComp />
    <IndexBlogComp />
    <BlockPaginationComp />

    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "../Header/HeaderComp.vue";
import IndexBlogComp from "../IndexComp/IndexBlogComp.vue";
import BlockBannerComp from "./BlockBannerComp.vue";
import BlockLatestPostComp from "./BlockLatestPostComp.vue";
import BlockPaginationComp from "./BlockPaginationComp.vue";
import FooterComp from "../Footer/FooterComp.vue";

export default {
  components: {
    BlockBannerComp,
    HeaderComp,
    BlockLatestPostComp,
    IndexBlogComp,
    BlockPaginationComp,
    FooterComp,
  },
};
</script>

<style scoped></style>
