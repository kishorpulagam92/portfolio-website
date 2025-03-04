'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="section-padding min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-secondary/95">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="heading-1 mb-4">
            Hi, I'm <span className="text-primary">Nandakishor Reddy Pulagam</span>
          </h1>
          <h2 className="heading-2 text-accent mb-6">
            Lead Data Engineer | Senior Data Science & Engineering Consultant
          </h2>
          <p className="body-text mb-8">
            Senior Data Engineer with 10+ years of experience designing end-to-end data solutions for established corporations. Proven ability to deliver value by designing scalable data pipelines, crafting predictive models, and unlocking insights that empower businesses to succeed in today's data-driven world.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="btn-primary">
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
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
            <Image
              src="/images/Kishor_pic.jpeg"
              alt="Nandakishor Reddy Pulagam"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 