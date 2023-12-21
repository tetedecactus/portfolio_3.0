<template>
  <div class="menu-container" id="navbar">
    <nav id="primary_nav">
      <ul>
        <li>
          <NuxtLink class="nav-link" to="/#about"> à propos </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" href="/projects"> projets </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" href="/contact"> contact </NuxtLink>
        </li>
        <li>
          <a id="cv-btn" :href="cv" download="Cv.pdf"> DOWNLOAD C.V </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import social_icons from "./social_icons_link.vue";
// import cv_component from './cv.vue'
import cv from "../assets/images/Cv.pdf";

export default defineComponent({
  data() {
    return {
      cv: cv,
    };
  },
  components: {
    cv,
    social_icons,
  },
});
</script>

<style scoped>
@keyframes slide-right {
  0% {
    left: -20rem;
    top: 0rem;
  }
  100% {
    left: 0px;
    top: 0px;
  }
}

#navbar {
  position: relative;
  animation-name: example;
  animation-duration: 1s;
  animation-delay: 2s;
  animation: slide-right 2s ease;
  overflow: hidden;
  width: 200px;
  height: 100%;
  /* position: fixed; */
  left: 0;
  z-index: 499;
}
#primary_nav {
  position: static;
  display: block;
  left: 240px;
  width: 170px;
  height: 100%;
  z-index: 500;
}
#primary_nav ul {
  padding-left: 5px;
  list-style: none;
  margin-left: 22px;
}

#primary_nav ul li a {
  display: block;
  margin-bottom: 23px;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
}
#primary_nav ul li a:hover,
#primary_nav ul li a:active {
  /* padding-left: 17px; */
  text-decoration: none;
}
/* .nuxt-link {
  color: #DCD7C9;
  border-color: #DCD7C9;
  border-width: 2px;
} */

.nav__link .active {
  color: #dcd7c9;
  border-color: #dcd7c9;
  border-width: 2px;
}

.social-icons .icon {
  margin: 10px;
  fill: #3f4e4f;
  transition: fill 0.5s ease-in-out;
}

.social-icons .icon:hover {
  fill: #dcd7c9;
  /* transition-duration: 500ms; */
}
</style>
