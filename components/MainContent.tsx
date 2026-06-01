'use client'

import { ExperienceSection } from './sections/ExperienceSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { EducationSection } from './sections/EducationSection'
import { AboutMeSection } from './sections/AboutMeSection'
import { GitHubActivitySection } from './sections/GitHubActivitySection'
import { BlogSection } from './sections/Blog'
import { AchievementSection } from './sections/AchievementSection'

export function MainContent() {
  return (
    <main className="space-y-16 md:space-y-20">
    
        {/* Projects Section */}
            {/* About Me Section */}
      <AboutMeSection />
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* GitHub Activity Section */}
      <GitHubActivitySection />

      {/* Education Section */}
      <EducationSection />

      {/* Blog Section */}
      <BlogSection />
      {/* Achievements Section */}
      <AchievementSection />
    </main>
  )
}
