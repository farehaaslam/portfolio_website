'use client'

import { Download, Github, Linkedin, Mail,Twitter } from 'lucide-react'
import Image from 'next/image'

export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:h-fit">
      <div className="space-y-8">
        {/* Avatar and Name */}
        <div className="space-y-4">
          <div className="flex justify-start">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/30 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-bold text-2xl">
                <Image
                  src="/cat.jpg"
                  alt="Fareha Aslam"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-left">
              Fareha Aslam
            </h1>
            <p className="text-lg text-muted-foreground text-left">
              AI/ML & Backend Developer
            </p>
          </div>
        </div>

        {/* Bio */}
        <div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I build production-ready AI/ML pipelines and MLOps solutions .
          </p>
         
        </div>

        {/* Tech Stack Pills */}
        <div>
          <div className="flex flex-wrap gap-2">
            {[ 'Python', 'Docker', 'AWS', 'FastAPI', 'RAG','LLM'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-foreground border border-border hover:border-foreground/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button (opens resume from public/) */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-background font-semibold hover:bg-white/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Resume
        </a>

        {/* Social Links */}
        <div className="flex gap-4 pt-4 border-t border-border">
          <a
            href="https://github.com/farehaaslam"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/fareha-aslam/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="mailto:fareha.codes@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-foreground" />
          </a>
          
          <a
            href="https://x.com/as_farrr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 text-foreground" />
          </a>
        </div>
      </div>
    </aside>
  )
}
