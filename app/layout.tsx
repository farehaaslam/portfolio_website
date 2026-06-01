import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Fareha Aslam | AI/ML & Full-Stack Developer',
  description: 'Portfolio of Fareha Aslam - AI/ML & Full-Stack Developer. Building production-ready AI/ML pipelines, MLOps solutions, and full-stack web applications.',
  generator: 'v0.app',
  icons: {
    icon: '/cat.jpg',       
    shortcut: '/cat.jpg',   
    apple: '/cat.jpg',      
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
