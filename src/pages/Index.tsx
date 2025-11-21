import Hero from "@/components/Hero";
import StatsRow from "@/components/StatsRow";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CaseStudySpotlight from "@/components/CaseStudySpotlight";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsRow />
      <Projects />
      <Skills />
      <CaseStudySpotlight />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
