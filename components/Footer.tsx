'use client'

import { Github, Linkedin, Mail, FileText } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/farehaaslam', 
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/fareha-aslam',
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:fareha.codes@gmail.com',
    icon: Mail,
  },
  {
    name: 'Resume',
    url: '/resume.pdf', 
    icon: FileText,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-background/30 py-8 mt-20">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 max-w-5xl mx-auto">
        
        {/* Left Side: Status / Copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1.5">
         
          <p className="text-xs text-muted-foreground/60">
            © {currentYear} Fareha Aslam
          </p>
        </div>

        {/* Right Side: Social Grid */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="p-2 rounded-md border border-transparent text-muted-foreground hover:text-foreground hover:border-border hover:bg-background/50 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
                <span className="sr-only">{link.name}</span>
              </a>
            )
          })}
        </div>

      </div>
    </footer>
  )
}