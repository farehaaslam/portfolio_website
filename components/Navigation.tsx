'use client'

import { Download, Menu } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-background font-bold text-sm">
              <Image
                src="/cat.jpg"
                alt="Fareha Aslam"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-white font-semibold">Fareha</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Projects
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Experience
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-background font-semibold hover:bg-white/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/50 backdrop-blur-sm px-6 py-4 flex flex-col gap-4">
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white text-background font-semibold hover:bg-white/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
