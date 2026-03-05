import { Link, useParams } from "react-router-dom";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseSection = () => {
  const { t } = useTranslation();
      const { lng } = useParams();
      const safeLng = lng || "en"; // ✅ fallback

  const benefitKeys = ["personalized", "proportion", "craft", "timeless", "seamless"];

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              {t("whyChoose.label")}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              {t("whyChoose.title")}
            </h2>
            <Link
              to={`/${safeLng}/start-project`}
              className="inline-block px-10 py-4 bg-charcoal text-cream text-sm tracking-widest uppercase hover:bg-charcoal-light transition-colors duration-300"
            >
              {t("whyChoose.cta")}
            </Link>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-6">
            {benefitKeys.map((key, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-background"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <p className="text-foreground">{t(`whyChoose.benefits.${key}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
