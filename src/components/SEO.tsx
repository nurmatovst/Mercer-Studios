import { Helmet } from "react-helmet-async";

const BASE_URL = "https://mercerstudios.uz";
const DEFAULT_IMAGE = `${BASE_URL}/logo.jpg`;
const LANGUAGES = ["en", "uz", "ru"] as const;

type Lang = (typeof LANGUAGES)[number];

interface SEOProps {
  /** Current language from useParams() */
  lng: string;
  /** Page title — do NOT include "| Mercer Studios", it's added automatically */
  title: string;
  /** Page description (1–2 sentences, 120–160 chars) */
  description: string;
  /** Path after the language prefix, e.g. "" for home, "projects" for /en/projects */
  path?: string;
  /** Optional OG image — defaults to logo.jpg */
  ogImage?: string;
  /** Set true on 404 / thank-you pages to prevent indexing */
  noIndex?: boolean;
}

const SEO = ({
  lng,
  title,
  description,
  path = "",
  ogImage = DEFAULT_IMAGE,
  noIndex = false,
}: SEOProps) => {
  const safeLng: Lang = LANGUAGES.includes(lng as Lang) ? (lng as Lang) : "en";
  const pagePath = path ? `/${path}` : "";
  const canonicalUrl = `${BASE_URL}/${safeLng}${pagePath}`;
  const fullTitle = `${title} | Mercer Studios`;

  return (
    <Helmet>
      {/* ── Basic ── */}
      <html lang={safeLng} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Canonical ── */}
      <link rel="canonical" href={canonicalUrl} />

      {/* ── hreflang (all pages must declare all languages) ── */}
      {LANGUAGES.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={l}
          href={`${BASE_URL}/${l}${pagePath}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${BASE_URL}/en${pagePath}`}
      />

      {/* ── Open Graph ── */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={safeLng} />
      <meta property="og:site_name" content="Mercer Studios" />

      {/* ── Twitter ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MercerStudios" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
