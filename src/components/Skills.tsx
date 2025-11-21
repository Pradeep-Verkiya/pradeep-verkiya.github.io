import { Code2, Smartphone, Database, Cloud, Zap, Shield } from "lucide-react";

const skillCategories = [
  {
    category: "Mobile Frameworks",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 95 },
      { name: "Flutter", level: 90 },
      { name: "Android (Kotlin/Java)", level: 85 },
    ],
  },
  {
    category: "Languages",
    icon: Code2,
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Dart", level: 85 },
      { name: "Kotlin", level: 80 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: Database,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "GraphQL", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    category: "State Management",
    icon: Zap,
    skills: [
      { name: "Redux / Redux Toolkit", level: 95 },
      { name: "MobX", level: 85 },
      { name: "Context API", level: 90 },
      { name: "Zustand", level: 80 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Firebase", level: 90 },
      { name: "AWS (S3, EC2, Lambda)", level: 85 },
      { name: "CI/CD (GitHub Actions)", level: 85 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    category: "Payment & Auth",
    icon: Shield,
    skills: [
      { name: "Stripe Integration", level: 90 },
      { name: "OAuth 2.0", level: 85 },
      { name: "JWT", level: 90 },
      { name: "Biometric Auth", level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive tech stack for building scalable mobile applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.category}
                className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-smooth animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
