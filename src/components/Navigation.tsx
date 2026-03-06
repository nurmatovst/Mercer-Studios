import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLng } from "@/hooks/useLng";


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  // ✅ Extract lang from URL directly — same approach as LanguageSwitcher
  const activeLng = useLng();

  // ✅ Home page = /en or /uz or /ru (no further segments)
  const isHomePage = location.pathname === `/${activeLng}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = isHomePage
    ? [
        { href: "#about", label: t("nav.about") },
        { href: "#approach", label: t("nav.approach") },
        { href: "#services", label: t("nav.services") },
        { href: `/${activeLng}/projects`, label: t("nav.projects"), isRoute: true },
        { href: "#contact", label: t("nav.contact") },
      ]
    : [
        { href: `/${activeLng}`, label: t("nav.home"), isRoute: true },
        { href: `/${activeLng}/projects`, label: t("nav.projects"), isRoute: true },
        { href: `/${activeLng}/start-project`, label: t("nav.startProject"), isRoute: true },
      ];

  // ✅ Stable color classes — won't flicker on language switch
  const navTextClass = isScrolled
    ? "text-muted-foreground hover:text-foreground"
    : isHomePage
    ? "text-cream/80 hover:text-cream"
    : "text-charcoal/70 hover:text-charcoal";

  const logoTextClass = isScrolled
    ? "text-foreground"
    : isHomePage
    ? "text-cream/90"
    : "text-charcoal";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6">
        {/* Logo */}
        <Link
          to={`/${activeLng}`}
          className={`font-serif text-xl md:text-2xl tracking-wide transition-colors duration-300 ${logoTextClass}`}
        >
          Mercer <span className="text-gold">Studios</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className={`text-sm tracking-widest uppercase transition-colors duration-300 ${navTextClass}`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={`text-sm tracking-widest uppercase transition-colors duration-300 ${navTextClass}`}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <LanguageSwitcher textcolor={navTextClass} />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher textcolor={navTextClass} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.isRoute ? (
                <Link
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg tracking-widest uppercase text-foreground hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg tracking-widest uppercase text-foreground hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navigation;