<template>
  <div>
    <IndexComp />
    <BlockComp />
    <DetailsComp />
    <ProjectComp />
  </div>
</template>

<script>
import BlockComp from "./components/BannerComp/BlockComp.vue";
import DetailsComp from "./components/DetailsComp/DetailsComp.vue";
import IndexComp from "./components/IndexComp/IndexComp.vue";
import ProjectComp from "./components/ProjectComp/ProjectComp.vue";

export default {
  name: "App",
  components: {
    IndexComp,
    BlockComp,
    DetailsComp,
    ProjectComp
},
};
</script>

<style lang="scss"></style>
