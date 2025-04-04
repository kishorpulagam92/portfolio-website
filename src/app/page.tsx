'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Work from '@/components/Work';
import Contact from '@/components/Contact';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen relative overflow-hidden">
        {/* Mouse follower */}
        <motion.div
          className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative z-10">
          <div className="container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                Hi, I'm <span className="gradient-text">Your Name</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12">
                I create beautiful digital experiences and solve complex problems through code.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Get in touch
                </a>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-1 bg-white rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Work Section */}
        <Work />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  );
} 