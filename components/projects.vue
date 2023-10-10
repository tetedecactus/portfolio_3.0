<template>
  <section class="projects-container">
    <h2>Projets</h2>
    <!-- 1er Projet -->
    <a href="https://github.com/tetedecactus/react_bootstrap_portfolio">
      <div class="project-card">
        <video width="150" autoplay loop muted playsinline>
          <source src="../assets/images/rb_portfolio.mp4" type="video/mp4">
          <source src="../assets/images/rb_portfolio.webm" type="video/webm">
        </video>
        <div class="project-description">
            <h3>Portfolio 1.0 &nbsp;<span> &#x2192;</span></h3>
            <p>Mon premier portfolio et aussi l'un de mes premier "vrai" projet front-end, style <span>Dark Razor Wave </span> fait avec Bootstrap et React</p>
            <div>
                <p>NodeJs</p>
                <p>React</p>
                <p>Bootstrap</p>
            </div>
        </div>
      </div>
    </a>
    <!-- 2iem Projet -->
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
    <!-- 3iem Projet -->
    <a href="https://marketplace.visualstudio.com/search?term=TeteDeCactus&target=VSCode&category=All%20categories&sortBy=Relevance">
      <div class="project-card">
          <img src="../assets/images/op-theme.webp" width="150" height="130" alt="" loading="lazy">
          <div class="project-description">
              <h3>VScode Theme &nbsp;<span> &#x2192;</span></h3>
              <p>Theme Visual Studio Code basee sur le Manga<span> One Piece</span>. Comme a mon habitude Dark Darker Dark+Dark x Dark.</p>
              <div>
                  <p>VScode</p>
                  <p>JSON</p>
                  <p>YO Code</p>
                  <p>Azure DevOps</p>
              </div>
          </div>
      </div>
    </a>
    <!-- 4iem Projet -->
    <a href="https://github.com/tetedecactus/framing_web_site">
      <div class="project-card">
        <video width="150" autoplay loop muted playsinline>
          <source src="../assets/images/EastClaw.mp4" type="video/mp4">
          <source src="../assets/images/EastClaw.webm" type="video/webm">
          <!-- <source src="../assets/images/EastClaw.ogg" type="video/ogg"> -->
        </video>
        <div class="project-description">
            <h3>Site Web Free Lance &nbsp;<span> &#x2192;</span></h3>
            <p>J'ai fait le site web pour un client qui euvre dans le home framing a Edmonton, <span>East Claw Construction inc</span></p>
            <div>
                <p>NodeJs</p>
                <p>Nuxt3</p>
                <p>Tailwind CSS</p>
                <p>FireBase</p>
            </div>
        </div>
      </div>
    </a>
    <!-- 5iem Projet -->
    <a href="https://github.com/tetedecactus/design_interieur_portfolio">
      <div class="project-card">
        <video width="150" autoplay loop muted playsinline>
          <source src="../assets/images/joe_portfolio.mp4" type="video/mp4">
          <source src="../assets/images/joe_portfolio.webm" type="video/webm">
        </video>
        <div class="project-description">
            <h3>Pro Bono Portfolio &nbsp;<span> &#x2192;</span></h3>
            <p>J'ai fait ce portfolio pour une amie qui oeuvre dans le designe interieur. Ce site aborde un style<span> Minimaliste et Propre</span>. J'aime particulierement le side scroll de celui-ci. J'ai egalement decouvert le BLANC.</p>
            <div>
                <p>Bun</p>
                <p>Nuxt3</p>
                <p>Tailwind CSS</p>
                <p>FireBase</p>
            </div>
        </div>
      </div>
    </a>
    <!-- 6iem Projet -->
    <a href="https://github.com/tetedecactus/react_tailwind_portfolio">
      <div class="project-card">
        <video width="150" autoplay loop muted playsinline>
          <source src="../assets/images/portfolio2-0.mp4" type="video/mp4">
          <source src="../assets/images/portfolio2-0.webm" type="video/webm">
          <!-- <source src="../assets/images/porfolio2-0.ogv" type="video/ogg"> -->
        </video>
        <div class="project-description">
            <h3>Portfolio 2.0 &nbsp;<span> &#x2192;</span></h3>
            <p>Ce portfolio est mon deuxième et le premier à être déployé sur l'internet officiellement. J'ai voulu faire quelque chose de simple mais efficace. Je voulais <span>recréer les classiques</span> que l'on voit généralement dans un site web, c'est-à-dire, carrousel, formulaire de contact et changement de thème, de clair a sombre.</p>
            <div>
                <!-- <p>NodeJs</p> -->
                <p>React</p>
                <p>Tailwind CSS</p>
                <p>FireBase</p>
            </div>
        </div>
      </div>
    </a>
    <div>
      <a href="/projects"><p class="text-white">Voir tout mes projets</p></a>
    </div>
  </section>
</template>

<script>
export default {

};
</script>

<style>
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