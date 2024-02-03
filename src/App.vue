<template>
  <div>
    <IndexComp />
    <BlockComp />
    <DetailsComp />
  </div>
</template>

<script>
import BlockComp from "./components/BannerComp/BlockComp.vue";
import DetailsComp from "./components/DetailsComp/DetailsComp.vue";
import IndexComp from "./components/IndexComp/IndexComp.vue";

export default {
  name: "App",
  components: {
    IndexComp,
    BlockComp,
    DetailsComp
},
};
</script>

<style lang="scss"></style>
