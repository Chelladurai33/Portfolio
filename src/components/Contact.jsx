import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Code2, Send, MessageSquare, CheckCircle2, User, FileText, Loader2, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [lastSubmittedData, setLastSubmittedData] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg('')

    try {
      const response = await fetch('https://formsubmit.co/ajax/chelladuraimoffl@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: formData.subject || `Portfolio Contact Message from ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      })

      const result = await response.json()

      if (response.ok || result.success === 'true' || result.success === true) {
        setLastSubmittedData(formData)
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(result.message || 'Failed to send message.')
      }
    } catch (err) {
      console.error('Email send error:', err)
      setErrorMsg('Failed to send message automatically. Please try sending directly to chelladuraimoffl@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-title">
          <Mail className="gradient-text" size={32} />
          <span>Get In Touch</span>
        </div>
        <div className="section-subtitle">Send a Direct Message & Connect</div>

        <div className="grid-2" style={{ marginBottom: '2rem' }}>
          {/* Glassmorphic Contact Form */}
          <div className="glass-panel card-content">
            <h3 className="card-title" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Send size={20} className="gradient-text" />
              <span>Send Message</span>
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: 'rgba(0, 245, 160, 0.08)',
                  border: '1px solid var(--accent-emerald)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  color: 'var(--accent-emerald)'
                }}
              >
                <CheckCircle2 size={38} style={{ margin: '0 auto 0.75rem auto' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.4rem' }}>Message Processed!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Your message has been submitted to <strong>chelladuraimoffl@gmail.com</strong>.
                </p>

                <div style={{ marginTop: '1.2rem', padding: '1rem', background: 'rgba(255, 183, 3, 0.1)', borderRadius: '10px', border: '1px solid rgba(255, 183, 3, 0.3)', textAlign: 'left', fontSize: '0.85rem', color: '#ffb703' }}>
                  <div style={{ fontWeight: '700', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <AlertCircle size={16} />
                    <span>Action Required for First-Time Setup:</span>
                  </div>
                  Check your <strong>chelladuraimoffl@gmail.com</strong> inbox (or Spam/Junk folder) for an email from <strong>FormSubmit</strong> titled <em>"Action Required: Activate FormSubmit"</em>. Click <strong>"Activate Form"</strong> inside that email to start receiving all message submissions!
                </div>

                {lastSubmittedData && (
                  <a
                    href={`mailto:chelladuraimoffl@gmail.com?subject=${encodeURIComponent(lastSubmittedData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${lastSubmittedData.name}\nEmail: ${lastSubmittedData.email}\n\nMessage:\n${lastSubmittedData.message}`)}`}
                    className="btn-primary"
                    style={{ marginTop: '1.25rem', width: '100%', justifyContent: 'center', textDecoration: 'none' }}
                  >
                    <Mail size={18} />
                    <span>Send Direct via Email Client</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline"
                  style={{ marginTop: '0.75rem', width: '100%', justifyContent: 'center' }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {errorMsg && (
                  <div style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 75, 75, 0.15)',
                    border: '1px solid rgba(255, 75, 75, 0.3)',
                    color: '#ff6b6b',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <AlertCircle size={18} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                    YOUR NAME
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 2.75rem',
                        borderRadius: '10px',
                        background: 'rgba(4, 7, 17, 0.6)',
                        border: '1px solid var(--border-card)',
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                    EMAIL ADDRESS
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 2.75rem',
                        borderRadius: '10px',
                        background: 'rgba(4, 7, 17, 0.6)',
                        border: '1px solid var(--border-card)',
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                    SUBJECT
                  </label>
                  <div style={{ position: 'relative' }}>
                    <FileText size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Project Inquiry / Job Opportunity"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 2.75rem',
                        borderRadius: '10px',
                        background: 'rgba(4, 7, 17, 0.6)',
                        border: '1px solid var(--border-card)',
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(4, 7, 17, 0.6)',
                      border: '1px solid var(--border-card)',
                      color: 'var(--text-main)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: '0.5rem',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending Message...</span>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <Loader2 size={18} />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Communication Channels & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-panel card-content">
              <h3 className="card-title" style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageSquare size={20} className="gradient-text" />
                <span>Direct Contact Details</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a
                  href="mailto:chelladuraimoffl@gmail.com"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0, 242, 254, 0.05)', padding: '0.85rem 1rem', borderRadius: '12px', border: '1px solid rgba(0, 242, 254, 0.15)' }}
                >
                  <div style={{ background: 'rgba(0, 242, 254, 0.15)', padding: '0.5rem', borderRadius: '10px', color: '#00f2fe' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Email</div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '600' }}>chelladuraimoffl@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:9003791508"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0, 242, 254, 0.05)', padding: '0.85rem 1rem', borderRadius: '12px', border: '1px solid rgba(0, 242, 254, 0.15)' }}
                >
                  <div style={{ background: 'rgba(0, 242, 254, 0.15)', padding: '0.5rem', borderRadius: '10px', color: '#00f2fe' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Mobile</div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '600' }}>9003791508</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-panel card-content">
              <h3 className="card-title" style={{ marginBottom: '1.25rem' }}>Professional Profiles</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="https://www.linkedin.com/in/chelladurai-m-44b079374" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ justifyContent: 'space-between', width: '100%', padding: '0.75rem 1.25rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Linkedin size={18} style={{ color: '#00f2fe' }} />
                    <span>LinkedIn</span>
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-blue)' }}>Visit</span>
                </a>

                <a href="https://github.com/Chelladurai33" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ justifyContent: 'space-between', width: '100%', padding: '0.75rem 1.25rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Github size={18} style={{ color: '#00f2fe' }} />
                    <span>GitHub</span>
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-blue)' }}>Visit</span>
                </a>

                <a href="https://leetcode.com/u/Chelladurai_M" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ justifyContent: 'space-between', width: '100%', padding: '0.75rem 1.25rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Code2 size={18} style={{ color: '#00f2fe' }} />
                    <span>LeetCode</span>
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-blue)' }}>Visit</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
