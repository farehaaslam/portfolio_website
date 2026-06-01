'use client'

import { Navigation } from '@/components/Navigation'
import { Sidebar } from '@/components/Sidebar'
import { MainContent } from '@/components/MainContent'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="flex relative pt-20">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}
