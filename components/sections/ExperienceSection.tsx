'use client'

import { MapPin, ExternalLink } from 'lucide-react'

export function ExperienceSection() {
  const experiences = [
    {
      role: 'Developer Team Member',
      company: 'Department of Computer Engineering',
      organization: 'Jamia Millia Islamia',
      timeline: 'Aug 2023 - Present',
      location: 'New Delhi, India',
      description:
        'Enhancing and maintaining the official department website, adding new features, and deploying content updates.',
    },
  ]

  return (
    <section id="experience" className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Featured Experience</h2>
        <div className="h-1 w-16 bg-white rounded-full" />
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="group border-b border-border pb-6 hover:bg-muted/30 -mx-4 md:-mx-0 px-4 md:px-0 py-4 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-white/80 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-foreground/80 text-sm">
                  {exp.company}
                  {exp.organization && `, ${exp.organization}`}
                </p>
                <p className="text-muted-foreground text-sm mt-1">{exp.description}</p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1">
                <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.timeline}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
