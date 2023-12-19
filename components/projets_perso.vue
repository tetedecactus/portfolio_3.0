<template>
  <div class="projects-perso-container">
    <h2>Projets Personnel</h2>
    <!-- <div class="links-card">
      <a
        href="https://github.com/tetedecactus/react_bootstrap_portfolio"
        aria-label="Liens vers projet"
      >
        <div class="project-card">
          <video width="150" autoPlay loop muted playsInline>
            <source src="../assets/images/rb_portfolio.mp4" type="video/mp4" />
            <source
              src="../assets/images/rb_portfolio.webm"
              type="video/webm"
            />
          </video>
          <div class="project-description">
            <h3>Portfolio 1.0 &nbsp;<span> &#x2192;</span></h3>
            <p>
              Mon tout premier portfolio représente également l'un de mes
              premiers projets front-end substantiels, arborant un design
              Dark Razor Wave
              élaboré avec React et Bootstrap. Ce projet marque une étape
              significative dans mon parcours, mettant en avant mes compétences
              croissantes en développement front-end.
            </p>
            <div>
              <p>NodeJs</p>
              <p>React</p>
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="links-card">
      <a
        href="https://marketplace.visualstudio.com/search?term=TeteDeCactus&target=VSCode&category=All%20categories&sortBy=Relevance"
        aria-label="Liens vers projet"
      >
        <div class="project-card">
          <img
            src="../assets/images/op-theme.webp"
            width="150"
            height="130"
            alt=""
            loading="lazy"
          />
          <div class="project-description">
            <h3>VScode Theme &nbsp;<span> &#x2192;</span></h3>
            <p>
              Toujours en quête de thèmes pour Visual Studio Code qui
              correspondent à mes goûts, j'ai décidé de créer des thèmes
              inspirés de mes mangas préférés tels que One Piece, Dragon Slayer
              et ChainsawMan.
            </p>
            <div>
              <p>VScode</p>
              <p>JSON</p>
              <p>YO Code</p>
              <p>Azure DevOps</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="links-card">
      <a
        href="https://github.com/tetedecactus/framing_web_site"
        aria-label="Liens vers projet"
      >
        <div class="project-card">
          <video width="150" autoPlay loop muted playsInline>
            <source src="../assets/images/EastClaw.mp4" type="video/mp4" />
            <source src="../assets/images/EastClaw.webm" type="video/webm" />
          </video>
          <div class="project-description">
            <h3>Site Web Free Lance &nbsp;<span> &#x2192;</span></h3>
            <p>
              J'ai réalisé le site web pour East Claw Construction Inc., une
              entreprise basée à Edmonton et spécialisée dans le home framing.
              Ce projet m'a permis de mettre en valeur leurs compétences
              distinctives et d'offrir une présence en ligne qui reflète leur
              expertise dans le domaine de la construction résidentielle.
            </p>
            <div>
              <p>NodeJs</p>
              <p>Nuxt3</p>
              <p>Tailwind CSS</p>
              <p>FireBase</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="links-card">
      <a
        href="https://github.com/tetedecactus/design_interieur_portfolio"
        aria-label="Liens vers projet"
      >
        <div class="project-card">
          <video width="150" autoPlay loop muted playsInline>
            <source src="../assets/images/joe_portfolio.mp4" type="video/mp4" />
            <source
              src="../assets/images/joe_portfolio.webm"
              type="video/webm"
            />
          </video>
          <div class="project-description">
            <h3>Pro Bono Portfolio &nbsp;<span> &#x2192;</span></h3>
            <p>
              J'ai créé ce portfolio pour une amie évoluant dans le domaine du
              design intérieur. Le site adopte un style minimaliste et épuré qui
              met en valeur son travail. J'apprécie particulièrement la fonction
              de défilement latéral, apportant une touche originale à
              l'expérience de navigation.
            </p>
            <div>
              <p>Bun</p>
              <p>Nuxt3</p>
              <p>Tailwind CSS</p>
              <p>FireBase</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="links-card">
      <a
        href="https://github.com/tetedecactus/react_tailwind_portfolio"
        aria-label="Liens vers projet"
      >
        <div class="project-card">
          <video width="150" autoPlay loop muted playsInline>
            <source src="../assets/images/portfolio2-0.mp4" type="video/mp4" />
            <source
              src="../assets/images/portfolio2-0.webm"
              type="video/webm"
            />
          </video>
          <div class="project-description">
            <h3>Portfolio 2.0 &nbsp;<span> &#x2192;</span></h3>
            <p>
              Ce portfolio constitue mon deuxième projet, marquant
              officiellement mes débuts sur Internet. Mon objectif était de
              créer quelque chose de simple mais efficace, en m'inspirant des
              éléments classiques que l'on retrouve généralement sur un site
              web, tels que le carrousel, le formulaire de contact et la
              possibilité de changer de thème, passant du clair au sombre.
            </p>
            <div>
              <p>React</p>
              <p>Tailwind CSS</p>
              <p>FireBase</p>
            </div>
          </div>
        </div>
      </a>
    </div> -->
    <div
      class="links-card"
      v-for="(project, id) in projectsData.data.value"
      :key="project"
    >
      <a href="{{" project.data.link }} aria-label="Liens vers projet">
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
const projectsData = await useFetch("/api/personnalProjects");

console.log(projectsData.value);
</script>

<style>
::-webkit-scrollbar {
  width: 0.1em;
  background-color: #000;
}
::-webkit-scrollbar-thumb {
  background-color: #000000;
}
.projects-perso-container {
  position: relative;
  animation-name: example;
  animation-duration: 1s;
  animation-delay: 2s;
  animation: slide-up 2.5s ease;
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

@keyframes slide-up {
  0% {
    right: 0rem;
    top: 40rem;
  }
  100% {
    right: 0px;
    top: 0px;
  }
}
@-webkit-keyframes slide-up {
  0% {
    right: 0rem;
    top: 40rem;
  }
  100% {
    right: 0px;
    top: 0px;
  }
}

@-moz-keyframes slide-up {
  0% {
    right: 0rem;
    top: 40rem;
  }
  100% {
    right: 0px;
    top: 0px;
  }
}

@-o-keyframes slide-up {
  0% {
    right: 0rem;
    top: 40rem;
  }
  100% {
    right: 0px;
    top: 0px;
  }
}

@-ms-keyframes slide-up {
  0% {
    right: 0rem;
    top: 40rem;
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
