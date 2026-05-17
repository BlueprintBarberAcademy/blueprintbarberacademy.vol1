import type { Metadata } from 'next'
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const dancing = Dancing_Script({ subsets: ['latin'], variable: '--font-script' })

export const metadata: Metadata = {
  title: 'Blueprint Barber Academy | Professional Education',
  description: 'Online education platform for hairdressers and barbers. Education based on real salon work, not disconnected theory.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dancing.variable} scroll-smooth`}>
      <body className="bg-background text-foreground font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-background">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
