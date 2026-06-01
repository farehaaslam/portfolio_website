import { ExternalLink } from "lucide-react";
export function AchievementSection() {
  return (
    <section id="achievements" className="space-y-8">
         <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 mt-4">Achievements </h2>
                  <div className="h-1 w-16 bg-white rounded-full" />


        <div className="bg-muted/30 border border-border rounded-lg p-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Solved 500+ Data Structures & Algorithm questions</span> across
                competitive programming platforms.
              </p>
              <a
                      href={'https://codolio.com/profile/fareha'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    </a>
            </div>
            <div className="flex items-start gap-3">
            </div>
           
          </div>
        </div>
        </section>)}  
        