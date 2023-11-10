import React from "react";
import SocialIcons from "./social_icons";

import "../styles/components/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="title-container">
                <h2 className="title-portfolio reveal-text">O<span>livier</span>
                    <br /> Lab<span>recque</span>
                    <br /> Lac<span>asse</span>
                </h2>
                <p><span>-</span> étudiant 42 Quebec <span>-</span></p>
                <p><span>-</span> développeur web <span>-</span></p>
                <div className="menu-icon">
                    <SocialIcons className="socialIconsMobile" />
                </div>
            </div>
            <section className="sub-menu">
                <Submenu />
            </section>
        </nav>
    );
};

export default Navbar;

const Submenu = () => {
    return (
        <div className="menu-container" id="navbar">
            <nav id="primary_nav">
                <ul>
                    <li>
                    <a className="nav__link" href="#about"><p className="nav-link">à propos</p></a>
                    <a className="nav__link" href="#projects"><p className="nav-link">projets</p></a>
                    <a className="nav__link" href="#contact"><p className="nav-link">contact</p></a>
                    <a href="cv" download="Cv.pdf">
                        <p id="cv-btn">
                        DOWNLOAD C.V
                    </p>
                    </a>
                    </li>
                </ul>
                <SocialIcons class="social-icons"/>
            </nav> 
        </div>
    );
};

