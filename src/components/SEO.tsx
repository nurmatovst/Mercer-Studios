import { Helmet } from "react-helmet-async";

const BASE_URL = "https://mercerstudios.uz";
const DEFAULT_IMAGE = `${BASE_URL}/logo.jpg`;
const LANGUAGES = ["en", "uz", "ru"] as const;

type Lang = (typeof LANGUAGES)[number];

interface SEOProps {
  lng: string;
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  /** Pass true only on the home page for richer business schema */
  isHomePage?: boolean;
}

const SEO = ({
  lng,
  title,
  description,
  path = "",
  ogImage = DEFAULT_IMAGE,
  noIndex = false,
  isHomePage = false,
}: SEOProps) => {
  const safeLng: Lang = LANGUAGES.includes(lng as Lang) ? (lng as Lang) : "en";
  const pagePath = path ? `/${path}` : "";
  const canonicalUrl = `${BASE_URL}/${safeLng}${pagePath}`;
  const fullTitle = `${title} | Mercer Studios`;

  // ── JSON-LD: appears on every page ──
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    "name": "Mercer Studios",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.jpg`,
    "image": `${BASE_URL}/logo.jpg`,
    "description": "Interior design and architecture studio creating functional and beautiful spaces in Tashkent, Uzbekistan.",
    "telephone": "+998777532611",
    "email": "hello@mercerstudios.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tashkent",
      "addressCountry": "UZ"
    },
    "sameAs": [
      "https://t.me/mercer_architects"
    ],
    "priceRange": "$$$$",
    "areaServed": ["Uzbekistan", "Kazakhstan"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Interior Design Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Interior Design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Architecture & Space Planning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "3D Rendering & Visualisation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bespoke Furniture & Feature Design" } }
      ]
    }
  };

  // ── JSON-LD: only on home page ──
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mercer Studios",
    "url": BASE_URL,
    "inLanguage": ["en", "uz", "ru"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${BASE_URL}/en/projects`
    }
  };

  return (
    <Helmet>
      {/* ── Basic ── */}
      <html lang={safeLng} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Canonical ── */}
      <link rel="canonical" href={canonicalUrl} />

      {/* ── hreflang ── */}
      {LANGUAGES.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={l}
          href={`${BASE_URL}/${l}${pagePath}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/en${pagePath}`} />

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

      {/* ── JSON-LD: Organization (every page) ── */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* ── JSON-LD: WebSite (home page only) ── */}
      {isHomePage && (
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;