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
import HeaderComp from "@/components/Header/HeaderComp.vue";
import IndexBlogComp from "@/components/IndexComp/IndexBlogComp.vue";
import BlockBannerComp from "@/components/BannerComp/BlockBannerComp.vue";
import BlockLatestPostComp from "@/components/BannerComp/BlockLatestPostComp.vue";
import BlockPaginationComp from "@/components/BannerComp/BlockPaginationComp.vue";
import FooterComp from "@/components/Footer/FooterComp.vue";

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
