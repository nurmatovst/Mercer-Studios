import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Title */}
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              {t("about.label")}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              {t("about.title")}{" "}
              <span className="italic text-taupe">{t("about.titleHighlight")}</span>
            </h2>
          </div>

          {/* Right Column - Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("about.paragraph1")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.paragraph2")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.paragraph3")}
            </p>
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                "{t("about.quote")}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
