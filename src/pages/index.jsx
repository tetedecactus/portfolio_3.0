import * as React from 'react'
// import { useEffect } from 'react'
import Navbar from '../components/navbar.jsx'
import About from '../components/about.jsx'
import Projects from '../components/projects.jsx'

import '../styles/pages/index.css'

const IndexPage = () => {

  return (
    <div>
      <main className="custom-container">
        <div className="navbar" id="menu">
          <Navbar />
        </div>
        <div className="contain">
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </div>
      </main>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>O LAB LAC | Portfolio</title>
