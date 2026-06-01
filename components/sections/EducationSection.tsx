'use client'

import { CheckCircle2 } from 'lucide-react'

export function EducationSection() {
  return (
    <section id="education" className="space-y-8 pb-12">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Education & Skills</h2>
        <div className="h-1 w-16 bg-white rounded-full" />
      </div>

      <div className="space-y-6">
        {/* Education */}
        <div className="border-b border-border pb-6">
          <h3 className="text-lg font-semibold text-white mb-2">B-Tech in Computer Engineering</h3>
          <p className="text-foreground/80 text-sm">Jamia Millia Islamia</p>
          <p className="text-muted-foreground text-sm">Aug 2023 - Present</p>
        </div>

        {/* Highlights */}
        <div className="bg-muted/30 border border-border rounded-lg p-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">Solved 500+ Data Structures & Algorithm questions</span> across
                competitive programming platforms.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">Full-stack expertise</span> in modern web technologies including React,
                Node.js, and cloud deployment.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">MLOps & AI/ML specialization</span> with production experience in model
                deployment and optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
