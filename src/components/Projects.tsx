'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Data Lake House Implementation',
    description: 'Led a team in developing and implementing a new data lake house, improving data performance and scalability by 30%. Implemented end-to-end data pipelines using Azure and Databricks.',
    technologies: ['Azure', 'Databricks', 'Spark', 'Azure DevOps', 'ADF'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Predictive Maintenance Model',
    description: 'Led the development of a predictive maintenance model for an Aviation client, reducing unplanned aircraft downtime by 20%. Implemented the Medallion Architecture for unified data storage.',
    technologies: ['Python', 'Machine Learning', 'Azure', 'Data Architecture'],
    github: '#',
    demo: '#',
  },
  {
    title: 'DXC-Industrialized-AI-Starter',
    description: 'Created and open-sourced a Python package to help data scientists with end-to-end data science tasks. Developed algorithms improving accuracy of estimating man-hours needed to fix Airbus defects by 15%.',
    technologies: ['Python', 'Open Source', 'Data Science', 'Machine Learning'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Enterprise Data Warehouse',
    description: 'Designed, developed, and maintained an Enterprise Data Warehouse using Microsoft SQL Server to support healthcare data management and analytics. Optimized database performance through indexing and partitioning.',
    technologies: ['SQL Server', 'Oracle', 'Healthcare', 'Data Warehousing'],
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/90">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-6">Featured Projects</h2>
          <p className="body-text max-w-3xl mx-auto">
            Here are some of the key projects I've worked on. Each project demonstrates my expertise
            in different areas of data engineering and cloud architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/50 rounded-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="body-text mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/20 text-primary px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <FaGithub className="text-lg" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 