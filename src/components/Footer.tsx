import { Instagram, Linkedin, Facebook } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Telegram } from "@/assets/Telegram";
import { useLng } from "@/hooks/useLng";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const safeLng = useLng(); // ✅ use the custom hook

  const quickLinks = [
    { key: "about", href: "#about" },
    { key: "approach", href: "#approach" },
    { key: "services", href: "#services" },
    { key: "projects", href: `${safeLng}/projects`, isRoute: true },
    { key: "contact", href: "#contact" },
  ];

  return (
    <footer className="bg-charcoal py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl text-cream mb-6 inline-block">
              Mercer <span className="text-gold">Studios</span>
            </Link>
            <p className="text-cream/60 max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream text-sm tracking-widest uppercase mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-cream/60 hover:text-gold transition-colors text-sm"
                    >
                      {t(`nav.${link.key}`)}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-cream/60 hover:text-gold transition-colors text-sm"
                    >
                      {t(`nav.${link.key}`)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-cream text-sm tracking-widest uppercase mb-6">
              {t("footer.followUs")}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mercer_architecture/#"
                target="_blank"
                className="w-10 h-10 border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/mercer-architectureuz"
                target="_blank"
                className="w-10 h-10 border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://t.me/mercer_architects"
                target="_blank"
                className="w-10 h-10 border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-colors"
                aria-label="Telegram"
              >
                <Telegram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">
            © {currentYear} Mercer Architects {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/40 hover:text-cream/60 text-sm transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-cream/40 hover:text-cream/60 text-sm transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
