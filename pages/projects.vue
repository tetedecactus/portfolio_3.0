<template>
    <div class="projects-page-container split-page">
      <div class="navbar-projects" id="menu">
        <Navbar />
      </div>
      <div class="projects-page-subcontainer">
        <ProjetPerso />
        <Projet42 />
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import ProjetPerso from '../components/projets_perso.vue';
import Projet42 from '../components/projets_42.vue';

export default defineComponent({
  components: {
    Projet42,
    ProjetPerso,
  },
});

</script>

<style>
/* Projects Global */
.projects-container {
  position: relative;
  animation-name: example;
  animation-duration: 1s;
  animation-delay: 2s;
  animation: slide-left 2.5s ease;
}

.projects-page-container {
  overflow-y: hidden !important;
  overflow-x: hidden !important;
  overflow: hidden !important;
}

.project-card {
  position: relative;
}

.project-card:hover .projects-description {
  padding: 5px;
}

.project-card:hover::before {
  width: auto;
  content: '';
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: #2c3639;
  opacity: 15% !important;
  cursor: pointer;
}

.project-card:hover h3 {
  color: #dcd7c9;
}

.project-card h3 span {
  font-size: 2rem;
  color: #2c3639;
  transition: all 1s ease-out;
}

.project-card:hover h3 span {
  transform: translate(10px, 0px);
  display: inline-block;
  color: #dcd7c9;
}

@keyframes slide-left {
  0% {
    right: -40rem;
    top: 0rem;
  }
  100% {
    right: 0px;
    top: 0px;
  }
}

.project-card video::-webkit-media-controls-panel {
  display: none !important;
}

.project-card video::-webkit-media-controls-play-button {
  display: none !important;
}


</style>