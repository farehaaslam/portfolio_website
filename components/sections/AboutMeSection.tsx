'use client'

interface Pillar {
  title: string
  description: string
  approach: string[]
}

const pillars: Pillar[] = [
  {
    title: 'Deep Learning & NLP',
    description: 'Experimenting with open-source AI and multimodal systems',
    approach: [
      'Large language models and localized embeddings',
      'Audio transcription frameworks',
      'Offline-first intelligent agents'
    ]
  },
  {
    title: 'MLOps & Cloud Pipelines',
    description: 'Production-grade deployment at scale',
    approach: [
      'MLflow model versioning and tracking',
      'Docker containerization & FastAPI services',
      'AWS automation and CI/CD pipelines'
    ]
  },
  {
    title: 'Full-Stack Dev (MERN)',
    description: 'Building responsive, maintainable web applications',
    approach: [
      'Clean, scalable architecture patterns',
      'Secure authentication flows',
      'Highly responsive user interfaces'
    ]
  },
  {
    title: 'Core CS (DSA & OOP)',
    description: 'Strong theoretical foundation for every solution',
    approach: [
      'Data Structures & Algorithms mastery',
      'Object-Oriented Programming principles',
      'Operating Systems and DBMS fundamentals'
    ]
  }
]

export function AboutMeSection() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About Me</h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          I am a Computer Engineering student at Jamia Millia Islamia with a core focus on Deep Learning, 
          Natural Language Processing, and scalable web architecture. My development philosophy centers on 
          efficiency, local-first intelligence, and deployment rigor—bridging complex algorithmic problem-solving 
          with modern software engineering.
        </p>
      </div>

      {/* 4-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="group p-6 rounded-lg border border-border bg-background/50 hover:border-foreground/30 hover:bg-background/70 transition-all duration-300"
          >
            {/* Card Header */}
            <h3 className="text-lg font-bold text-foreground mb-2">{pillar.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{pillar.description}</p>

            {/* Bullet Points */}
            <ul className="space-y-2">
              {pillar.approach.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-foreground/60 flex-shrink-0 mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Achievement Badge */}
      <div className="flex items-center justify-center mt-10 pt-6 border-t border-border/50">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 border border-border/50 text-sm text-muted-foreground hover:bg-background/80 transition-colors">
          <span>⚡</span>
          <span>Solved 500+ Data Structures & Algorithms questions cross-platform</span>
        </div>
      </div>
    </section>
  )
}
