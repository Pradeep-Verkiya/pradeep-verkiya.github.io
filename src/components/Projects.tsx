import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

// [PROJECTS ARRAY] - Replace with real project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    description: "Full-featured shopping app with real-time inventory, payment integration, and order tracking",
    techStack: ["React Native", "TypeScript", "Redux", "Stripe", "Firebase"],
    metrics: [
      "Achieved 100K+ downloads in first 3 months",
      "4.8★ rating on Play Store with 5K+ reviews",
      "Reduced cart abandonment by 35% with optimized checkout"
    ],
    fullDescription: "Built a complete e-commerce solution with advanced features including real-time inventory sync, secure payment processing via Stripe, push notifications, and comprehensive order management. Implemented offline-first architecture ensuring seamless shopping experience even with poor connectivity.",
    playStoreUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description: "AI-powered fitness tracker with workout plans, nutrition tracking, and progress analytics",
    techStack: ["Flutter", "Dart", "GraphQL", "TensorFlow Lite", "SQLite"],
    metrics: [
      "50K+ active users with 85% retention rate",
      "AI suggestions improved workout completion by 40%",
      "Featured in App Store 'Health & Fitness' category"
    ],
    fullDescription: "Developed an intelligent fitness platform leveraging TensorFlow Lite for real-time exercise form detection and personalized workout recommendations. Integrated nutrition APIs for comprehensive health tracking and built social features for community engagement.",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },
  {
    id: 3,
    title: "Social Media Platform",
    description: "Real-time social networking app with stories, messaging, and content discovery",
    techStack: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    metrics: [
      "Scaled to 200K+ users with 99.9% uptime",
      "Average session time of 25 minutes",
      "Processed 1M+ media uploads with optimized CDN"
    ],
    fullDescription: "Created a full-stack social platform with real-time messaging, story features, and intelligent content feed. Implemented WebSocket connections for instant messaging, optimized media handling with AWS S3 and CloudFront, and built a recommendation engine for content discovery.",
    githubUrl: "#",
    playStoreUrl: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing mobile applications built with modern tech stacks, delivering exceptional user experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                {...project}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            {...selectedProject}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
