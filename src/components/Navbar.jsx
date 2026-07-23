import React, { useState, useEffect } from 'react'
import { Sparkles, Terminal, BookOpen, Cpu, Briefcase, FolderGit2, Award, Mail } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = `#${id}`
    }
  }

  return (
    <header className="navbar">
      <a
        href="#hero"
        className="nav-brand"
        onClick={(e) => scrollToSection(e, 'hero')}
      >
        <Sparkles size={20} className="gradient-text" style={{ color: '#00f2fe' }} />
        <span>CHELLADURAI M</span>
      </a>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#hero" className="nav-link" onClick={(e) => scrollToSection(e, 'hero')}>
              Overview
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, 'about')}>
              About
            </a>
          </li>
          <li>
            <a href="#education" className="nav-link" onClick={(e) => scrollToSection(e, 'education')}>
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={(e) => scrollToSection(e, 'skills')}>
              Skills
            </a>
          </li>
          <li>
            <a href="#internships" className="nav-link" onClick={(e) => scrollToSection(e, 'internships')}>
              Internships
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={(e) => scrollToSection(e, 'projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" className="nav-link" onClick={(e) => scrollToSection(e, 'certifications')}>
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, 'contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
