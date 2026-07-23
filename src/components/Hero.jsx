import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Linkedin, Github, Code2, ArrowUpRight } from 'lucide-react'
import heroDeveloperImg from '../assets/hero-developer.jpg'

export default function Hero() {
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
    <section id="hero" className="section hero-section">
      <div className="hero-grid">
        {/* Left Column: Bio & Calls to Action */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-col"
        >
          <div className="badge">
            <span className="pulse-dot"></span>
            <span>B.E – CSE Student & Developer</span>
          </div>

          <h1 className="hero-name">
            CHELLADURAI <span className="gradient-text">M</span>
          </h1>

          <div className="hero-title">
            Frontend & Software Engineering Enthusiast
          </div>

          <p className="hero-objective">
            Seeking a job to pursue a highly rewarding career and a healthy work environment where I can utilize my skills and knowledge efficiently for organizational growth and personal development.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => scrollToSection(e, 'projects')}
            >
              <span>Explore Projects</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              href="#contact"
              className="btn-outline"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              <span>Get In Touch</span>
              <Mail size={18} />
            </a>
          </div>

          <div className="contact-pills">
            <a href="tel:9003791508" className="contact-pill">
              <Phone size={16} style={{ color: '#00f2fe' }} />
              <span>9003791508</span>
            </a>

            <a href="mailto:chelladuraimoffl@gmail.com" className="contact-pill">
              <Mail size={16} style={{ color: '#00f2fe' }} />
              <span>chelladuraimoffl@gmail.com</span>
            </a>

            <a href="https://www.linkedin.com/in/chelladurai-m-44b079374" target="_blank" rel="noopener noreferrer" className="contact-pill">
              <Linkedin size={16} style={{ color: '#00f2fe' }} />
              <span>LinkedIn</span>
            </a>

            <a href="https://github.com/Chelladurai33" target="_blank" rel="noopener noreferrer" className="contact-pill">
              <Github size={16} style={{ color: '#00f2fe' }} />
              <span>GitHub</span>
            </a>

            <a href="https://leetcode.com/u/Chelladurai_M" target="_blank" rel="noopener noreferrer" className="contact-pill">
              <Code2 size={16} style={{ color: '#00f2fe' }} />
              <span>LeetCode</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Exact Uploaded Developer Hologram Graphic */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-col"
        >
          <motion.div
            className="hero-image-card"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            <img
              src={heroDeveloperImg}
              alt="Project Nova Holographic Developer"
              className="hero-dev-img"
            />
            <div className="card-glow-overlay"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
