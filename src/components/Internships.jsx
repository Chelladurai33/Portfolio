import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react'

export default function Internships() {
  const internshipData = [
    {
      role: 'Frontend Web Development',
      company: 'Pumo Technovation',
      period: 'January 2024',
      badge: 'Completed'
    },
    {
      role: 'Web Development',
      company: "Let's Gametech",
      period: 'July 2025',
      badge: 'Completed'
    }
  ]

  return (
    <section id="internships" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-title">
          <Briefcase className="gradient-text" size={32} />
          <span>Internship Experience</span>
        </div>
        <div className="section-subtitle">Industry Experience & Practical Training</div>

        <div className="grid-2">
          {internshipData.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass-panel card-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="card-tag">Internship</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  <Calendar size={14} />
                  {item.period}
                </span>
              </div>

              <h3 className="card-title">{item.role}</h3>
              
              <div className="card-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Building2 size={16} />
                <span>{item.company}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)', fontSize: '0.9rem', fontWeight: '500' }}>
                <CheckCircle2 size={16} />
                <span>Verified Internship Experience</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
