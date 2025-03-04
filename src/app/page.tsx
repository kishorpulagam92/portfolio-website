import Hero from '@/components/Hero'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  )
} 