<template>
    <div class="projects-perso-container ">
      <h2>Projets Personnel</h2>
      <div class="links-card">
        <a
          href="https://github.com/tetedecactus/react_bootstrap_portfolio"
          aria-label="Liens vers projet"
        >
          <div class="project-card">
            <video width="150" autoPlay loop muted playsInline>
              <source src="../assets/images/rb_portfolio.mp4" type="video/mp4" />
              <source src="../assets/images/rb_portfolio.webm" type="video/webm" />
            </video>
            <div class="project-description">
              <h3>
                Portfolio 1.0 &nbsp;<span> &#x2192;</span>
              </h3>
              <p>
                Mon premier portfolio et aussi l'un de mes premier "vrai" projet
                front-end, style <span>Dark Razor Wave </span> fait avec
                Bootstrap et React
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
              <h3>
                VScode Theme &nbsp;<span> &#x2192;</span>
              </h3>
              <p>
                Theme Visual Studio Code basee sur le Manga
                <span> One Piece</span>. Comme a mon habitude Dark Darker
                Dark+Dark x Dark.
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
              {/* <!-- <source src="../assets/images/EastClaw.ogg" type="video/ogg"> --> */}
            </video>
            <div class="project-description">
              <h3>
                Site Web Free Lance &nbsp;<span> &#x2192;</span>
              </h3>
              <p>
                J'ai fait le site web pour un client qui euvre dans le home
                framing a Edmonton, <span>East Claw Construction inc</span>
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
              <source src="../assets/images/joe_portfolio.webm" type="video/webm" />
            </video>
            <div class="project-description">
              <h3>
                Pro Bono Portfolio &nbsp;<span> &#x2192;</span>
              </h3>
              <p>
                J'ai fait ce portfolio pour une amie qui oeuvre dans le designe
                interieur. Ce site aborde un style
                <span> Minimaliste et Propre</span>. J'aime particulierement le
                side scroll de celui-ci. J'ai egalement decouvert le BLANC.
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
              <source src="../assets/images/portfolio2-0.webm" type="video/webm" />
            </video>
            <div class="project-description">
              <h3>
                Portfolio 2.0 &nbsp;<span> &#x2192;</span>
              </h3>
              <p>
                Ce portfolio est mon deuxième et le premier à être déployé sur
                l'internet officiellement. J'ai voulu faire quelque chose de
                simple mais efficace. Je voulais{' '}
                <span>recréer les classiques</span> que l'on voit
                généralement dans un site web, c'est-à-dire, carrousel,
                formulaire de contact et changement de thème, de clair a sombre.
              </p>
              <div>
                <p>React</p>
                <p>Tailwind CSS</p>
                <p>FireBase</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
</template>

<script lang="js">

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

.project-card video::-webkit-media-controls-panel {
  display: none !important;
}

.project-card video::-webkit-media-controls-play-button {
  display: none !important;
}

</style>