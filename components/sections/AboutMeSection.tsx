'use client'

interface Pillar {
  title: string
  description: string
  approach: string[]
}

const pillars: Pillar[] = [
  {
    title: 'Deep Learning & NLP',
    description: 'Mastering the core neural architectures and mathematical foundations of AI.',
    approach: [
      'Implementing backpropagation, custom loss functions, and optimization loops',
      'learning sequence-to-sequence model from rnn to transformer',
      'transfer learning and fine-tuning techniques for LLMs and domain-specific applications',
    ]
  },
  {
    title: 'AI Engineering & Applied LLMs',
    description: 'Building practical systems powered by cutting-edge language models.',
    approach: [
      'Architecting advanced Retrieval-Augmented Generation (RAG) and semantic indexes',
'Orchestrating hybrid execution workflows leveraging local runtimes  and cloud inference ',
      'Ai agent like claude '],
  },
  {
    title: 'MLOps & Cloud Pipelines',
    description: 'Moving models from local notebooks to production environments.',
    approach: [
      'Experiment tracking and versioning with MLflow and DagsHub',
      'Containerizing services with Docker and FastAPI',
      'Automating infrastructure via CI/CD pipelines to AWS (EC2/ECR/S3)'
    ]
  },
  {
    title: 'Core CS & Problem Solving',
    description: 'Relying on strong computer science fundamentals for every build.',
    approach: [
      'Applying advanced Data Structures & Algorithms (DSA)',
      'Writing modular code using Object-Oriented principles',
      'Understanding internal mechanics of DBMS and OS environments'
    ]
  }
]

export function AboutMeSection() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About Me</h2>
                      <div className="h-1 w-16 bg-white rounded-full mb-5" />

        <p className="text-base md:text-md text-muted-foreground leading-relaxed max-w-2xl">
          I am a final-year Computer Engineering student at Jamia Millia Islamia focusing on applied AI, deep learning, and MLOps. I love building practical AI applications that solve real-world problems. I back my systems with automated, production-ready MLOps pipelines ensuring reliable data flow, efficient local or cloud execution, and seamless deployment.
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
    </section>
  )
}