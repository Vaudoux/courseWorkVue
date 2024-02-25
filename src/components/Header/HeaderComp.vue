<template>
  <div>
    <!-- Header -->
    <div class="header center">
      <div class="header__left">
        <router-link to="/">
          <div class="header__logo">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                fill="#CDA274"
              />
            </svg>
            <h2 class="header__title">Interno</h2>
          </div>
        </router-link>
      </div>

      <div class="header__right">
        <div class="header__menu">
          <router-link to="/"><span class="menu__text">Home</span></router-link>
          <router-link to="/project"
            ><span class="menu__text">Project</span></router-link
          >
          <router-link to="/blog"
            ><span class="menu__text">Blog</span></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
