<template>
  <div class="projects center">
    <div class="categories">
      <div class="categories__button-box">
        <button
          @click="bathroom"
          class="categories__button"
          :class="{
            project__button: true,
            active: activeButton === 'bathroom',
          }"
        >
          Bathroom
        </button>
        <button
          @click="bedroom"
          class="categories__button"
          :class="{ project__button: true, active: activeButton === 'bedroom' }"
        >
          Bed Room
        </button>
        <button
          @click="kitchan"
          class="categories__button"
          :class="{ project__button: true, active: activeButton === 'kitchan' }"
        >
          Kitchan
        </button>
        <button
          @click="livingarea"
          class="categories__button"
          :class="{
            project__button: true,
            active: activeButton === 'livingarea',
          }"
        >
          Living Area
        </button>
      </div>

      <div class="project__box-project">
        <div v-for="item in items" :key="item.id" class="categories__item">
          <img id="project-img" :src="item.blogImage" alt="photo" />

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
  data() {
    return {
      activeButton: "bedroom",
      items: [
        {
          id: 1,
          blogImage: require("@/assets/img/projectProjects/bedRoom/1.png"),
          /* blogButton: "Kitchan Design", */
          blogSubtitle: "Minimal Bedroom",
          itemData: "Decor / Artchitecture",
        },
        {
          id: 2,
          blogImage: require("@/assets/img/projectProjects/bedRoom/2.png"),
          /* blogButton: "Living Design", */
          blogSubtitle: "Classic Minimal Bedroom",
          itemData: "Decor / Artchitecture",
        },
        {
          id: 3,
          blogImage: require("@/assets/img/projectProjects/bedRoom/3.png"),
          /* blogButton: "Interior Design", */
          blogSubtitle: "Minimal Bedroom table",
          itemData: "Decor / Artchitecture",
        },
        {
          id: 4,
          blogImage: require("@/assets/img/projectProjects/bedRoom/4.png"),
          /* blogButton: "Kitchan Design", */
          blogSubtitle: "Modern Medroom",
          itemData: "Decor / Artchitecture",
        },
        {
          id: 5,
          blogImage: require("@/assets/img/projectProjects/bedRoom/5.png"),
          /* blogButton: "Living Design", */
          blogSubtitle: "Minimal Bedroom",
          itemData: "Decor / Artchitecture",
        },
        {
          id: 6,
          blogImage: require("@/assets/img/projectProjects/bedRoom/6.png"),
          /* blogButton: "Interior Design", */
          blogSubtitle: "Modern Bedroom",
          itemData: "Decor / Artchitecture",
        },
        {
          id: 7,
          blogImage: require("@/assets/img/projectProjects/bedRoom/7.png"),
          /* blogButton: "Living Design", */
          blogSubtitle: "System Table",
          itemData: "Decor / Artchitecture",
        },
        {
          id: 8,
          blogImage: require("@/assets/img/projectProjects/bedRoom/8.png"),
          /* blogButton: "Interior Design", */
          blogSubtitle: "Modern Bedroom",
          itemData: "Decor / Artchitecture",
        },
      ],
    };
  },
  methods: {
    setActive(button) {
      this.activeButton = button;
    },
    bedroom() {
      this.activeButton = "bedroom";
      this.items.forEach((item, index) => {
        item.blogImage = require(`@/assets/img/projectProjects/bedRoom/${
          index + 1
        }.png`);
      });
    },
    bathroom() {
      this.activeButton = "bathroom";
      this.items.forEach((item, index) => {
        item.blogImage = require(`@/assets/img/projectProjects/bathRoom/${
          index + 1
        }.png`);
      });
    },
    kitchan() {
      this.activeButton = "kitchan";
      this.items.forEach((item, index) => {
        item.blogImage = require(`@/assets/img/projectProjects/kitchan/${
          index + 1
        }.png`);
      });
    },
    livingarea() {
      this.activeButton = "livingarea";
      this.items.forEach((item, index) => {
        item.blogImage = require(`@/assets/img/projectProjects/livingArea/${
          index + 1
        }.png`);
      });
    },
  },
};
</script>

<style scoped></style>
