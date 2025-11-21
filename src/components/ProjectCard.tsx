import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  metrics?: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  githubUrl?: string;
  onClick: () => void;
}

const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  metrics = [],
  playStoreUrl,
  appStoreUrl,
  githubUrl,
  onClick 
}: ProjectCardProps) => {
  return (
    <div 
      className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-smooth cursor-pointer group"
      onClick={onClick}
    >
      {/* Project preview image placeholder */}
      <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 aspect-video">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-bold text-muted-foreground/20">
            {title.charAt(0)}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
              <ExternalLink className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
        </div>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {metrics.length > 0 && (
          <div className="pt-4 border-t border-border/50">
            <ul className="space-y-1 text-sm text-muted-foreground">
              {metrics.map((metric, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-neon mt-1">•</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-2 pt-2">
          {githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="glass-card border-glass-border hover:border-primary/50 flex-1"
              onClick={(e) => {
                e.stopPropagation();
                window.open(githubUrl, '_blank');
              }}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {(playStoreUrl || appStoreUrl) && (
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 flex-1"
              onClick={(e) => {
                e.stopPropagation();
                window.open(playStoreUrl || appStoreUrl, '_blank');
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View App
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
