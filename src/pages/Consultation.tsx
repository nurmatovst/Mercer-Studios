import { useTranslation } from 'react-i18next';
import { Calendar, MessageCircle, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect } from "react";
import { useLng } from '@/hooks/useLng';

const Consultation = () => {
  const { t } = useTranslation();
  const lng = useLng();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lng={lng}
        title={t("seo.consultation.title")}
        description={t("seo.consultation.description")}
        path="consultation"
      />

      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link
            to={`/${lng}/start-project`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('consultation.back')}
          </Link>

          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              {t('consultation.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('consultation.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Calendly Section */}
            <div className="bg-card border border-border rounded-lg p-4 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-display text-xl md:text-2xl text-foreground">
                    {t('consultation.calendly.title')}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {t('consultation.calendly.subtitle')}
                  </p>
                </div>
              </div>

              {/* ✅ Calendly fix: overflow-x-auto wrapper so it scrolls on small screens
                  instead of breaking the layout. Removed fixed minWidth from inline style. */}
              <div className="overflow-x-auto -mx-4 md:mx-0">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/nurmatovsaidamirxont/mercer-consultations?text_color=3e3c20&primary_color=1a1a1a"
                  style={{ minWidth: "320px", height: "500px" }}
                />
              </div>
            </div>

            {/* Contact Options Section */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="font-display text-2xl text-foreground mb-2">
                  {t('consultation.contact.title')}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('consultation.contact.subtitle')}
                </p>

                <div className="space-y-6">
                  {/* Telegram */}
                  <a
                    href="https://t.me/mercer_architects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-border hover:border-accent/50 hover:bg-secondary/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#0088cc]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#0088cc]/20 transition-colors">
                      <MessageCircle className="w-6 h-6 text-[#0088cc]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground">Telegram</h3>
                      <p className="text-muted-foreground text-sm">@mercermanager</p>
                    </div>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">→</span>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+998777532611"
                    className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-border hover:border-accent/50 hover:bg-secondary/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground">{t('consultation.contact.phone')}</h3>
                      <p className="text-muted-foreground text-sm">+998 77 753 26 11</p>
                    </div>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">→</span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:hello@mercerarch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-border hover:border-accent/50 hover:bg-secondary/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground">{t('consultation.contact.email')}</h3>
                      <p className="text-muted-foreground text-sm">hello@mercerarch.com</p>
                    </div>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">→</span>
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                <h3 className="font-display text-lg text-foreground mb-2">
                  {t('consultation.info.title')}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('consultation.info.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Consultation;