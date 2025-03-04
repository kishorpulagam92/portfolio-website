'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-6">Get In Touch</h2>
          <p className="body-text max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a data engineer, have a question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 bg-secondary/50 border border-gray-600 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 bg-secondary/50 border border-gray-600 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-secondary/50 border border-gray-600 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-sm">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/kishor-pulagam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-accent hover:text-accent/80 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/kishorpulagam92/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-accent hover:text-accent/80 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:pulagamnkr@gmail.com"
                  className="text-2xl text-accent hover:text-accent/80 transition-colors"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p className="body-text">Dallas, Texas</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="body-text">pulagamnkr@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 