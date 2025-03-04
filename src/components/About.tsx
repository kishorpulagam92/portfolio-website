'use client'

import { motion } from 'framer-motion'
import { FaDatabase, FaCloud, FaPython, FaGithub, FaCodeBranch, FaServer, FaChartLine, FaUsers, FaChartBar } from 'react-icons/fa'
import { SiDatabricks, SiApachekafka, SiMongodb } from 'react-icons/si'

const techStack = [
  { icon: FaDatabase, name: 'SQL', color: 'text-blue-500' },
  { icon: FaCloud, name: 'Azure', color: 'text-blue-600' },
  { icon: SiDatabricks, name: 'Databricks', color: 'text-[#FF3621]' },
  { icon: FaCodeBranch, name: 'Azure DevOps', color: 'text-blue-400' },
  { icon: FaPython, name: 'Python', color: 'text-yellow-500' },
  { icon: SiApachekafka, name: 'Kafka', color: 'text-gray-400' },
  { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
  { icon: FaChartBar, name: 'Power BI', color: 'text-yellow-600' },
  { icon: FaChartBar, name: 'Tableau', color: 'text-blue-700' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary/90 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-8">
            {techStack.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-2 p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
                >
                  <Icon className={`text-4xl ${tech.color}`} />
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
            >
              <FaServer className="text-4xl text-primary mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-primary mb-3">Data Architecture</h4>
              <p className="body-text">Designing efficient and scalable data architectures that enable businesses to make data-driven decisions.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
            >
              <FaUsers className="text-4xl text-primary mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-primary mb-3">Team Leadership</h4>
              <p className="body-text">Mentoring and developing data engineering teams while fostering a culture of innovation and continuous learning.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
            >
              <FaChartLine className="text-4xl text-primary mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-primary mb-3">Innovation</h4>
              <p className="body-text">Creating innovative solutions and open-source tools to help the data science community solve complex problems.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 