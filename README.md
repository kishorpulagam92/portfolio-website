# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

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

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
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

3. Your site will be available at: `https://yourusername.github.io/portfolio-website`

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