# Nandakishor Reddy Pulagam - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience as a Senior Data Engineer/Data Scientist. Built with Next.js, TypeScript, and Tailwind CSS.

## Live Demo

Visit my portfolio at: [https://kishorpulagam92.github.io/portfolio-website](https://kishorpulagam92.github.io/portfolio-website)

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌙 Dark mode theme
- ⚡ Fast performance
- 🔄 Smooth animations
- 📝 Contact form
- 🚀 Easy deployment to GitHub Pages

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- React Icons

## Professional Summary

Senior Data Engineer/Data Scientist with 10+ years of experience designing end-to-end data solutions and developing predictive models for established corporations. Proven ability to deliver value by designing scalable data pipelines, crafting predictive models, and unlocking insights that empower businesses to succeed in today's data-driven world.

## Key Skills

- **Programming Languages**: Python, PySpark, SQL, Spark-SQL, Scala, R, PL-SQL, T-SQL
- **Frameworks**: Spark, Spark Structured Streaming, Kafka
- **Cloud Skills**: Azure, Databricks, Azure Synapse, AWS
- **Databases**: MongoDB, Azure SQL DB, SQL Server, Oracle, Data Lakes, Data Warehouses
- **Tools**: ADF, Datadog, Airflow, Power BI, Tableau, Power Automate
- **Version Control**: Azure DevOps, Git, Confluence, Jira

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/kishorpulagam92/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

1. Update `next.config.js`:
   - Change the `basePath` to match your GitHub repository name

2. Update content:
   - Modify components in `src/components/` to update content
   - Replace images in `public/images/`
   - Update metadata in `src/app/layout.tsx`

3. Update styling:
   - Modify `tailwind.config.ts` for theme customization
   - Update `globals.css` for global styles

## Deployment

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

2. GitHub Actions will automatically build and deploy your site to GitHub Pages.

3. Your site will be available at: `https://kishorpulagam92.github.io/portfolio-website`

## Setting up EmailJS

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Update the EmailJS configuration in `src/components/Contact.tsx`:
   ```typescript
   emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     {
       from_name: formData.name,
       from_email: formData.email,
       message: formData.message,
     },
     'YOUR_PUBLIC_KEY'
   )
   ```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: pnkr.492@gmail.com
- LinkedIn: [Nandakishor Reddy Pulagam](https://www.linkedin.com/in/nandakishor-reddy-pulagam/)
- Location: Dallas, Texas 