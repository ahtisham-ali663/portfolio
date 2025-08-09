import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahtisham Ali - Full Stack Developer',
  description: 'Portfolio of Ahtisham Ali, a passionate full-stack developer with expertise in React, Node.js, Vue.js, and modern web technologies.',
  keywords: 'Full Stack Developer, React, Node.js, Vue.js, Next.js, TypeScript, Portfolio',
  authors: [{ name: 'Ahtisham Ali' }],
  openGraph: {
    title: 'Ahtisham Ali - Full Stack Developer',
    description: 'Portfolio of Ahtisham Ali, a passionate full-stack developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  )
}