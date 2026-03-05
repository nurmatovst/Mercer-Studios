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
      // SEO uchun eng muhimi: birinchi URL-dan tilni qidiradi
      order: ["path", "cookie", "localStorage", "navigator"],
      lookupFromPathIndex: 0, 
      caches: ["cookie"],
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;