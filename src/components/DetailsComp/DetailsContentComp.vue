<template>
  <!-- Details Content -->
  <div class="details center">
    <div class="details__box">
      <div class="details__content">
        <div class="details__title">{{ title }}</div>
        <img class="details__img" :src="img" alt="kitchen" />
        <div class="details__data-box">
          <p class="details__data">{{ date }}</p>
          <ul class="details__bread-crumbs">
            <li><a href="#">Interior</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Decore</a></li>
          </ul>
        </div>
        <div class="details__text">
          <p class="details__text-item">{{ textFirst }}</p>
          <p class="details__text-item">{{ textSecond }}</p>
        </div>
        <div class="details__quotes-box">
          <div class="details__quotation-marks">”</div>
          <div class="details__quotation-title">
            The details are not the details. They make the design.
          </div>
        </div>
        <div class="details__title">{{ subtitle }}</div>
        <p class="details__subtext">{{ subtext }}</p>
        <ul class="details__list">
          <li class="details__list-box">
            <div class="details__number">1</div>
            <p class="details__number-text">{{ listItem }}</p>
          </li>
          <li class="details__list-box">
            <div class="details__number">2</div>
            <p class="details__number-text">{{ listItem }}</p>
          </li>
          <li class="details__list-box">
            <div class="details__number">3</div>
            <p class="details__number-text">{{ listItem }}</p>
          </li>
        </ul>
        <img class="details__subimage" :src="secondImg" alt="kitchen" />
        <p class="details__subtext">{{ subtitleSecond }}</p>
      </div>

      <div class="details__tags">
        <div class="details__tags-title">Tags</div>
        <div class="details__tags-buttons">
          <button
            @click="kitchen"
            :class="{
              'details__tags-button': true,
              active: activeButton === 'kitchen',
            }"
          >
            Kitchen
          </button>
          <button
            @click="bedroom"
            :class="{
              'details__tags-button': true,
              active: activeButton === 'bedroom',
            }"
          >
            Bedroom
          </button>
          <button
            @click="building"
            :class="{
              'details__tags-button': true,
              active: activeButton === 'building',
            }"
          >
            Building
          </button>
          <button
            @click="architecture"
            :class="{
              'details__tags-button': true,
              active: activeButton === 'architecture',
            }"
          >
            Architecture
          </button>
          <button
            @click="kitchenplanning"
            :class="{
              'details__tags-button': true,
              active: activeButton === 'kitchenplanning',
            }"
          >
            Kitchen Planning
          </button>
          <button
            @click="bedroom"
            :class="{
              'details__tags-button': true,
              active: activeButton === 'bedroom',
            }"
          >
            Bedroom
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeButton: "kitchen",
      title: "Let’s Get Solution for Building Construction Work",
      img: require("@/assets/img/detailsContent/kitchen.png"),
      date: "26 December,2022",
      textFirst:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
      textSecond:
        "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      subtitle: "Design sprints are great",
      subtext:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      listItem:
        "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      secondImg: require("@/assets/img/detailsContentInside/kitchen.png"),
      subtitleSecond:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    };
  },
  methods: {
    setActive(button) {
      this.activeButton = button;
    },
    kitchen() {
      this.activeButton = "kitchen";
      this.img = require("@/assets/img/detailsContent/kitchen.png");
      this.secondImg = require("@/assets/img/detailsContentInside/kitchen.png");
    },
    bedroom() {
      this.activeButton = "bedroom";
      this.img = require("@/assets/img/detailsContent/badroom.png");
      this.secondImg = require("@/assets/img/detailsContentInside/bedroom.png");
    },
    building() {
      this.activeButton = "building";
      this.img = require("@/assets/img/detailsContent/building.png");
      this.secondImg = require("@/assets/img/detailsContentInside/building.png");
    },
    architecture() {
      this.activeButton = "architecture";
      this.img = require("@/assets/img/detailsContent/architecture.png");
      this.secondImg = require("@/assets/img/detailsContentInside/architecture.png");
    },
    kitchenplanning() {
      this.activeButton = "kitchenplanning";
      this.img = require("@/assets/img/detailsContent/kitchenplanning.png");
      this.secondImg = require("@/assets/img/detailsContentInside/kitchenplanning.png");
    },
  },
};
</script>

<style scoped></style>
