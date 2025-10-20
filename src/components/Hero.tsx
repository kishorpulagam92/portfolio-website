'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCloud } from 'react-icons/fa'
import { SiDatabricks, SiApachespark } from 'react-icons/si'

export default function Hero() {
  return (
    <section className="section-padding min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-secondary/95 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center md:justify-start gap-2 mb-4"
          >
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Senior Data Engineer
            </span>
            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Data Scientist
            </span>
          </motion.div>

          <h1 className="heading-1 mb-4">
            Hi, I'm <span className="text-primary">Nandakishor Reddy Pulagam</span>
          </h1>
          <h2 className="heading-2 text-accent mb-6">
            Senior Data Engineer/Data Scientist | Dallas, Texas
          </h2>
          <p className="body-text mb-8">
            Senior Data Engineer/Data Scientist with 10+ years of experience designing end-to-end data solutions and developing predictive models for established corporations. Proven ability to deliver value by designing scalable data pipelines, crafting predictive models, and unlocking insights that empower businesses to succeed in today's data-driven world.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
            <FaCloud className="text-2xl text-blue-500" />
            <SiDatabricks className="text-2xl text-[#FF3621]" />
            <SiApachespark className="text-2xl text-[#E25A1C]" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="btn-primary group flex items-center justify-center gap-2">
              <FaDownload className="text-lg" />
              <span>Download Resume</span>
            </a>
            <a href="#contact" className="btn-secondary group flex items-center justify-center gap-2">
              <FaEnvelope className="text-lg" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
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
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="/portfolio-website/images/MyProfilePic.png"
                alt="Nandakishor Reddy Pulagam"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
