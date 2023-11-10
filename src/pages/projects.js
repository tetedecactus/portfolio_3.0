import React from 'react'

import Navbar from '../components/navbar'

import '../styles/pages/projects.css'

import joe_portfolio from '../images/joe_portfolio.webm'
import op_theme from '../images/op-theme.webp'
import rb_portfolio from '../images/rb_portfolio.webm'
import EastClaw from '../images/EastClaw.webm'
import portfolio2_0 from '../images/portfolio2-0.webm'
import fdf from '../images/fdf.webp'
import transcendence from '../images/transcendence.webm'
import cub3d from '../images/cub3d.webm'

import joe_portfolio_mp4 from '../images/joe_portfolio.mp4'
import rb_portfolio_mp4 from '../images/rb_portfolio.mp4'
import EastClaw_mp4 from '../images/EastClaw.mp4'
import portfolio2_0_mp4 from '../images/portfolio2-0.mp4'
import transcendence_mp4 from '../images/transcendence.mp4'

const Projects = () => {
  return (
    <div className="projects-page-container split-page">
      <div className="navbar-projects" id="menu">
        <Navbar />
      </div>
      <div className="projects-page-subcontainer">
        <ProjetPerso />
        <Projet42 />
      </div>
    </div>
  )
}

export default Projects

const ProjetPerso = () => {
  return (
    <div className="projects-perso-container ">
      <h2>Projets Personnel</h2>
      <div className="links-card">
        <a
          href="https://github.com/tetedecactus/react_bootstrap_portfolio"
          aria-label="Liens vers projet"
        >
          <div className="project-card">
            <video width="150" autoPlay loop muted playsInline>
              <source src={rb_portfolio_mp4} type="video/mp4" />
              <source src={rb_portfolio} type="video/webm" />
            </video>
            <div className="project-description">
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
      <div className="links-card">
        <a
          href="https://marketplace.visualstudio.com/search?term=TeteDeCactus&target=VSCode&category=All%20categories&sortBy=Relevance"
          aria-label="Liens vers projet"
        >
          <div className="project-card">
            <img
              src={op_theme}
              width="150"
              height="130"
              alt=""
              loading="lazy"
            />
            <div className="project-description">
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
      <div className="links-card">
        <a
          href="https://github.com/tetedecactus/framing_web_site"
          aria-label="Liens vers projet"
        >
          <div className="project-card">
            <video width="150" autoPlay loop muted playsInline>
              <source src={EastClaw_mp4} type="video/mp4" />
              <source src={EastClaw} type="video/webm" />
              {/* <!-- <source src="../assets/images/EastClaw.ogg" type="video/ogg"> --> */}
            </video>
            <div className="project-description">
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
      <div className="links-card">
        <a
          href="https://github.com/tetedecactus/design_interieur_portfolio"
          aria-label="Liens vers projet"
        >
          <div className="project-card">
            <video width="150" autoPlay loop muted playsInline>
              <source src={joe_portfolio_mp4} type="video/mp4" />
              <source src={joe_portfolio} type="video/webm" />
            </video>
            <div className="project-description">
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
      <div className="links-card">
        <a
          href="https://github.com/tetedecactus/react_tailwind_portfolio"
          aria-label="Liens vers projet"
        >
          <div className="project-card">
            <video width="150" autoPlay loop muted playsInline>
              <source src={portfolio2_0_mp4} type="video/mp4" />
              <source src={portfolio2_0} type="video/webm" />
            </video>
            <div className="project-description">
              <h3>
                Portfolio 2.0 &nbsp;<span> &#x2192;</span>
              </h3>
              <p>
                Ce portfolio est mon deuxième et le premier à être déployé sur
                l'internet officiellement. J'ai voulu faire quelque chose de
                simple mais efficace. Je voulais{' '}
                <span>recréer les classNameiques</span> que l'on voit
                généralement dans un site web, c'est-à-dire, carrousel,
                formulaire de contact et changement de thème, de clair a sombre.
              </p>
              <div>
                {/* <!-- <p>NodeJs</p> --> */}
                <p>React</p>
                <p>Tailwind CSS</p>
                <p>FireBase</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

const Projet42 = () => {
  return (
    <div className="projects-42-container">
      <h2>Projets 42 Quebec</h2>
      <div className="links-card">
        <a
          href="https://github.com/JOMST42/Transcendence"
          aria-label="Liens vers projet"
        >
          <div className="project-card">
            <video width="150" autoPlay loop muted playsInline>
              <source src={transcendence_mp4} type="video/mp4" />
              <source src={transcendence} type="video/webm" />
            </video>
            <div className="project-description">
              <h3>
                Transcendence &nbsp;<span> &#x2192;</span>
              </h3>
              <p>
                Mon projet final chez <span>42 Québec (L) </span>Nous avions
                pour mission de faire un jeu de <span>Pong</span> et d'y ajouter
                un chat ainsi que plusieur futuring comme 1v1, 1vBot et meme un
                pong 3D (ouff je sais). J'ai fait ce projet avec une Power
                équipe, ce fut un défi génial a accomplir.
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
      <div className="links-card">
        <a
          href="https://github.com/tetedecactus/Fdf_42"
          aria-label="Liens vers projet"
        >
          <div className="project-card">
            <img src={fdf} width="150" height="130" alt="" loading="lazy" />
            <div className="project-description">
              <h3>
                Fil De Fer &nbsp;<span> &#x2192;</span>
              </h3>
              <p>
                Mon projet final chez <span>42 Québec (L) </span>Nous avions
                pour mission de faire un jeu de <span>Pong</span> et d'y ajouter
                un chat ainsi que plusieur futuring comme 1v1, 1vBot et meme un
                pong 3D (ouff je sais). J'ai fait ce projet avec une Power
                équipe, ce fut un défi génial a accomplir.
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
      <div className="links-card">
        <a
          href="https://github.com/tetedecactus/Fdf_42"
          aria-label="Liens vers projet"
        >
          <div className="project-card">
            <video width="150" autoPlay loop muted playsInline>
              <source src={cub3d} type="video/webm" />
            </video>
            <div className="project-description">
              <h3>
                Cub 3D &nbsp;<span> &#x2192;</span>
              </h3>
              <p>
                Mon projet final chez <span>42 Québec (L) </span>Nous avions
                pour mission de faire un jeu de <span>Pong</span> et d'y ajouter
                un chat ainsi que plusieur futuring comme 1v1, 1vBot et meme un
                pong 3D (ouff je sais). J'ai fait ce projet avec une Power
                équipe, ce fut un défi génial a accomplir.
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
  )
}
