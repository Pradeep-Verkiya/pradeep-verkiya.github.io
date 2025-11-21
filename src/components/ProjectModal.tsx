import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  techStack: string[];
  fullDescription?: string;
  screenshots?: string[];
  metrics?: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  githubUrl?: string;
}

const ProjectModal = ({
  isOpen,
  onClose,
  title,
  description,
  techStack,
  fullDescription,
  screenshots = [],
  metrics = [],
  playStoreUrl,
  appStoreUrl,
  githubUrl,
}: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card border-glass-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Description */}
          <div>
            <p className="text-muted-foreground">
              {fullDescription || description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshots placeholder */}
          {screenshots.length === 0 && (
            <div>
              <h4 className="font-semibold mb-3">Screenshots</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-[9/16] rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 glass-card"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Metrics */}
          {metrics.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3">Key Results</h4>
              <ul className="space-y-2">
                {metrics.map((metric, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-neon mt-1">✓</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            {githubUrl && (
              <Button
                variant="outline"
                className="glass-card border-glass-border hover:border-primary/50"
                onClick={() => window.open(githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            )}
            {playStoreUrl && (
              <Button
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30"
                onClick={() => window.open(playStoreUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Play Store
              </Button>
            )}
            {appStoreUrl && (
              <Button
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30"
                onClick={() => window.open(appStoreUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                App Store
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
