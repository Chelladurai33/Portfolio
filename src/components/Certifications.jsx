import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, CheckCircle, ShieldCheck } from 'lucide-react'

export default function Certifications() {
  const certificationsData = [
    {
      title: 'Programming in Java',
      issuer: 'NPTEL',
      date: 'April 2025'
    },
    {
      title: 'Software Testing',
      issuer: 'NPTEL',
      date: 'October 2025'
    }
  ]

  return (
    <section id="certifications" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-title">
          <Award className="gradient-text" size={32} />
          <span>Certifications</span>
        </div>
        <div className="section-subtitle">NPTEL Certified Credentials</div>

        <div className="grid-2">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              className="glass-panel card-content"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="card-tag">NPTEL Certification</span>
                <ShieldCheck size={20} style={{ color: 'var(--accent-emerald)' }} />
              </div>

              <h3 className="card-title">{cert.title}</h3>
              
              <div className="card-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.75rem 0' }}>
                <span>Issued by {cert.issuer}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                <Calendar size={14} />
                <span>Completion: {cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
