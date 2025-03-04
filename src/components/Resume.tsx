'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'DXC Technology',
    role: 'Senior Data Engineer',
    period: 'Jun 2021 - Present',
    responsibilities: [
      'Led a team of data engineers in developing and implementing a new data lake house, improving data performance and scalability by 30%',
      'Architected and implemented end-to-end data pipelines using Azure and Databricks, facilitating large datasets efficient extraction, transformation, and loading (ETL) for multiple retailing clients',
      'Optimized data pipelines using Spark, achieving significant performance gains, reducing runtime by 40% and cost by 20%',
      'Developed and implemented a data ingestion strategy to support real-time and batch data ingestion using Spark structured streaming',
      'Implemented the CI-CD pipelines in Azure DevOps to integrate seamlessly with Azure Databricks and ADF',
      'Implemented delta tables and scheduled automated jobs in Databricks, ensuring timely and accurate data extraction',
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
    ],
  },
  {
    company: 'Computer Sciences Corporation',
    role: 'Data Engineer',
    period: 'Aug 2014 - Sep 2019',
    responsibilities: [
      'Designed, developed, and maintained an Enterprise Data Warehouse using Microsoft SQL Server to support healthcare data management and analytics',
      'Created and managed staging (stg) and Operational Data Store (ODS) environments to ensure data integrity',
      'Created multiple Oracle Apex applications for a healthcare client and provided database support',
      'Optimized database performance by implementing indexing, partitioning, and query optimization techniques',
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
      'Member of Drexel AI, Graduate Student Association, Drexel Blockchain, Drexel International Student Association',
    ],
  },
]

const skills = {
  technical: [
    'Python, PySpark, SQL, Spark-SQL, Scala, R, PL-SQL, T-SQL',
    'Spark, Spark Structured Streaming, Kafka',
    'Azure, Databricks, Azure Synapse, AWS',
    'MongoDB, Azure SQL DB, SQL Server, Oracle, Data Lakes',
    'ADF, Datadog, Airflow, Power BI, Tableau, Power Automate',
    'Azure DevOps, Git, Confluence, Jira',
  ],
  soft: [
    'Team Leadership',
    'Data Architecture',
    'Project Management',
    'Problem Solving',
    'Technical Mentoring',
    'Cross-functional Collaboration',
  ],
}

const certifications = [
  'Databricks Certified Data Engineer Professional',
  'Microsoft Certified: Azure Solutions Architect Expert',
  'Azure Data Engineer Associate',
  'Databricks Fundamentals',
  'Kafka Fundamentals',
  'Azure AI, Data Fundamentals',
  'Google-certified Data Analytics Professional',
  'MongoDB Basis and MongoDB for SQL Pros',
  'IBM Certified in Machine Learning with Python and Big Data',
]

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-secondary">
      <div className="container mx-auto">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/50 p-4 rounded-lg text-center"
              >
                <p className="font-medium text-accent">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 