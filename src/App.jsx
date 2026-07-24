import React, { useState } from 'react'
import Background3D from './components/Background3D'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Skills from './components/Skills'
import Internships from './components/Internships'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import { Orbit, Compass, Sparkles } from 'lucide-react'

export default function App() {
  const [orbitMode, setOrbitMode] = useState(false)

  return (
    <div className="app-container">
      {/* Interactive 3D Background */}
      <Background3D enableControls={orbitMode} />

      {/* HUD 3D Controls Toggle */}
      <div className="controls-hud">
        <button
          className="hud-btn"
          onClick={() => setOrbitMode(!orbitMode)}
          title={orbitMode ? 'Switch to Cursor Parallax' : 'Enable 3D Free Camera Orbit'}
        >
          {orbitMode ? <Compass size={22} /> : <Orbit size={22} />}
        </button>
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <AboutMe />
        <Education />
        <Skills />
        <Internships />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', color: 'var(--text-main)', fontSize: '1.1rem' }}>
            <Sparkles size={18} className="gradient-text" />
            <span>CHELLADURAI M</span>
          </div>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} CHELLADURAI M. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
