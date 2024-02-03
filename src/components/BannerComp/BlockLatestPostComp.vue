<template>
  <!-- Latest Post -->
  <div class="latest-post center">
    <div class="latest-post__title">Latest Post</div>
    <div class="latest-post__box">
      <img :src="image" alt="latest post" />
      <div class="latest-post__item">
        <div class="latest-post__subtitle">
          Low Cost Latest Invented Interior Designing Ideas
        </div>
        <p class="latest-post__text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
          dignissim maximus.posuere in.Contrary to popular belief.
        </p>
        <p class="latest-post__text">
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classica.
        </p>
        <div class="item__box">
          <p class="latest-post__date">26 December,2022</p>
          <a href="#">
            <svg
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
              <path
                d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageLatestPost from "@/assets/img/blogLatestPost/latestPost.png";

export default {
  data() {
    return {
      image: imageLatestPost,
    };
  },
};
</script>

<style scoped></style>
