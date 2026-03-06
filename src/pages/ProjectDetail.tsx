import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLng } from "@/hooks/useLng";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import projectBedroom from "@/assets/bedroom/photo_2026-02-06_20-21-46.jpg";
import projectBedroom2 from "@/assets/bedroom/photo_2026-02-06_20-22-00.jpg";
import projectBedroom3 from "@/assets/bedroom/photo_2026-02-06_20-22-02.jpg";
import projectBedroom4 from "@/assets/bedroom/photo_2026-02-06_20-22-04.jpg";

import projectKitchen from "@/assets/project-kitchen.jpg";

import projectLiving from "@/assets/livingroom/photo_2026-02-06_20-18-35.jpg";
import projectLiving2 from "@/assets/livingroom/photo_2026-02-06_20-19-37.jpg";
import projectLiving3 from "@/assets/livingroom/photo_2026-02-06_20-19-41.jpg";
import projectLiving4 from "@/assets/livingroom/photo_2026-02-06_20-19-43.jpg";
import projectLiving5 from "@/assets/livingroom/photo_2026-02-06_20-19-45.jpg";
import projectLiving6 from "@/assets/livingroom/photo_2026-02-06_20-19-48.jpg";
import projectLiving7 from "@/assets/livingroom/photo_2026-02-06_20-19-50.jpg";
import projectLiving8 from "@/assets/livingroom/photo_2026-02-06_20-19-52.jpg";
import projectLiving9 from "@/assets/livingroom/photo_2026-02-06_20-19-55.jpg";
import projectLiving10 from "@/assets/livingroom/photo_2026-02-06_20-19-56.jpg";

import projectBathroom from "@/assets/project-bathroom.jpg";

import projectKiosk from "@/assets/kiosk/photo_2026-02-06_20-20-52.jpg";
import projectKiosk2 from "@/assets/kiosk/photo_2026-02-06_20-20-57.jpg";
import projectKiosk3 from "@/assets/kiosk/photo_2026-02-06_20-20-59.jpg";
import projectKiosk4 from "@/assets/kiosk/photo_2026-02-06_20-21-01.jpg";
import projectKiosk5 from "@/assets/kiosk/photo_2026-02-06_20-21-04.jpg";
import projectKiosk6 from "@/assets/kiosk/photo_2026-02-06_20-21-06.jpg";
import projectKiosk7 from "@/assets/kiosk/photo_2026-02-06_20-21-08.jpg";

import projectHoney from "@/assets/honey/photo_2026-02-06_20-21-11.jpg";
import projectHoney2 from "@/assets/honey/photo_2026-02-06_20-21-15.jpg";

import projectDining from "@/assets/project-dining.jpg";
import projectOffice from "@/assets/project-office.jpg";

import projectKidsRoom from "@/assets/kidsroom/photo_2026-02-06_20-21-36.jpg";
import projectKidsRoom2 from "@/assets/kidsroom/photo_2026-02-06_20-21-40.jpg";
import projectKidsRoom3 from "@/assets/kidsroom/photo_2026-02-06_20-21-42.jpg";
import projectKidsRoom4 from "@/assets/kidsroom/photo_2026-02-06_20-21-44.jpg";

import projectHallWay from "@/assets/hallway/photo_2026-02-06_20-20-02.jpg";
import projectHallWay2 from "@/assets/hallway/photo_2026-02-06_20-20-19.jpg";
import projectHallWay3 from "@/assets/hallway/photo_2026-02-06_20-20-21.jpg";
import projectHallWay4 from "@/assets/hallway/photo_2026-02-06_20-20-23.jpg";
import projectHallWay5 from "@/assets/hallway/photo_2026-02-06_20-20-25.jpg";
import projectHallWay6 from "@/assets/hallway/photo_2026-02-06_20-20-27.jpg";
import projectHallWay7 from "@/assets/hallway/photo_2026-02-06_20-20-30.jpg";
import projectHallWay8 from "@/assets/hallway/photo_2026-02-06_20-20-32.jpg";
import projectHallWay9 from "@/assets/hallway/photo_2026-02-06_20-20-34.jpg";


const projectsData = [
  {
    id: "serene-sanctuary",
    titleKey: "projects.sereneSanctuary.title",
    categoryKey: "residential",
    location: "Tashkent, Uzbekistan",
    year: "2024",
    descriptionKey: "projects.sereneSanctuary.description",
    fullDescriptionKey: "projects.sereneSanctuary.fullDescription",
    images: [projectBedroom, projectBedroom2, projectBedroom3, projectBedroom4],
    details: {
      area: "120 m²",
      duration: "3 weeks",
      scope: ["Interior Design", "Custom Furniture", "Lighting Design"],
    },
  },
  {
    id: "modern-heritage",
    titleKey: "projects.modernHeritage.title",
    categoryKey: "residential",
    location: "Tashkent, Uzbekistan",
    year: "2024",
    descriptionKey: "projects.modernHeritage.description",
    fullDescriptionKey: "projects.modernHeritage.fullDescription",
    images: [projectKitchen],
    details: {
      area: "80 m²",
      duration: "2 weeks",
      scope: ["Kitchen Design", "Material Selection", "Space Planning"],
    },
  },
  {
    id: "artisan-living",
    titleKey: "projects.artisanLiving.title",
    categoryKey: "residential",
    location: "Tashkent, Uzbekistan",
    year: "2023",
    descriptionKey: "projects.artisanLiving.description",
    fullDescriptionKey: "projects.artisanLiving.fullDescription",
    images: [projectLiving, projectLiving2, projectLiving3, projectLiving4, projectLiving5, projectLiving6, projectLiving7, projectLiving8, projectLiving9, projectLiving10],
    details: {
      area: "65 m²",
      duration: "2 weeks",
      scope: ["Living Space Design", "Art Curation", "Furniture Selection"],
    },
  },
  {
    id: "spa-retreat",
    titleKey: "projects.spaRetreat.title",
    categoryKey: "residential",
    location: "Tashkent, Uzbekistan",
    year: "2024",
    descriptionKey: "projects.spaRetreat.description",
    fullDescriptionKey: "projects.spaRetreat.fullDescription",
    images: [projectBathroom],
    details: {
      area: "100 m²",
      duration: "2 weeks",
      scope: ["Bathroom Design", "Material Selection", "Wellness Integration"],
    },
  },
  {
    id: "grand-atrium",
    titleKey: "projects.grandAtrium.title",
    categoryKey: "hospitality",
    location: "Tashkent, Uzbekistan",
    year: "2023",
    descriptionKey: "projects.grandAtrium.description",
    fullDescriptionKey: "projects.grandAtrium.fullDescription",
    images: [projectKiosk, projectKiosk2, projectKiosk3, projectKiosk4, projectKiosk5, projectKiosk6, projectKiosk7],
    details: {
      area: "5 m²",
      duration: "1 week",
      scope: ["Hospitality Design", "Lighting Design", "Custom Installations"],
    },
  },
  {
    id: "executive-study",
    titleKey: "projects.executiveStudy.title",
    categoryKey: "commercial",
    location: "Tashkent, Uzbekistan",
    year: "2024",
    descriptionKey: "projects.executiveStudy.description",
    fullDescriptionKey: "projects.executiveStudy.fullDescription",
    images: [projectOffice],
    details: {
      area: "95 m²",
      duration: "2 weeks",
      scope: ["Office Design", "Custom Millwork", "Acoustic Solutions"],
    },
  },
  {
    id: "intimate-gathering",
    titleKey: "projects.intimateGathering.title",
    categoryKey: "residential",
    location: "Tashkent, Uzbekistan",
    year: "2023",
    descriptionKey: "projects.intimateGathering.description",
    fullDescriptionKey: "projects.intimateGathering.fullDescription",
    images: [projectDining],
    details: {
      area: "82 m²",
      duration: "2 weeks",
      scope: ["Dining Room Design", "Furniture Design", "Lighting"],
    },
  },
  {
    id: "honey",
    titleKey: "projects.honey.title",
    categoryKey: "residential",
    location: "Tashkent, Uzbekistan",
    year: "2023",
    descriptionKey: "projects.honey.description",
    fullDescriptionKey: "projects.honey.fullDescription",
    images: [projectHoney, projectHoney2],
    details: {
      area: "20 m²",
      duration: "2 weeks",
      scope: ["Honey Commercial Room Design", "Furniture Design", "Lighting"],
    },
  },
  {
    id: "kidsRoom",
    titleKey: "projects.kidsRoom.title",
    categoryKey: "residential",
    location: "Tashkent, Uzbekistan",
    year: "2023",
    descriptionKey: "projects.kidsRoom.description",
    fullDescriptionKey: "projects.kidsRoom.fullDescription",
    images: [projectKidsRoom, projectKidsRoom2, projectKidsRoom3, projectKidsRoom4],
    details: {
      area: "76 m²",
      duration: "2 weeks",
      scope: ["Kids Room Design", "Furniture Design", "Lighting"],
    },
  },
  {
    id: "hallway",
    titleKey: "projects.hallway.title",
    categoryKey: "residential",
    location: "Tashkent, Uzbekistan",
    year: "2023",
    descriptionKey: "projects.hallway.description",
    fullDescriptionKey: "projects.hallway.fullDescription",
    images: [projectHallWay, projectHallWay2, projectHallWay3, projectHallWay4, projectHallWay5, projectHallWay6, projectHallWay7, projectHallWay8, projectHallWay9],
    details: {
      area: "90 m²",
      duration: "2 weeks",
      scope: ["Hallway Design", "Furniture Design", "Lighting"],
    },
  },
];

const ProjectDetail = () => {
  const { projectId } = useParams(); // ✅ added lng
  const lng = useLng();
  const { t } = useTranslation();

  const project = projectsData.find((p) => p.id === projectId);
  const safeLng = lng || "en"; // ✅ fallback

  if (!project) {
    return <Navigate to={`/${safeLng}/projects`} replace />;
  }

  const currentIndex = projectsData.findIndex((p) => p.id === projectId);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-background">
      {/* ✅ SEO — uses project's own cover image and translated title/description */}
      <SEO
        lng={lng!}
        title={t(project.titleKey)}
        description={t(project.descriptionKey)}
        path={`projects/${project.id}`}
        ogImage={project.images[0]}
      />

      <Navigation />

      {/* Hero Image */}
      <section className="pt-24">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
          loading="lazy"
            src={project.images[0]}
            alt={t(project.titleKey)}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link
            to={`/${safeLng}/projects`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span className="text-sm tracking-widest uppercase">{t("projectDetail.backToProjects")}</span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
                {t(`projectsPage.${project.categoryKey}`)}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                {t(project.titleKey)}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t(project.fullDescriptionKey)}
              </p>
            </div>

            <div className="bg-secondary p-8">
              <h3 className="font-serif text-xl text-foreground mb-6">{t("projectDetail.details")}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide mb-1">{t("projectDetail.location")}</p>
                  <p className="text-foreground">{project.location}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide mb-1">{t("projectDetail.year")}</p>
                  <p className="text-foreground">{project.year}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide mb-1">{t("projectDetail.area")}</p>
                  <p className="text-foreground">{project.details.area}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide mb-1">{t("projectDetail.duration")}</p>
                  <p className="text-foreground">{project.details.duration}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide mb-1">{t("projectDetail.scope")}</p>
                  <ul className="text-foreground">
                    {project.details.scope.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl text-foreground mb-8">
            {t("projectDetail.gallery")}
          </h2>
          {project.images.length > 1 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) =>
                image ? (
                  <div key={index} className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      loading="lazy"
                      alt={`${t(project.titleKey)} - ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ) : null
              )}
            </div>
          ) : (
            <p className="text-foreground">No additional images available</p>
          )}
        </div>
      </section>

      {/* Navigation */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center border-t border-border pt-8">
            {prevProject ? (
              <Link
                to={`/${safeLng}/projects/${prevProject.id}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1">{t("projectDetail.previous")}</p>
                  <p className="font-serif text-lg">{t(prevProject.titleKey)}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                to={`/${safeLng}/projects/${nextProject.id}`}
                className="flex items-center gap-3 text-right text-muted-foreground hover:text-foreground transition-colors"
              >
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1">{t("projectDetail.next")}</p>
                  <p className="font-serif text-lg">{t(nextProject.titleKey)}</p>
                </div>
                <ArrowRight size={20} />
              </Link>
            ) : (
              <div />
            )}
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

export default ProjectDetail;
