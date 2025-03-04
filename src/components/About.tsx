'use client'

import { motion } from 'framer-motion'
import { FaDatabase, FaCloud, FaPython, FaGithub, FaCodeBranch } from 'react-icons/fa'
import { SiDatabricks, SiApachekafka } from 'react-icons/si'

const techStack = [
  { icon: FaDatabase, name: 'SQL' },
  { icon: FaCloud, name: 'Azure' },
  { icon: SiDatabricks, name: 'Databricks' },
  { icon: FaCodeBranch, name: 'Azure DevOps' },
  { icon: FaPython, name: 'Python' },
  { icon: SiApachekafka, name: 'Kafka' },
  { icon: FaGithub, name: 'GitHub' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary/90">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-6">About Me</h2>
          <p className="body-text max-w-3xl mx-auto">
            With over 10 years of experience in data engineering and data science, I specialize in building robust data pipelines
            and implementing scalable solutions using Azure cloud services. My expertise includes data modeling, ETL development,
            and implementing modern data architectures. I have a proven track record of delivering value through data-driven solutions
            and mentoring teams in data engineering best practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="heading-2 text-center mb-8">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {techStack.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-2"
                >
                  <Icon className="text-4xl text-primary" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="heading-2 mb-6">What I'm Passionate About</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-secondary/50 rounded-lg">
              <h4 className="text-xl font-bold text-primary mb-3">Data Architecture</h4>
              <p className="body-text">Designing efficient and scalable data architectures that enable businesses to make data-driven decisions.</p>
            </div>
            <div className="p-6 bg-secondary/50 rounded-lg">
              <h4 className="text-xl font-bold text-primary mb-3">Team Leadership</h4>
              <p className="body-text">Mentoring and developing data engineering teams while fostering a culture of innovation and continuous learning.</p>
            </div>
            <div className="p-6 bg-secondary/50 rounded-lg">
              <h4 className="text-xl font-bold text-primary mb-3">Innovation</h4>
              <p className="body-text">Creating innovative solutions and open-source tools to help the data science community solve complex problems.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 