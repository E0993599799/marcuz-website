import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marcuxz Web | Premium Web Systems & AI Automation',
  description: 'From idea to launch-ready digital system. Marcuxz Web builds conversion-focused websites, AI-powered tools, and business automation systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#05070D] text-white selection:bg-accent-violet selection:text-white`}>
        {children}
      </body>
    </html>
  )
}
