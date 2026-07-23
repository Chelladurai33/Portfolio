import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react'

export default function Education() {
  const educationData = [
    {
      degree: 'B.E – CSE',
      institution: 'V.S.B. Engineering College',
      period: '2023–2027',
      result: '7.82 CGPA (till Sem 6)',
      tag: 'Undergraduate'
    },
    {
      degree: 'HSC',
      institution: 'Srinivasa Vidhyalaya Matric Hr. Sec. School',
      period: '2022–2023',
      result: '70% – State Board',
      tag: 'Higher Secondary'
    },
    {
      degree: 'SSLC',
      institution: 'Srinivasa Vidhyalaya Matric Hr. Sec. School',
      period: '2020–2021',
      result: 'Completed',
      tag: 'Secondary School'
    }
  ]

  return (
    <section id="education" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-title">
          <GraduationCap className="gradient-text" size={32} />
          <span>Educational Qualification</span>
        </div>
        <div className="section-subtitle">Academic Background & Performance</div>

        <div className="timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="timeline-dot"></div>
              <div className="glass-panel card-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="card-tag">{edu.tag}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                </div>

                <h3 className="card-title" style={{ marginTop: '0.5rem' }}>{edu.degree}</h3>
                
                <div className="card-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Building2 size={16} />
                  <span>{edu.institution}</span>
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 242, 254, 0.08)', padding: '0.4rem 0.8rem', borderRadius: '8px', border: '1px solid rgba(0, 242, 254, 0.2)', marginTop: '0.5rem' }}>
                  <Award size={16} style={{ color: 'var(--accent-cyan)' }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: '600' }}>
                    Result: {edu.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
