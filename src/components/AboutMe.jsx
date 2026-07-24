import React from 'react'
import { motion } from 'framer-motion'
import { User, GraduationCap, Code, Briefcase, Award, CheckCircle2, Sparkles } from 'lucide-react'
import chelladuraiPhoto from '../assets/chelladurai-photo.jpg'

export default function AboutMe() {
  const stats = [
    { label: 'CGPA (till Sem 6)', value: '7.85', icon: <GraduationCap size={18} className="gradient-text" /> },
    { label: 'Internships', value: '2', icon: <Briefcase size={18} className="gradient-text" /> },
    { label: 'Key Projects', value: '3', icon: <Code size={18} className="gradient-text" /> },
    { label: 'NPTEL Certifications', value: '2', icon: <Award size={18} className="gradient-text" /> }
  ]

  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-title">
          <User className="gradient-text" size={32} />
          <span>About Me</span>
        </div>

        <div className="about-grid">
          {/* Left Column: Portrait Photo with Glassmorphic Card Frame */}
          <motion.div
            className="about-photo-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-photo-card glass-panel">
              <div className="photo-wrapper">
                <img
                  src={chelladuraiPhoto}
                  alt="Chelladurai M - Professional Portrait"
                  className="about-portrait-img"
                />
              </div>
              <div className="photo-badge">
                <Sparkles size={14} style={{ color: '#00f2fe' }} />
                <span>CHELLADURAI M</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Context from Resume */}
          <motion.div
            className="about-info-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="card-tag">Computer Science & Engineering</div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              Chelladurai M
            </h3>

            <div style={{ color: 'var(--accent-cyan)', fontSize: '1.05rem', fontWeight: '600', fontFamily: 'var(--font-mono)', marginBottom: '1.25rem' }}>
              V.S.B. Engineering College (2023–2027)
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Seeking a job to pursue a highly rewarding career and a healthy work environment where I can utilize my skills and knowledge efficiently for organizational growth and personal development.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)', marginTop: '0.2rem', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  <strong>Academic Excellence:</strong> Pursuing B.E – CSE at V.S.B. Engineering College with a 7.85 CGPA (till Sem 6).
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)', marginTop: '0.2rem', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  <strong>Web & Software Stack:</strong> HTML, CSS, JavaScript, Java, MySQL, DBMS Concepts, Git, GitHub, VS Code.
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)', marginTop: '0.2rem', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  <strong>Practical Internships:</strong> Frontend Web Development at Pumo Technovation (Jan 2024) & Web Development at Let's Gametech (July 2025).
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)', marginTop: '0.2rem', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  <strong>NPTEL Certifications:</strong> Programming in Java (April 2025) & Software Testing (October 2025).
                </span>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="about-stats-grid">
              {stats.map((stat, sIdx) => (
                <div key={sIdx} className="stat-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    {stat.icon}
                    <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)' }}>{stat.value}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
