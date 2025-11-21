import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6 animate-fade-up text-center lg:text-left">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
              <span className="w-2 h-2 bg-neon rounded-full animate-pulse-glow" />
              Available for new projects
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">Pradeep Kumar</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
            Mobile App Engineer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-xl">
            React Native • Android • Flutter
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
            {/* [SHORT BIO] - Replace with: Building high-performance, user-centric mobile applications that scale to millions of users */}
            Building high-performance, user-centric mobile applications that scale to millions of users
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity bg-200% animate-gradient-shift" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="glass-card border-glass-border hover:border-primary/50 group"
            >
              <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Phone mockup with floating animation */}
        <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative mx-auto w-64 sm:w-80 lg:w-96 group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 blur-3xl group-hover:opacity-30 transition-opacity rounded-[3rem]" />
            
            {/* Phone frame */}
            <div className="relative glass-card rounded-[3rem] p-4 hover:scale-105 transition-transform duration-500">
              <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                {/* Status bar */}
                <div className="bg-card h-8 flex items-center justify-between px-6 text-xs">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-primary/30" />
                    <div className="w-4 h-4 rounded-full bg-primary/50" />
                    <div className="w-4 h-4 rounded-full bg-primary" />
                  </div>
                </div>
                
                {/* App screenshot placeholder */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-full flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-card rounded w-32 mx-auto" />
                      <div className="h-3 bg-card/50 rounded w-24 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating tech badges */}
            <div className="absolute -left-4 top-20 glass-card px-3 py-2 rounded-lg text-sm font-medium animate-pulse-glow">
              React Native
            </div>
            <div className="absolute -right-4 top-40 glass-card px-3 py-2 rounded-lg text-sm font-medium animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
              Flutter
            </div>
            <div className="absolute -left-4 bottom-32 glass-card px-3 py-2 rounded-lg text-sm font-medium animate-pulse-glow" style={{ animationDelay: '1s' }}>
              TypeScript
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
