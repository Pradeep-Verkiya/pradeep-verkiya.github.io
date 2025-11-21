import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "Pradeep delivered exceptional work on our mobile app. His technical expertise and attention to detail resulted in a product that exceeded our expectations. Highly recommended!",
    company: "TechCorp",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, StartupXYZ",
    content: "Working with Pradeep was a game-changer for our startup. He not only built a robust app but also provided valuable insights that shaped our product strategy.",
    company: "StartupXYZ",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, FitLife",
    content: "The fitness app Pradeep built for us has been incredibly successful. His understanding of both technical requirements and user experience is outstanding.",
    company: "FitLife",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What clients say about working together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-smooth animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
