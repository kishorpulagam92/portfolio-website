'use client'

import { motion } from 'framer-motion'
import { FaAward, FaCertificate, FaGraduationCap, FaCloud } from 'react-icons/fa'
import { SiDatabricks, SiMongodb, SiGoogle } from 'react-icons/si'

const experiences = [
  {
    company: 'DXC Technology',
    role: 'Senior Data Engineer',
    period: 'Jun 2021 - Present',
    responsibilities: [
      'Led a team of data engineers in developing and implementing a new data lake house, improving data performance and scalability by 30%',
      'Architected and implemented end-to-end data pipelines using Azure and Databricks, facilitating large datasets efficient extraction, transformation, and loading (ETL) for multiple retailing clients',
      'Optimized data pipelines using Spark, achieving significant performance gains, reducing runtime by 40% and cost by 20%',
      'Developed and implemented a data ingestion strategy to support real-time and batch data ingestion using Spark structured streaming, improving timeliness and accuracy of data reporting',
      'Implemented the CI-CD pipelines in Azure DevOps to integrate seamlessly with Azure Databricks and ADF, ensuring efficient and reliable deployment of data processing pipelines',
      'Practices involve leveraging scalable Azure services such as Azure Databricks for distributed data processing, Azure Synapse Analytics for high-performance analytics, and Azure Data Lake Storage for scalable data storage',
      'Expert in implementing comprehensive monitoring and alerting solutions to ensure data pipeline reliability and availability',
      'Implemented delta tables and scheduled automated jobs in Databricks, ensuring timely and accurate data extraction from diverse sources'
    ],
  },
  {
    company: 'DXC Technology',
    role: 'Senior Data Science & Engineering Consultant',
    period: 'Sep 2019 - Jun 2021',
    responsibilities: [
      'Led the development of a predictive maintenance model for an Aviation client, reducing unplanned aircraft downtime by 20%',
      'Created and open-sourced a Python package, DXC-Industrialized-AI-Starter, to help data scientists with end-to-end data science tasks',
      'Developed an algorithm that improved the accuracy of estimating man-hours needed to fix Airbus defects by 15%',
      'Successfully implemented the Medallion Architecture, providing a unified and structured approach to store data from multiple sources',
      'Practices include leveraging Microsoft\'s integration capabilities such as Azure Logic Apps and Azure Functions for orchestrating data workflows and implementing custom data transformations',
      'Conducted thorough data analysis and quality checks, ensuring the reliability and consistency of data, and implemented industry best practices'
    ],
  },
  {
    company: 'Computer Sciences Corporation',
    role: 'Data Engineer',
    period: 'Aug 2014 - Sep 2019',
    responsibilities: [
      'Designed, developed, and maintained an Enterprise Data Warehouse using Microsoft SQL Server to support healthcare data management and analytics',
      'Created and managed staging (stg) and Operational Data Store (ODS) environments to ensure data integrity, consistency, and accessibility',
      'Created multiple Oracle Apex applications for a healthcare client and provided database support for different applications',
      'Optimized database performance by implementing indexing, partitioning, and query optimization techniques, resulting in faster data retrieval and processing times',
      'Experience in driving architectural discussions, making design decisions, and providing technical guidance to ensure alignment with business goals',
      'Collaborated with cross-functional teams to design the databases and enhance the overall system performance and data retrieval efficiency',
      'Worked on several healthcare and manufacturing domain automation projects and developed multiple solutions that helped automate several daily tasks using RPA tools and reduced costs'
    ],
  },
]

const education = [
  {
    degree: 'MS Data Science',
    school: 'Drexel University, Philadelphia',
    year: '2021',
    details: 'CGPA: 3.9',
    activities: [
      'Student leader in Drexel Graduate IEEE and Pragati Associations',
      'Member of Drexel AI, Graduate Student Association, Drexel Blockchain, Drexel International Student Association, and Dragons Teach Students Teaching Engaged Minds'
    ],
  },
]

const skills = {
  technical: [
    'Python, PySpark, SQL, Spark-SQL, Scala, R, PL-SQL, T-SQL',
    'Spark, Spark Structured Streaming, Kafka',
    'Azure, Databricks, Azure Synapse, AWS',
    'MongoDB, Azure SQL DB, SQL Server, Oracle, Data Lakes, Data Warehouses',
    'ADF, Datadog, Airflow, Power BI, Tableau, Power Automate',
    'Azure DevOps, Git, Confluence, Jira'
  ],
  soft: [
    'Team Leadership',
    'Data Architecture',
    'Project Management',
    'Problem Solving',
    'Technical Mentoring',
    'Cross-functional Collaboration'
  ],
}

const certifications = [
  {
    name: 'Databricks Certified Data Engineer Professional',
    icon: SiDatabricks,
    color: 'text-[#FF3621]'
  },
  {
    name: 'Microsoft Certified: Azure Solutions Architect Expert',
    icon: FaCloud,
    color: 'text-blue-500'
  },
  {
    name: 'Azure Data Engineer Associate',
    icon: FaCloud,
    color: 'text-blue-400'
  },
  {
    name: 'Databricks Fundamentals',
    icon: SiDatabricks,
    color: 'text-[#FF3621]'
  },
  {
    name: 'Kafka Fundamentals',
    icon: FaCloud,
    color: 'text-gray-400'
  },
  {
    name: 'Azure AI, Data Fundamentals',
    icon: FaCloud,
    color: 'text-blue-600'
  },
  {
    name: 'Google-certified Data Analytics Professional',
    icon: SiGoogle,
    color: 'text-blue-500'
  },
  {
    name: 'MongoDB Basis and MongoDB for SQL Pros',
    icon: SiMongodb,
    color: 'text-green-500'
  },
  {
    name: 'IBM Certified in Machine Learning with Python and Big Data',
    icon: FaCloud,
    color: 'text-blue-700'
  }
]

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-6">Resume</h2>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="heading-2 text-primary mb-8">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/50 p-6 rounded-lg"
              >
                <h4 className="text-xl font-bold mb-2">{exp.role}</h4>
                <p className="text-accent mb-2">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="body-text">{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="heading-2 text-primary mb-8">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/50 p-6 rounded-lg"
              >
                <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                <p className="text-accent">{edu.school}</p>
                <p className="text-sm text-gray-400">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="heading-2 text-primary mb-8">Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary/50 p-6 rounded-lg"
            >
              <h4 className="text-xl font-bold mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary/50 p-6 rounded-lg"
            >
              <h4 className="text-xl font-bold mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="heading-2 text-primary mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${cert.color} text-2xl`}>
                      <Icon />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-accent mb-2">{cert.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <FaCertificate className="text-primary" />
                        <span>Verified Certification</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 