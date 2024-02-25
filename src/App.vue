<template>
  <div>
    <!-- <Index /> -->
    <router-view />
  </div>
</template>

<script>
import Index from "@/components/Index.vue";

import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Index,
  },
  computed: {
    ...mapState(["title"]),
  },
};
</script>

<style lang="scss"></style>
