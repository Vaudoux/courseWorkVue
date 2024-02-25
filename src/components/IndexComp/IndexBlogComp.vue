<template>
  <!-- Blog -->
  <div>
    <div class="blog center">
      <div class="blog__heading">
        <div class="blog__title">{{ product.blogTitle }}</div>
        <p class="blog__text">{{ product.blogText }}</p>
      </div>
      <div class="blog__box">
        <div
          v-for="item in items.slice(0, 3)"
          :key="item.id"
          class="blog__item"
        >
          <img :src="item.blogImage" alt="photo" />
          <button class="blog__button">{{ item.blogButton }}</button>
          <div class="blog__subtitle">{{ item.blogSubtitle }}</div>
          <div class="item__box">
            <div class="item__data">{{ item.itemData }}</div>
            <router-link to="/projectdetails">
              <svg
                width="52"
                height="53"
                viewBox="0 0 52 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                <path
                  d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    product: {
      blogTitle: "Articles & News",
      blogText:
        "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.",
    },
    items: [
      {
        id: 1,
        blogImage: require("@/assets/img/internoBlog/1.png"),
        blogButton: "Kitchan Design",
        blogSubtitle: "Let’s Get Solution For Building Construction Work",
        itemData: "26 December, 2022",
      },
      {
        id: 2,
        blogImage: require("@/assets/img/internoBlog/2.png"),
        blogButton: "Living Design",
        blogSubtitle: "Low Cost Latest Invented Interior Designing Ideas.",
        itemData: "22 December,2022",
      },
      {
        id: 3,
        blogImage: require("@/assets/img/internoBlog/3.png"),
        blogButton: "Interior Design",
        blogSubtitle: "Best For Any Office & Business Interior Solution",
        itemData: "25 December,2022",
      },
      {
        id: 4,
        blogImage: require("@/assets/img/internoBlog/4.png"),
        blogButton: "Kitchan Design",
        blogSubtitle: "Let’s Get Solution For Building Construction Work",
        itemData: "26 December, 2022",
      },
      {
        id: 5,
        blogImage: require("@/assets/img/internoBlog/5.png"),
        blogButton: "Living Design",
        blogSubtitle: "Low Cost Latest Invented Interior Designing Ideas.",
        itemData: "22 December,2022",
      },
      {
        id: 6,
        blogImage: require("@/assets/img/internoBlog/6.png"),
        blogButton: "Interior Design",
        blogSubtitle: "Best For Any Office & Business Interior Solution",
        itemData: "25 December,2022",
      },
    ],
  }),
};
</script>

<style scoped></style>
