import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLng } from "@/hooks/useLng";
import { projectsData } from "@/data/projects"; // ✅ single source of truth
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { t } = useTranslation();
  const lng = useLng();

  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return <Navigate to={`/${lng}/projects`} replace />;

  const currentIndex = projectsData.findIndex((p) => p.id === projectId);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-background">
      <SEO
        lng={lng}
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
            src={project.images[0]}
            alt={t(project.titleKey)}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link
            to={`/${lng}/projects`}
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
          <h2 className="font-serif text-2xl text-foreground mb-8">{t("projectDetail.gallery")}</h2>
          {project.images.length > 1 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt={`${t(project.titleKey)} - ${index + 2}`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">{t("projectDetail.noImages")}</p>
          )}
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center border-t border-border pt-8">
            {prevProject ? (
              <Link
                to={`/${lng}/projects/${prevProject.id}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1">{t("projectDetail.previous")}</p>
                  <p className="font-serif text-lg">{t(prevProject.titleKey)}</p>
                </div>
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link
                to={`/${lng}/projects/${nextProject.id}`}
                className="flex items-center gap-3 text-right text-muted-foreground hover:text-foreground transition-colors"
              >
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1">{t("projectDetail.next")}</p>
                  <p className="font-serif text-lg">{t(nextProject.titleKey)}</p>
                </div>
                <ArrowRight size={20} />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto bg-secondary p-12 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{t("projectsPage.cta.title")}</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t("projectsPage.cta.description")}</p>
          <Link
            to={`/${lng}/start-project`}
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