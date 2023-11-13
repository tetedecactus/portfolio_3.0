import React from 'react'
// import { useEffect } from 'react'
import SocialIcons from './social_icons'
// import { Link } from 'react-scroll';
import { Link } from 'gatsby'

import '../styles/components/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="title-container">
        <a href="/">
          <h2 className="title-portfolio reveal-text">
            O<span>livier</span>
            <br /> Lab<span>recque</span>
            <br /> Lac<span>asse</span>
          </h2>
        </a>
        <p>
          <span>-</span> étudiant 42 Quebec <span>-</span>
        </p>
        <p>
          <span>-</span> développeur web <span>-</span>
        </p>
        <div className="menu-icon">
          <SocialIcons className="socialIconsMobile" />
        </div>
      </div>
      <section className="sub-menu">
        <Submenu />
      </section>
    </nav>
  )
}

export default Navbar

const Submenu = () => {

  return (
    <div className="menu-container" id="navbar">
      <nav id="primary_nav">
        <ul>
          <li>
            <Link
              className='nav-link'
              to="#about"
            >
              à propos
            </Link>
          </li>
          <li>
            <Link
              className='nav-link'
              to="#projects"
            >
              projets
            </Link>
          </li>
          <li>
            <Link
              className='nav-link'
              to="/#contact"
            >
              contact
            </Link>
          </li>
          <li>
            <Link id="cv-btn" to="cv" download="Cv.pdf">
              DOWNLOAD C.V
            </Link>
          </li>
        </ul>
        <SocialIcons className="social-icons" />
      </nav>
    </div>
  );
};
