import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - CTA */}
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              {t("contactSection.label")}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              {t("contactSection.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {t("contactSection.description")}
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contactSection.email")}</p>
                  <a
                    href="mailto:hello@maisonandco.com"
                    className="text-foreground hover:text-gold transition-colors"
                  >
                    hello@mercerstudios.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contactSection.phone")}</p>
                  <a
                    href="tel:+998777532611"
                    className="text-foreground hover:text-gold transition-colors"
                  >
                    +998 77 753 26 11
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contactSection.location")}</p>
                  <p className="text-foreground">Tashkent, Uzbekistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-secondary p-10 lg:p-12">
            <h3 className="font-serif text-2xl text-foreground mb-8">
              {t("contactSection.form.send")}
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    {t("contactSection.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-colors"
                    placeholder={t("contactSection.form.namePlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    {t("contactSection.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-colors"
                    placeholder={t("contactSection.form.emailPlaceholder")}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
                  {t("contactSection.form.subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-colors"
                  placeholder={t("contactSection.form.subjectPlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  {t("contactSection.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder={t("contactSection.form.messagePlaceholder")}
                />
              </div>
              <button
                type="submit"
                className="w-full px-10 py-4 bg-charcoal text-cream text-sm tracking-widest uppercase hover:bg-charcoal-light transition-colors duration-300"
              >
                {t("contactSection.form.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
