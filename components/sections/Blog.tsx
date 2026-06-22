import { ExternalLink } from 'lucide-react'

interface BlogPost {
  title: string
  url: string
}

const blogPosts: BlogPost[] = [
  {
    title:'How switching to llama.cpp made captioning 2-4X faster',
    url:'https://medium.com/@farehaaslam25/how-switching-to-llama-cpp-made-captioning-2-4x-faster-52620c8d7fe5'
  },
  {
    title: 'Building a Fully Local Voice AI Agent (No APIs, No Cloud)',
    url: 'https://medium.com/@farehaaslam25/building-a-fully-local-voice-ai-agent-no-apis-no-cloud-d65639f671ee'
  },
  {
    title: 'Memory in AI Agents and Assistance',
    url: 'https://medium.com/@farehaaslam25/memory-in-ai-agents-and-assistance-586350d6507d'
  }
]

export function BlogSection() {
  return (
    <section className="space-y-3">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Blogs</h2>
        <div className="h-1 w-16 bg-white rounded-full" />
      </div>

      {/* Blogs Stack */}
      <div className="space-y-3">
        {blogPosts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-lg border border-border bg-background/50 hover:border-foreground/20 hover:bg-background/80 transition-all duration-300"
          >
            {/* Title */}
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors pr-4">
              {post.title}
            </span>

            {/* Icon Wrapper */}
            <div className="flex-shrink-0 p-1.5 rounded-md bg-muted/50 border border-border group-hover:border-foreground/20 group-hover:bg-background transition-colors">
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
