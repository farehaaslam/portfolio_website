'use client'

import { ExternalLink } from 'lucide-react'

interface Project {
  title: string
  tech: string[]
  description: string[]
  link?: string
}

export function ProjectsSection() {

  const projects: Project[] = [
    {
      title: 'gUrrT: Local-First Video Intelligence Engine',
      tech: ['Python', 'CLIP', 'BLIP', 'Faster-Whisper', 'Ollama', 'Vector DB', 'LLMs'],
      description: [
        'Engineered a local-first video retrieval pipeline integrating scene-based frame sampling, captioning, ASR transcription, and semantic indexing.',
        'Enabled dynamic inference via locally installed Ollama models with optional cloud fallback (Llama 3-70B via Groq).',
        'Achieved 793 downloads within 24 hours of PyPI launch.',
      ],
      link: 'https://pypi.org',
    },
    {
      title: 'Phishing Website Detection System (End-to-End MLOps Pipeline)',
      tech: ['Python', 'scikit-learn', 'MLflow', 'FastAPI', 'Docker', 'AWS', 'GitHub Actions'],
      description: [
        'Built a production-grade end-to-end MLOps pipeline (Ingestion → Validation → Transformation → Training → Deployment) with MLflow for experiment tracking.',
        'Deployed containerized FastAPI inference services via CI/CD pipelines to AWS EC2.',
        'Implemented automated testing and model monitoring for production reliability.',
      ],
    },
    {
      title: 'Local Voice AI Agent',
      tech: ['Python', 'Ollama', 'Llama 3.1', 'Faster-Whisper', 'Gradio'],
      description: [
        'Architected a 100% offline, three-stage AI pipeline (Transcribe, Classify, Act) for local file operations and code generation from voice commands.',
        'Designed a full-stack web UI with Gradio featuring live processing states and streaming audio uploads.',
        'Optimized inference performance for real-time voice processing on consumer hardware.',
      ],
    },
    {
      title: 'Code Tracker',
      tech: ['React', 'ShadCN UI', 'Recharts', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      description: [
        'Developed a MERN-stack web application to track code submissions with secure JWT authentication and refresh tokens.',
        'Designed an interactive dashboard using Recharts to visualize daily progress and coding consistency.',
        'Implemented responsive UI with ShadCN components for seamless user experience across devices.',
      ],
    },
  ]

  return (
    <section id="projects" className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Featured Projects</h2>
        <div className="h-1 w-16 bg-white rounded-full" />
      </div>

      <div className="space-y-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border border-border rounded-lg p-4 md:p-6 hover:border-foreground/50 hover:bg-muted/30 transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  {project.link && (
                    <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded text-xs font-medium bg-muted text-foreground/70 border border-border/50"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="space-y-2">
              {project.description.map((desc, descIdx) => (
                <p key={descIdx} className="text-sm text-muted-foreground leading-relaxed">
                  • {desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
