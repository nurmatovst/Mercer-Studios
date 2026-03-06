import { useEffect } from "react";
import { useLng } from "@/hooks/useLng";
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
const lng = useLng();
  const { t, i18n } = useTranslation();

  // ✅ Sync i18n language with the URL — but don't fight the language switcher
  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng]); // only re-run when URL lang changes, not on every i18n update

  return (
    <>
      <SEO
        lng={lng!}
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        path=""
        isHomePage={true} // ✅ enables extra JSON-LD WebSite schema
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