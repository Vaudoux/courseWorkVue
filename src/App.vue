<template>
  <div>
    <IndexComp />
    <BlockComp />
    <DetailsComp />
    <ProjectComp />

    <ProjectDetailsComp />
  </div>
</template>

<script>
import BlockComp from "./components/BannerComp/BlockComp.vue";
import DetailsComp from "./components/DetailsComp/DetailsComp.vue";
import IndexComp from "./components/IndexComp/IndexComp.vue";
import ProjectComp from "./components/ProjectComp/ProjectComp.vue";
import ProjectDetailsComp from "./components/ProjectDetailsComp/ProjectDetailsComp.vue";

import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    IndexComp,
    BlockComp,
    DetailsComp,
    ProjectComp,
    ProjectDetailsComp,
  },
  computed: {
    ...mapState(['title']),
  },
};
</script>

<style lang="scss"></style>
