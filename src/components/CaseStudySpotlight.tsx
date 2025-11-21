import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const CaseStudySpotlight = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-3xl animate-fade-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-sm font-medium">
                Case Study Spotlight
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold">
                Scaling a <span className="gradient-text">Fintech App</span> to 500K Users
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-neon" />
                    Problem
                  </h3>
                  <p className="pl-7">
                    A growing fintech startup needed to rebuild their legacy mobile app experiencing crashes 
                    and poor performance as user base grew rapidly. The app had a 2.8★ rating due to technical issues.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-neon" />
                    Approach
                  </h3>
                  <p className="pl-7">
                    Architected a complete rewrite in React Native with TypeScript, implementing offline-first 
                    architecture, optimized state management with Redux Toolkit, and integrated comprehensive 
                    error tracking. Collaborated with backend team to optimize API response times.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-neon" />
                    Outcome
                  </h3>
                  <ul className="pl-7 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-neon mt-1">•</span>
                      <span>Improved app rating from 2.8★ to 4.7★ (8,000+ reviews)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neon mt-1">•</span>
                      <span>Reduced crash rate by 95% and cut load times by 60%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neon mt-1">•</span>
                      <span>Scaled from 50K to 500K users without performance degradation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neon mt-1">•</span>
                      <span>Transaction success rate improved from 87% to 99.2%</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="group bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30"
              >
                Read Full Case Study
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="text-6xl font-bold gradient-text">500K</div>
                    <div className="text-xl text-foreground">Active Users</div>
                    <div className="flex gap-8 justify-center text-center">
                      <div>
                        <div className="text-3xl font-bold text-neon">4.7★</div>
                        <div className="text-sm text-muted-foreground">App Rating</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-neon">99.2%</div>
                        <div className="text-sm text-muted-foreground">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating metric cards */}
              <div className="absolute -top-4 -right-4 glass-card px-4 py-3 rounded-xl animate-pulse-glow">
                <div className="text-2xl font-bold gradient-text">-95%</div>
                <div className="text-xs text-muted-foreground">Crash Rate</div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 rounded-xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-bold gradient-text">-60%</div>
                <div className="text-xs text-muted-foreground">Load Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal with more details */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto glass-card border-glass-border">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold gradient-text">
                Complete Case Study: Fintech App Transformation
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <p className="text-muted-foreground">
                This comprehensive rebuild demonstrates expertise in scaling mobile applications 
                while maintaining code quality and user experience. The project involved close 
                collaboration with cross-functional teams and implementation of industry best practices.
              </p>
              {/* Add more detailed case study content here */}
              <div className="text-center text-muted-foreground italic">
                [Full case study content with technical deep-dive, architecture diagrams, and lessons learned]
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CaseStudySpotlight;
