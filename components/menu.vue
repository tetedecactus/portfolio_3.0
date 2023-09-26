<template>
  <div class="menu-container" id="navbar">
    <nav id="primary_nav">
      <ul>
        <li>
          <a class="nav__link" href="#about"><p class="nav-link">à propos</p></a>
          <a class="nav__link" href="#projects"><p class="nav-link">projets</p></a>
          <a class="nav__link" href="#contact"><p class="nav-link">contact</p></a>
          <a :href="cv" download="Cv.pdf">
            <p id="cv-btn">
              DOWNLOAD C.V
          </p>
          </a>
        </li>
      </ul>
        <social_icons id="social-icons"/>
    </nav> 
  </div>
</template>
  
<script lang="js">
import { defineComponent } from 'vue';
import social_icons from './social_icons_link.vue'
// import cv_component from './cv.vue'
import cv from '../assets/images/Cv.pdf'

export default defineComponent({
  data() {
    return {
      cv: cv,
    }
  },
  components: {
    cv,
    social_icons,
  },
  mounted() {
    const navLinkEls = document.querySelectorAll('.nav__link');
    const sectionsEls = document.querySelectorAll('.section');

    let currentSection = 'about';

    window.addEventListener('scroll', () => {
      sectionsEls.forEach(sectionsEl => {
        if (window.scrollY >= sectionsEl.offsetTop) 
          currentSection = sectionsEl.id;
      });

      navLinkEls.forEach(navLinkEl => {
        const to = navLinkEl.getAttribute('to'); // Utilisez getAttribute pour obtenir l'attribut 'to'
        if (to === `/${currentSection}`) {
          document.querySelector('.active')?.classList.remove('active');
          navLinkEl.classList.add('active');
        }
      });
    });
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
   #primary_nav ul  {
    padding-left: 5px;
    list-style: none;
  }

  #primary_nav ul li a {
  display: block;
  padding: 0 0 25px 20px;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
}
#primary_nav ul li a:hover,
#primary_nav ul li a:active {
  padding-left: 17px;
  text-decoration: none;
} 
.nuxt-link {
  color: #DCD7C9;
  border-color: #DCD7C9;
  border-width: 2px;
}

.nav__link .active {
  color: #DCD7C9;
  border-color: #DCD7C9;
  border-width: 2px;
}

.social-icons .icon {
  margin: 10px;
  fill: #3F4E4F;
  transition: fill 0.5s ease-in-out;
}

.social-icons .icon:hover {
  fill: #DCD7C9;
  /* transition-duration: 500ms; */

}

</style>
  