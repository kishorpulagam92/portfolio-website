import type { Metadata } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nandakishor Reddy - Portfolio',
  description: 'Azure Senior Data Engineer | Scrum Manager | Data Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="bg-secondary text-white min-h-screen">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
} 