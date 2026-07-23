import React from 'react'
import { motion } from 'framer-motion'
import { FolderGit2, ExternalLink, Sparkles, Layers } from 'lucide-react'

export default function Projects() {
  const projectList = [
    {
      title: 'The Future of Car and Bike Rental System',
      description: 'The Future of Car and Bike Rental System is a full-stack web application developed using Spring Boot and MySQL. It allows users to register, browse available vehicles, book cars or bikes online, and manage their rentals, while administrators can manage vehicles and bookings efficiently. The project simplifies the rental process by providing a secure, user-friendly, and centralized online platform.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Java (Spring Boot)', 'MySQL']
    },
    {
      title: 'AI Smart Farmer',
      description: 'AI Farmer Market is an AI-powered web platform that connects farmers directly with buyers, eliminating middlemen while providing a transparent digital marketplace for agricultural products. It integrates an intelligent AI chatbot to answer farming queries, offers real-time weather updates, and enables secure product management, authentication, and image uploads for a seamless user experience.',
      techStack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Quiz Generator',
      description: 'My Quiz Generator is a web application that automatically creates quizzes based on a file given by the user. Users can sign up, generate quizzes with different difficulty levels, answer the questions, and receive their scores instantly along with performance feedback. The main objective of this project is to reduce the time required to create quizzes manually and provide an interactive, personalized learning experience.',
      techStack: ['React.js', 'JavaScript', 'Java', 'Spring Boot', 'PostgreSQL']
    }
  ]

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-title">
          <FolderGit2 className="gradient-text" size={32} />
          <span>Key Projects</span>
        </div>
        <div className="section-subtitle">Featured Engineering & Web Solutions</div>

        <div className="projects-grid">
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              className="glass-panel card-content"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="card-tag">Project {idx + 1}</span>
                  <Sparkles size={16} style={{ color: 'var(--accent-cyan)' }} />
                </div>

                <h3 className="card-title" style={{ fontSize: '1.35rem' }}>{project.title}</h3>

                <p className="card-desc" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                  TECHNOLOGIES USED:
                </div>
                <div className="tech-pills">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
