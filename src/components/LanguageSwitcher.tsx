import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const languages = [
  { code: "en", label: "EN", fullLabel: "English" },
  { code: "ru", label: "RU", fullLabel: "Русский" },
  { code: "uz", label: "UZ", fullLabel: "O'zbek" },
];

const VALID_LANGS = ["en", "uz", "ru"];

interface LanguageSwitcherProps {
  textcolor?: string;
}

const LanguageSwitcher = ({ textcolor }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Extract language directly from URL — works on every page reliably
  // /ru/projects → "ru" | /en → "en" | /uz/projects/hallway → "uz"
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentLngFromUrl = VALID_LANGS.includes(pathSegments[0]) ? pathSegments[0] : "en";

  const currentLang = languages.find((l) => l.code === currentLngFromUrl) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);

    // ✅ Swap only the lang prefix, keep full path intact
    // /en/projects/hallway → /ru/projects/hallway
    const newPath = location.pathname.replace(`/${currentLngFromUrl}`, `/${code}`);
    navigate(newPath);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 text-sm tracking-widest uppercase transition-colors duration-300 ${textcolor}`}
      >
        <Globe size={16} />
        <span>{currentLang.label}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-background border border-border shadow-lg min-w-[120px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full px-4 py-2.5 text-left text-sm hover:bg-secondary transition-colors ${
                lang.code === currentLngFromUrl ? "text-gold" : "text-foreground"
              }`}
            >
              {lang.fullLabel}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;