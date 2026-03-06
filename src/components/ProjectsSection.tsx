import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import projectBedroom from "@/assets/bedroom/photo_2026-02-06_20-21-46.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectLiving from "@/assets/livingroom/photo_2026-02-06_20-18-35.jpg";
import { useLng } from "@/hooks/useLng";

const projects = [
  {
    image: projectBedroom,
    titleKey: "projects.sereneSanctuary.title",
    categoryKey: "projectsPage.residential",
    location: "Tashkent, Uzbekistan",
  },
  {
    image: projectKitchen,
    titleKey: "projects.modernHeritage.title",
    categoryKey: "projectsPage.residential",
    location: "Almaty, Kazakhstan",
  },
  {
    image: projectLiving,
    titleKey: "projects.artisanLiving.title",
    categoryKey: "projectsPage.residential",
    location: "Keles, Uzbekistan",
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();
    const safeLng = useLng();

  return (
    <section id="projects" className="section-padding bg-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            {t("projectsSection.label")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            {t("projectsSection.title")}
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            {t("projectsSection.description")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.titleKey}
              to={`/${safeLng}/projects`}
              className="group relative overflow-hidden cursor-pointer block"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={project.image}
                  loading="lazy"
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-500 flex items-end">
                <div className="p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">
                    {t(project.categoryKey)}
                  </p>
                  <h3 className="font-serif text-2xl text-cream mb-1">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-cream/70 text-sm">{project.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to={`/${safeLng}/projects`}
            className="inline-block px-10 py-4 border border-cream/30 text-cream text-sm tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all duration-300"
          >
            {t("projectsSection.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
