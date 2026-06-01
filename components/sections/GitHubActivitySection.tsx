'use client'

import { useMemo } from 'react'

interface ActivityDay {
  date: Date
  count: number
}

export function GitHubActivitySection() {
  // Generate sample contribution data for demonstration
  const activityData = useMemo(() => {
    const data: ActivityDay[] = []
    const today = new Date()
    
    for (let i = 365; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      
      // Generate random-looking contribution counts
      const seedValue = date.getTime()
      const pseudoRandom = Math.sin(seedValue / 1000) * 10000
      const count = Math.floor((pseudoRandom % 100) / 20) * 3
      
      data.push({ date, count })
    }
    
    return data
  }, [])

  // Group data by weeks
  const weeks = useMemo(() => {
    const weekGroups: ActivityDay[][] = []
    let currentWeek: ActivityDay[] = []
    
    activityData.forEach((day) => {
      currentWeek.push(day)
      if (currentWeek.length === 7) {
        weekGroups.push(currentWeek)
        currentWeek = []
      }
    })
    
    if (currentWeek.length > 0) {
      weekGroups.push(currentWeek)
    }
    
    return weekGroups
  }, [activityData])

  const getColor = (count: number) => {
    if (count === 0) return '#1f2937' // Empty: deep dark gray
    if (count < 3) return '#4b5563' // Low: dark gray
    if (count < 6) return '#6b7280' // Medium: medium gray
    if (count < 9) return '#9ca3af' // High: light gray
    return '#d1d5db' // Very high: lighter gray/white
  }

  const colorLevels = [
    { color: '#1f2937', label: '0' },
    { color: '#4b5563', label: '1-2' },
    { color: '#6b7280', label: '3-5' },
    { color: '#9ca3af', label: '6-8' },
    { color: '#d1d5db', label: '9+' }
  ]

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Activity</h2>
      </div>

      {/* GitHub Activity Grid */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="inline-block min-w-full">
          <svg width="100%" viewBox={`0 0 ${weeks.length * 16 + 40} 200`} className="min-h-max">
            {/* Day labels */}
            <g className="text-xs fill-muted-foreground">
              <text x="0" y="20">Mon</text>
              <text x="0" y="50">Wed</text>
              <text x="0" y="80">Fri</text>
            </g>

            {/* Activity grid */}
            {weeks.map((week, weekIndex) => (
              <g key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <rect
                    key={`${weekIndex}-${dayIndex}`}
                    x={40 + weekIndex * 16}
                    y={10 + dayIndex * 16}
                    width={12}
                    height={12}
                    fill={getColor(day.count)}
                    rx={2}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                    title={`${day.date.toDateString()}: ${day.count} contributions`}
                  />
                ))}
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/30">
        <span>Less</span>
        <div className="flex gap-1.5">
          {colorLevels.map(({ color }) => (
            <div
              key={color}
              className="w-3 h-3 rounded"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </section>
  )
}
