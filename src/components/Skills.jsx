import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Code, Database, Wrench, Terminal, Globe, Layers } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Web Technologies',
      icon: <Globe size={24} className="gradient-text" />,
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      category: 'Programming',
      icon: <Code size={24} className="gradient-text" />,
      skills: ['Java']
    },
    {
      category: 'Database',
      icon: <Database size={24} className="gradient-text" />,
      skills: ['MySQL', 'DBMS Concepts']
    },
    {
      category: 'Tools',
      icon: <Wrench size={24} className="gradient-text" />,
      skills: ['Git', 'GitHub', 'VS Code']
    }
  ]

  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-title">
          <Cpu className="gradient-text" size={32} />
          <span>Technical Skills</span>
        </div>
        <div className="section-subtitle">Core Technical Competencies</div>

        <div className="grid-2">
          {skillCategories.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass-panel card-content"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ background: 'rgba(0, 242, 254, 0.1)', padding: '0.6rem', borderRadius: '12px', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
                  {item.icon}
                </div>
                <h3 className="card-title" style={{ fontSize: '1.25rem', margin: 0 }}>{item.category}</h3>
              </div>

              <div className="tech-pills">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="tech-pill"
                    style={{
                      fontSize: '0.9rem',
                      padding: '0.5rem 1rem',
                      background: 'rgba(0, 242, 254, 0.08)',
                      borderColor: 'rgba(0, 242, 254, 0.25)',
                      color: '#f0f6fc',
                      fontWeight: '500'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
