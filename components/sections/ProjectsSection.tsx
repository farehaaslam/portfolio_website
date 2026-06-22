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
  title: 'Network Security — Phishing Detection System',
  tech: ['Python', 'Scikit-Learn', 'MLflow', 'FastAPI', 'MongoDB', 'AWS', 'Docker', 'GitHub Actions'],
  description: [
    'Built an end-to-end production ML system classifying websites using 31 URL features across 11,000+ labeled records, achieving optimal performance via GridSearchCV hyperparameter tuning.',
    'Engineered an automated pipeline featuring MongoDB data ingestion, automated schema validation, and Kolmogorov-Smirnov statistical testing for data drift detection.',
    'Developed a containerized FastAPI REST API deployed via GitHub Actions CI/CD pipelines to AWS (EC2/ECR) with automated weekly cron-job retraining workflows.',
  ],
  link: 'https://github.com/farehaaslam/network_security',
},
{
  title: "gUrrT — Local-First Video Intelligence Engine",
  tech: [
    "Python",
    "llama.cpp",
    "GGUF",
    "Faster-Whisper",
    "CLIP",
    "ChromaDB",
    "FastAPI"
  ],
  description: [
    "Open-source Video-RAG framework with 6K+ PyPI downloads for semantic video understanding and retrieval.",
    "Built a multimodal indexing pipeline combining speech transcription, visual embeddings, and vector search for video-grounded question answering.",
    "Integrated llama.cpp with quantized GGUF vision-language models, achieving up to 16× faster local indexing on consumer hardware.",
    "Designed a temporal persistence filtering algorithm to reduce redundant frame captioning and improve indexing throughput."
  ],
  link: "https://github.com/farehaaslam/gurrt"
},
    {
      title: 'Local Voice AI Agent',
      tech: ['Python', 'Ollama', 'Llama 3.1', 'Faster-Whisper', 'Gradio'],
      description: [
        'Architected a 100% offline, three-stage AI pipeline (Transcribe, Classify, Act) for local file operations and code generation from voice commands.',
        'Designed a full-stack web UI with Gradio featuring live processing states and streaming audio uploads.',
        'Optimized inference performance for real-time voice processing on consumer hardware.',
      ],
      link: 'https://github.com/farehaaslam/voice_agent',
    },
  
    {
      title: 'Machine Learning Engineering Portfolio',
      tech: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'Jupyter Notebooks', 'Matplotlib'],
      description: [
        'Engineered 20+ supervised, unsupervised, and ensemble algorithms entirely from scratch using native Python and NumPy mathematical foundations.',
        'Implemented optimization mechanics (gradient descent, loss functions, and splitting criteria) for custom models like Logistic Regression, SVM, and Decision Trees.',
        'Developed end-to-end data pipelines for predictive analytics, evaluation metric benchmarking, and computer vision using MNIST and medical classification datasets.',
      ],
      link: 'https://github.com/farehaaslam/Machine-Learning',
    },
    {
  title: 'Website Automation Agent',
  tech: ['JavaScript', 'OpenAI SDK', 'Playwright', 'Zod', 'Node.js'],
  description: [
    'Built an intelligent AI-powered web automation agent using OpenAI Agents framework to autonomously interact with web interfaces.',
    'Implemented comprehensive browser automation tools including form filling (by label, placeholder, and ID), website navigation, screenshots, and element clicking.',
    'Engineered custom tool definitions with Zod schema validation for type-safe parameter passing between the AI agent and browser automation operations.',
  ],
  link: 'https://github.com/farehaaslam/Website-automation-agent',
},
      {
      title: 'Code Tracker',
      tech: ['React', 'ShadCN UI', 'Recharts', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      description: [
        'Developed a MERN-stack web application to track code submissions with secure JWT authentication and refresh tokens.',
        'Designed an interactive dashboard using Recharts to visualize daily progress and coding consistency.',
        'Implemented responsive UI with ShadCN components for seamless user experience across devices.',
      ],
      link: 'https://codetracker-khaki.vercel.app/',
    },
  ]

  return (
    <section id="projects" className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Featured Projects</h2>
                              <div className="h-1 w-16 bg-white rounded-full mb-5" />

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
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    </a>
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
