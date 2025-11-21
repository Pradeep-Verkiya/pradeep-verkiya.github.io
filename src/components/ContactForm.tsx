import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Calendar, Github, Linkedin, Twitter } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0].toString()] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    setErrors({});
    
    // [CONTACT EMAIL] - Replace with actual email sending logic
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Get in touch and let's create something amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 rounded-2xl space-y-6 animate-fade-up">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="glass-card border-glass-border focus:border-primary/50"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-destructive text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="glass-card border-glass-border focus:border-primary/50"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-destructive text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className="glass-card border-glass-border focus:border-primary/50 resize-none"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-destructive text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 group"
              size="lg"
            >
              Send Message
              <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:contact@pradeepkumar.dev"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label="Email Pradeep Kumar"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">contact@pradeepkumar.dev</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label="Schedule a call with Pradeep Kumar"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Schedule Call</div>
                    <div className="font-medium">Book a Meeting</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Connect Online</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass-card border-glass-border hover:border-primary/50 flex items-center justify-center hover:scale-110 transition-smooth"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass-card border-glass-border hover:border-primary/50 flex items-center justify-center hover:scale-110 transition-smooth"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass-card border-glass-border hover:border-primary/50 flex items-center justify-center hover:scale-110 transition-smooth"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon rounded-full animate-pulse-glow" />
                  <span className="text-sm">Available for freelance work</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon rounded-full animate-pulse-glow" />
                  <span className="text-sm">Open to long-term contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon rounded-full animate-pulse-glow" />
                  <span className="text-sm">Response within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
