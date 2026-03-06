import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import projectBedroom from "@/assets/bedroom/photo_2026-02-06_20-21-46.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectLiving from "@/assets/livingroom/photo_2026-02-06_20-18-35.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectHospitality from "@/assets/kiosk/photo_2026-02-06_20-20-52.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectDining from "@/assets/project-dining.jpg";
import projectKids from "@/assets/kidsroom/photo_2026-02-06_20-21-36.jpg";
import projectHallway from "@/assets/hallway/photo_2026-02-06_20-20-02.jpg";
import projectHoney from "@/assets/honey/photo_2026-02-06_20-21-11.jpg";
import { useLng } from "@/hooks/useLng";

const projects = [
  {
    id: "serene-sanctuary",
    image: projectBedroom,
    titleKey: "projects.sereneSanctuary.title",
    categoryKey: "residential",
    location: "Tashkent, Uzbekistan",
    year: "2024",
    descriptionKey: "projects.sereneSanctuary.description",
  },
  {
    id: "modern-heritage",
    image: projectKitchen,
    titleKey: "projects.modernHeritage.title",
    categoryKey: "residential",
    location: "Almaty, Kazakhstan",
    year: "2024",
    descriptionKey: "projects.modernHeritage.description",
  },
  {
    id: "artisan-living",
    image: projectLiving,
    titleKey: "projects.artisanLiving.title",
    categoryKey: "hospitality",
    location: "Keles, Uzbekistan",
    year: "2023",
    descriptionKey: "projects.artisanLiving.description",
  },
  {
    id: "spa-retreat",
    image: projectBathroom,
    titleKey: "projects.spaRetreat.title",
    categoryKey: "residential",
    location: "Tashkent, Uzbekistan",
    year: "2024",
    descriptionKey: "projects.spaRetreat.description",
  },
  {
    id: "grand-atrium",
    image: projectHospitality,
    titleKey: "projects.grandAtrium.title",
    categoryKey: "commercial",
    location: "Tashkent, Uzbekistan",
    year: "2023",
    descriptionKey: "projects.grandAtrium.description",
  },
  {
    id: "executive-study",
    image: projectOffice,
    titleKey: "projects.executiveStudy.title",
    categoryKey: "commercial",
    location: "Tashkent, Uzbekistan",
    year: "2024",
    descriptionKey: "projects.executiveStudy.description",
  },
  {
    id: "intimate-gathering",
    image: projectDining,
    titleKey: "projects.intimateGathering.title",
    categoryKey: "residential",
    location: "Tashkent, Uzbekistan",
    year: "2023",
    descriptionKey: "projects.intimateGathering.description",
  },
  {
    id: "kidsRoom",
    image: projectKids,
    titleKey: "projects.kidsRoom.title",
    categoryKey: "residential",
    location: "Tashkent, Uzbekistan",
    year: "2025",
    descriptionKey: "projects.kidsRoom.description",
  },
  {
    id: "hallway",
    image: projectHallway,
    titleKey: "projects.hallway.title",
    categoryKey: "residential",
    location: "Tashkent, Uzbekistan",
    year: "2025",
    descriptionKey: "projects.hallway.description",
  },
  {
    id: "honey",
    image: projectHoney,
    titleKey: "projects.honey.title",
    categoryKey: "commercial",
    location: "Tashkent, Uzbekistan",
    year: "2025",
    descriptionKey: "projects.honey.description",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const { t } = useTranslation();
  const lng = useLng();
  const safeLng = lng || "en"; // ✅ fallback

  const categories = [
    { key: "all", label: t("projectsPage.all") },
    { key: "residential", label: t("projectsPage.residential") },
    { key: "hospitality", label: t("projectsPage.hospitality") },
    { key: "commercial", label: t("projectsPage.commercial") },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categoryKey === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      {/* ✅ SEO added here */}
      <SEO
        lng={lng!}
        title={t("seo.projects.title")}
        description={t("seo.projects.description")}
        path="projects"
      />

      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link
            to={`/${safeLng}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span className="text-sm tracking-widest uppercase">{t("startProject.backHome")}</span>
          </Link>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            {t("projectsPage.label")}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
            {t("projectsPage.title")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {t("projectsPage.description")}
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === category.key
                    ? "bg-charcoal text-cream"
                    : "bg-secondary text-muted-foreground hover:bg-muted"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/${safeLng}/projects/${project.id}`}
                className="group cursor-pointer block"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden mb-6">
                  <div className="aspect-[4/5]">
                    <img
                      src={project.image}
                      loading="lazy"
                      alt={t(project.titleKey)}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredProject === project.id ? "scale-105" : "scale-100"
                      }`}
                    />
                  </div>
                  <div
                    className={`absolute inset-0 bg-charcoal/40 flex items-end transition-opacity duration-500 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="p-6">
                      <span className="text-cream text-sm">{t(project.descriptionKey)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gold text-xs tracking-widest uppercase mb-1">
                      {t(`projectsPage.${project.categoryKey}`)}
                    </p>
                    <h3 className="font-serif text-xl text-foreground mb-1">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm">{project.location}</p>
                  </div>
                  <span className="text-muted-foreground text-sm">{project.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto bg-secondary p-12 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            {t("projectsPage.cta.title")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t("projectsPage.cta.description")}
          </p>
          <Link
            to={`/${safeLng}/start-project`}
            className="inline-flex items-center gap-3 px-10 py-4 bg-charcoal text-cream text-sm tracking-widest uppercase hover:bg-charcoal-light transition-colors"
          >
            {t("projectsPage.cta.button")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
