<template>
  <div class="projects-42-container">
    <h2>Projets 42 Quebec</h2>
    <div
      class="links-card"
      v-for="(project, id) in projects42Data.data.value"
      :key="project"
    >
      <a :href="project.data.link" aria-label="Liens vers projet">
        <div class="project-card">
          <video width="150" autoPlay loop muted playsInline>
            <source src="../assets/images/cub3d.webm" type="video/webm" />
          </video>
          <div class="project-description">
            <h3>{{ project.data.title }}&nbsp;<span> &#x2192;</span></h3>
            <p>
              {{ project.data.description }}
            </p>
            <div>
              <p>{{ project.data.techno[0] }}</p>
              <p>{{ project.data.techno[1] }}</p>
              <p>{{ project.data.techno[2] }}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    // //
    <div>
      // // <img v-for="url in imageUrls" :src="url" /> // //
      <video v-for="url in imageUrls" :src="url" /> //
    </div>
  </div>
</template>

<script setup>
const projects42Data = await useFetch("/api/projects42");
// console.log(projects42Data.value);
</script>

//
<script>
import { getImages } from "../server/lib/firebase.ts";

export default {
  data() {
    return {
      imageUrls: [],
    };
  },
  async created() {
    this.imageUrls = await getImages();
  },
};
</script>

<style>
/* Projects 42 */

::-webkit-scrollbar {
  width: 0.1em;
  background-color: #000;
}
::-webkit-scrollbar-thumb {
  background-color: #000000;
}

.projects-42-container {
  position: relative;
  animation-name: example;
  animation-duration: 1s;
  animation-delay: 2s;
  animation: slide-left 2.5s ease;
}

.project-card {
  position: relative;
}

.project-card:hover .projects-description {
  padding: 5px;
}

.project-card:hover::before {
  width: auto;
  content: "";
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
    right: -50rem;
    top: 0rem;
  }
  100% {
    right: 0px;
    top: 0px;
  }
}
@-webkit-keyframes slide-left {
  0% {
    right: -50rem;
    top: 0rem;
  }
  100% {
    right: 0px;
    top: 0px;
  }
}

@-moz-keyframes slide-left {
  0% {
    right: -50rem;
    top: 0rem;
  }
  100% {
    right: 0px;
    top: 0px;
  }
}

@-o-keyframes slide-left {
  0% {
    right: -50rem;
    top: 0rem;
  }
  100% {
    right: 0px;
    top: 0px;
  }
}

@-ms-keyframes slide-left {
  0% {
    right: -50rem;
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
