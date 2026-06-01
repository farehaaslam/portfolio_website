export function GitHubActivitySection() {
  return (
    <div className="github-section">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 ">GitHub Activity</h2>
              <div className="h-1 w-16 bg-white rounded-full mb-5" />


      <img 
        src="https://ghchart.rshah.org/farehaaslam" 
        alt="Your Name's GitHub Contributions Chart" 
        className="w-full max-w-4xl mx-auto"
      />
    </div>
  );
}