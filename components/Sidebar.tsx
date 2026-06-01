'use client'

import { Download, Github, Linkedin, Mail } from 'lucide-react'
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
                FA
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-left">
              Fareha Aslam
            </h1>
            <p className="text-lg text-muted-foreground text-left">
              AI/ML & Full-Stack Developer
            </p>
          </div>
        </div>

        {/* Bio */}
        <div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I build production-ready AI/ML pipelines, MLOps solutions, and full-stack web applications.
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div>
          <div className="flex flex-wrap gap-2">
            {['React', 'Python', 'Docker', 'AWS', 'FastAPI', 'MLflow'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-foreground border border-border hover:border-foreground/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-background font-semibold hover:bg-white/90 transition-colors">
          <Download className="w-4 h-4" />
          Resume
        </button>

        {/* Social Links */}
        <div className="flex gap-4 pt-4 border-t border-border">
          <a
            href="#"
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="#"
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="#"
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-foreground" />
          </a>
        </div>
      </div>
    </aside>
  )
}
