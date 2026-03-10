import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./i18n/locales/en.json";
import uz from "./i18n/locales/uz.json";
import ru from "./i18n/locales/ru.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uz: { translation: uz },
      ru: { translation: ru },
    },
    detection: {
      // Priority order:
      // 1. path — e.g. /ru/projects (SEO URLs, returning visitors)
      // 2. localStorage — remembered choice from previous visit
      // 3. navigator — browser/OS language (new visitors)
      // 4. fallback to "en"
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"], // ✅ remember language choice for next visit
    },
    fallbackLng: "en",
    supportedLngs: ["en", "uz", "ru"], // ✅ reject anything else automatically
    nonExplicitSupportedLngs: true,    // ✅ allows "ru-RU" to match "ru"
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;