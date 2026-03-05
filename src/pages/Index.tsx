import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
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
  const { lng } = useParams();
  const { t } = useTranslation();

  return (
    <>
      {/* ✅ SEO — replaces the old <Helmet> block */}
      <SEO
        lng={lng!}
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        path=""
      />

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
    </>
  );
};

export default Index;
