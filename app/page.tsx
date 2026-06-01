'use client'

import { Navigation } from '@/components/Navigation'
import { Sidebar } from '@/components/Sidebar'
import { MainContent } from '@/components/MainContent'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Main bounding container */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-20">
        {/* 2-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Sidebar - col-span-4 */}
          <div className="lg:col-span-4">
            <Sidebar />
          </div>
          
          {/* Right Content - col-span-8 */}
          <div className="lg:col-span-8">
            <MainContent />
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}
