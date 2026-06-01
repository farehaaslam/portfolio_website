'use client'

import { CheckCircle2, ExternalLink, Link } from 'lucide-react'
import { EXPORT_DETAIL } from 'next/dist/shared/lib/constants'

export function EducationSection() {
  return (
    <section id="education" className="space-y-8 pb-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Education </h2>
        <div className="h-1 w-16 bg-white rounded-full" />
      </div>

      <div className="space-y-6">
        {/* Education */}
        <div className="border-b border-border pb-6">
          <h3 className="text-lg font-semibold text-white mb-2">B-Tech in Computer Engineering with Honours in AI/ML</h3>
          <p className="text-foreground/80 text-sm">Jamia Millia Islamia</p>
          <p className="text-muted-foreground text-sm">Aug 2023 - Present</p>
          <p className="text-muted-foreground text-sm mt-1">Current CGPA: 8.2/10</p>
        </div>
        <div className="border-b border-border pb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Senior Secondary Education</h3>
          <p className="text-foreground/80 text-sm">Hamdard Public School</p>
          <p className="text-muted-foreground text-sm">May 2022</p>
          <p className="text-muted-foreground text-sm mt-1">Percentage: 94.2%</p>
        </div>

        {/* Highlights */}
         
      </div>
    </section>
  )
}
