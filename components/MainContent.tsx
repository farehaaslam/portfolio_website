'use client'

import { ExperienceSection } from './sections/ExperienceSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { EducationSection } from './sections/EducationSection'
import { AboutMeSection } from './sections/AboutMeSection'

export function MainContent() {
  return (
    <main className="w-full md:w-[65%] px-6 md:px-8 md:pl-0 py-8 space-y-16 md:space-y-20">
      {/* Mobile Bio */}
      <div className="md:hidden">
        <p className="text-sm text-muted-foreground leading-relaxed">
          I build production-ready AI/ML pipelines, MLOps solutions, and full-stack web applications.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {['React', 'Python', 'Docker', 'AWS', 'FastAPI', 'MLflow'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
        <button className="flex items-center justify-center gap-2 w-full mt-6 px-4 py-3 rounded-full bg-white text-background font-semibold hover:bg-white/90 transition-colors">
          Resume
        </button>
      </div>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* About Me Section */}
      <AboutMeSection />

      {/* Education Section */}
      <EducationSection />
    </main>
  )
}
