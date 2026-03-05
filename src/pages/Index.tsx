import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const validLanguages = ["en", "uz", "ru"];
    if (lng && validLanguages.includes(lng)) {
      if (i18n.language !== lng) {
        i18n.changeLanguage(lng);
      }
    } else if (lng && !validLanguages.includes(lng)) {
      navigate("/404");
    }
  }, [lng, i18n, navigate]);

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
