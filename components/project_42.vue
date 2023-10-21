<template>
    <div class="projects-42-container">
        <h2>Projets 42 Quebec</h2>
        <div class="links-card">
            <a href="https://github.com/JOMST42/Transcendence">
                <div class="project-card">
                    <video width="150" autoplay loop muted playsinline>
                        <source src="../assets/images/transcendence.mp4" type="video/mp4">
                        <source src="../assets/images/transcendence.webm" type="video/webm">
                    </video>
                    <div class="project-description">
                        <h3>Transcendence &nbsp;<span> &#x2192;</span></h3>
                        <p>Mon projet final chez <span>42 Québec (L) </span>Nous avions pour mission de faire un jeu de <span>Pong</span> et d'y ajouter un chat ainsi que plusieur futuring comme 1v1, 1vBot et meme un pong 3D (ouff je sais). J'ai fait ce projet avec une Power équipe, ce fut un défi génial a accomplir.</p>
                        <div >
                            <p>Angular</p>
                            <p>NestJs</p>
                            <p>Docker</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="links-card">
            <a href="https://github.com/tetedecactus/Fdf_42">
                <div class="project-card">
                  <img src="../assets/images/fdf.webp" width="150" height="130" alt="" loading="lazy">
                    <div class="project-description">
                        <h3>Fil De Fer &nbsp;<span> &#x2192;</span></h3>
                        <p>Mon projet final chez <span>42 Québec (L) </span>Nous avions pour mission de faire un jeu de <span>Pong</span> et d'y ajouter un chat ainsi que plusieur futuring comme 1v1, 1vBot et meme un pong 3D (ouff je sais). J'ai fait ce projet avec une Power équipe, ce fut un défi génial a accomplir.</p>
                        <div >
                            <p>C</p>
                            <p>NestJs</p>
                            <p>Docker</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {

};

</script>

<style>
::-webkit-scrollbar {
    width: 0.1em;
    background-color: #000;

  }
  ::-webkit-scrollbar-thumb {
    background-color: #000000;

  }

.projects-container {
  animation-name: example; 
  animation-duration: 1s;
  animation-delay: 2s;
  animation: slide-down 2.5s ease;
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
  background-color: #2C3639;
  opacity: 15% !important;
  cursor: pointer;
}

.project-card:hover h3 {
  color: #DCD7C9;
}

.project-card h3 span {
  font-size: 2rem;
  color: #2C3639;
  transition: all 1s ease-out;
}

.project-card:hover h3 span {
  transform: translate(10px,0px);
  display: inline-block;
  color: #DCD7C9;
}

@keyframes slide-down {
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