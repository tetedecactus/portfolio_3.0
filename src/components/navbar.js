import React from 'react'
import SocialIcons from './social_icons'
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
  // this is only active when the location pathname is exactly
  // the same as the href.
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: 'active_link' } : {}
  }

  const ExactNavLink = (props) => <Link getProps={isActive} {...props} />

  // this link will be active when itself or deeper routes
  // are current
  const isPartiallyActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? { className: 'active_link' } : {}
  }

  const PartialNavLink = (props) => (
    <Link getProps={isPartiallyActive} {...props} />
  )

  return (
    <div className="menu-container" id="navbar">
      <nav id="primary_nav">
        <ul>
          <li>
            <Link
              to="/#about"
              className={`nav-link ${ExactNavLink ? 'active_link' : ''} ${
                PartialNavLink ? 'partially-active' : ''
              }`}
              getProps={isActive}
              activeClassName="active_link"
            >
              à propos
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${isActive ? 'active_link' : ''} ${
                isPartiallyActive ? 'active_link' : ''
              }`}
              to="/#projects"
              getProps={isPartiallyActive}
              activeClassName="active_link"
            >
              projets
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/#contact"
              getProps={isPartiallyActive}
              activeClassName="active_link"
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
        <SocialIcons class="social-icons" />
      </nav>
    </div>
  )
}
