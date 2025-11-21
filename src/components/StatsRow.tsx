import { TrendingUp, Rocket, Star } from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "Years Experience", value: "5+" },
  { icon: Rocket, label: "Apps Launched", value: "20+" },
  { icon: Star, label: "GitHub Stars", value: "1.2K" },
];

const StatsRow = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-smooth animate-fade-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsRow;
