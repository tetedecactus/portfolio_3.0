<template>
  <div class="projects-42-container">
    <h2>Projets 42 Quebec</h2>
    <!-- <div class="links-card">
      <a
        href="https://github.com/tetedecactus/Libft_42"
        aria-label="Liens vers projet"
      >
        <div class="project-card">
          <video width="150" autoPlay loop muted playsInline>
            <source src="../assets/images/libft.webm" type="video/webm" />
          </video>
          <div class="project-description">
            <h3>Ft_Libft &nbsp;<span> &#x2192;</span></h3>
            <p>
              Mon tout premier projet à 42 Québec consistait à créer notre
              propre bibliothèque de fonctions en langage C. Ce projet a été une
              étape cruciale pour développer des compétences en programmation,
              car il nécessitait de coder, mettre en œuvre ses propres
              fonctions, et reproduire certaines de manière un peu
              personnalisée. Bien que visuellement sobre, ce projet demeure l'un
              de mes favoris, car il a posé les bases essentielles de mon
              apprentissage en tant que programmeur.
            </p>
            <div>
              <p>C</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="links-card">
      <a
        href="https://github.com/JOMST42/Transcendence"
        aria-label="Liens vers projet"
      >
        <div class="project-card">
          <video width="150" autoPlay loop muted playsInline>
            <source
              src="../assets/images/transcendence.webm"
              type="video/mp4"
            />
            <source
              src="../assets/images/transcendence.mp4"
              type="video/webm"
            />
          </video>
          <div class="project-description">
            <h3>Transcendence &nbsp;<span> &#x2192;</span></h3>
            <p>
              Mon projet final chez 42 Québec consistait à créer un jeu de Pong
              intégrant un chat et plusieurs fonctionnalités, telles que le mode
              1v1, 1vBot, et même une version 3D du Pong (oui, vraiment).
              Réalisé en collaboration avec une équipe dynamique, ce projet a
              représenté un défi que j'ai eu le plaisir de relever.
            </p>
            <div>
              <p>Angular</p>
              <p>NestJs</p>
              <p>Docker</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="links-card">
      <a
        href="https://github.com/tetedecactus/Fdf_42"
        aria-label="Liens vers projet"
      >
        <div class="project-card">
          <img
            src="../assets/images/fdf.webp"
            width="150"
            height="130"
            alt=""
            loading="lazy"
          />
          <div class="project-description">
            <h3>Fil De Fer &nbsp;<span> &#x2192;</span></h3>
            <p>
              Mon projet final chez <span>42 Québec (L) </span>Nous avions pour
              mission de faire un jeu de <span>Pong</span> et d'y ajouter un
              chat ainsi que plusieur futuring comme 1v1, 1vBot et meme un pong
              3D (ouff je sais). J'ai fait ce projet avec une Power équipe, ce
              fut un défi génial a accomplir.
            </p>
            <div>
              <p>C</p>
              <p>Librairie graphique</p>
              <p>Algorithme</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="links-card">
      <a
        href="https://github.com/gasselin42/cub3d"
        aria-label="Liens vers projet"
      >
        <div class="project-card">
          <video width="150" autoPlay loop muted playsInline>
            <source src="../assets/images/cub3d.webm" type="video/webm" />
          </video>
          <div class="project-description">
            <h3>Cub 3D &nbsp;<span> &#x2192;</span></h3>
            <p>
              Mon projet final chez <span>42 Québec (L) </span>Nous avions pour
              mission de faire un jeu de <span>Pong</span> et d'y ajouter un
              chat ainsi que plusieur futuring comme 1v1, 1vBot et meme un pong
              3D (ouff je sais). J'ai fait ce projet avec une Power équipe, ce
              fut un défi génial a accomplir.
            </p>
            <div>
              <p>C</p>
              <p>Librairie graphique</p>
              <p>Algorithme</p>
            </div>
          </div>
        </div>
      </a>
    </div> -->
    <div class="links-card" v-for="(project, id) in projects42Data.data.value" :key="project">
      <a
        href={{ project.data.link }}
        aria-label="Liens vers projet"
      >
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
              <p>C</p>
              <p>Librairie graphique</p>
              <p>Algorithme</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const projects42Data = await useFetch('/api/projects42')
// const data = await useFetch('/api/projects')
console.log(projects42Data.value)

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
