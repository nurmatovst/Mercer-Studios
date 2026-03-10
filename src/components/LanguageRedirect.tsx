import { Navigate } from "react-router-dom";

const VALID_LANGS = ["en", "uz", "ru"];

/**
 * Detects the user's browser language and redirects to the correct version.
 * Falls back to "en" if their language is not supported.
 *
 * Priority:
 * 1. Previously saved language in localStorage (returning visitors)
 * 2. Browser/OS language setting (new visitors)
 * 3. "en" as fallback
 */
const LanguageRedirect = () => {
  // 1. Check if user has visited before and chose a language
  const saved = localStorage.getItem("i18nextLng");
  if (saved && VALID_LANGS.includes(saved)) {
    return <Navigate to={`/${saved}`} replace />;
  }

  // 2. Read browser language (e.g. "ru-RU", "uz", "en-US", "fr-FR")
  const browserLang = navigator.language || navigator.languages?.[0] || "en";

  // Extract just the 2-letter code: "ru-RU" → "ru"
  const langCode = browserLang.split("-")[0].toLowerCase();

  // 3. Use it if supported, otherwise fall back to "en"
  const detectedLang = VALID_LANGS.includes(langCode) ? langCode : "en";

  return <Navigate to={`/${detectedLang}`} replace />;
};

export default LanguageRedirect;