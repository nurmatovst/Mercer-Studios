import { Home, Compass, Image, Palette, Armchair, ClipboardList } from "lucide-react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Home, key: "residential" },
    { icon: Compass, key: "architecture" },
    { icon: Image, key: "rendering" },
    { icon: Palette, key: "materials" },
    { icon: Armchair, key: "furniture" },
    { icon: ClipboardList, key: "management" },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              {t("services.label")}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              {t("services.title")}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.key}
              className="group bg-background p-10 hover:bg-secondary transition-colors duration-300"
            >
              <service.icon
                className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-xl text-foreground mb-3">
                {t(`services.${service.key}`)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
