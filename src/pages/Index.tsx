import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
