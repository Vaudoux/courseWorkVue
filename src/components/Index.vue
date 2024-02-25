<template>
  <div>
    <router-link v-for="link in links" :key="link.id" :to="link.url">{{
      link.title
    }}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          title: "Home",
          url: "/",
        },
        {
          id: 2,
          title: "Blog",
          url: "/blog",
        },
        {
          id: 3,
          title: "Project",
          url: "/project",
        },
        {
          id: 4,
          title: "BlogDetails",
          url: "/blogdetails",
        },
        {
          id: 5,
          title: "ProjectDetails",
          url: "/projectdetails",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
