import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          fetchPriority="high"
          alt="Luxury interior design living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      {/* Content */}
     <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto pt-32 pb-24">
         <p className="text-cream/80 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 leading-relaxed">
          {t("hero.subtitle")}
        </p>
        <h1 className="font-serif text-3xl md:text-6xl lg:text-7xl text-cream leading-tight mb-8">
          {t("hero.title1")}{" "}
          <span className="italic text-gold-light">{t("hero.meaningful")}</span>{" "}
          {t("hero.and")}{" "}
          <span className="italic text-gold-light">{t("hero.beautiful")}</span>
        </h1>
        <p className="text-cream/80 text-base md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          {t("hero.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-10 py-4 bg-cream text-charcoal text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300"
          >
            {t("hero.viewWork")}
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border border-cream/50 text-cream text-sm tracking-widest uppercase hover:bg-cream/10 transition-all duration-300"
          >
            {t("hero.getInTouch")}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-cream/30 mx-auto mb-3" />
        <span className="text-cream/50 text-xs tracking-widest uppercase">{t("hero.scroll")}</span>
      </div>
    </section>
  );
};

export default HeroSection;