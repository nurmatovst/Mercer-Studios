import { useTranslation } from "react-i18next";

const ApproachSection = () => {
  const { t } = useTranslation();

  const approaches = [
    {
      number: "01",
      key: "collaborative",
    },
    {
      number: "02",
      key: "holistic",
    },
    {
      number: "03",
      key: "timeless",
    },
    {
      number: "04",
      key: "personal",
    },
  ];

  return (
    <section id="approach" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            {t("approach.label")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground max-w-3xl mx-auto">
            {t("approach.title")}
          </h2>
        </div>

        {/* Approach Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach) => (
            <div
              key={approach.number}
              className="group p-8 bg-background hover:bg-charcoal transition-all duration-500 cursor-default"
            >
              <span className="text-gold text-sm tracking-widest font-medium">
                {approach.number}
              </span>
              <h3 className="font-serif text-xl text-foreground group-hover:text-cream mt-4 mb-4 transition-colors duration-500">
                {t(`approach.${approach.key}.title`)}
              </h3>
              <p className="text-muted-foreground group-hover:text-cream/70 text-sm leading-relaxed transition-colors duration-500">
                {t(`approach.${approach.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
