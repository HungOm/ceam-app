// SEO.tsx
import React, { FC, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import FaviconLinks from './FaviconLinks';
import WebSiteSchema from './WebSiteSchema';
import { commonKeywords } from '../../commonKeywords';

// Define TypeScript interfaces for props
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  lang?: string;
  metaTags?: Array<{ name?: string; property?: string; content: string; httpEquiv?: string }>;
  linkTags?: Array<{ rel: string; href: string; hrefLang?: string; crossOrigin?: 'anonymous' | 'use-credentials' }>;
  scriptTags?: Array<{ type: string; innerHTML: string }>;
}

const BASE_URL = 'https://ceamalaysia.org';
const LOGO_URL = `${BASE_URL}/images/cea-logo.png`;
const SOCIAL_SHARE_IMAGE = `${BASE_URL}/images/cea-social-share.png`;

// Define the organization schema outside the component to avoid re-creation
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO", // Use a single type or separate schemas if multiple are needed
  "name": "K'Cho Ethnic Association Malaysia",
  "alternateName": "CEAM",
  "url": BASE_URL,
  "logo": LOGO_URL,
  "sameAs": [
    "https://www.facebook.com/ceamalaysia",
    "https://twitter.com/ceamalaysia"
  ],
  "description": "CEAM supports K'Cho, Chin, and other Myanmar refugees in Malaysia, focusing on Dai/Daai, Mün, Kaang communities from Mindat, Kanpetlet, and other Chin State regions. We provide humanitarian aid, cultural preservation, and community support services.",
  "areaServed": "Malaysia",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+60 11-6812 8634",
    "contactType": "community support"
  }
};

const Seo: FC<SEOProps> = ({
  title = "CEAM - Supporting K'Cho & Chin Refugees in Malaysia | Myanmar Conflict Aid",
  description = "CEAM provides vital support to K'Cho, Chin, and other Myanmar refugees in Malaysia. We offer assistance to Dai/Daai, Mün, Kaang communities from Mindat, Kanpetlet, and various Chin State regions, focusing on humanitarian aid, education, cultural preservation, and community development in the context of ongoing conflicts in Myanmar.",
  keywords = commonKeywords,
  lang = 'en',
  metaTags = [],
  linkTags = [],
  scriptTags = [],
}) => {
  // Memoize the keywords string to prevent unnecessary recalculations
  const keywordsContent = useMemo(() => keywords.join(", "), [keywords]);

  // Default link tags
  const defaultLinkTags = [
    { rel: 'canonical', href: BASE_URL },
    { rel: 'alternate', hrefLang: 'en', href: `${BASE_URL}/en` },
    { rel: 'alternate', hrefLang: 'ms', href: `${BASE_URL}/ms` },
  ];

  // Merge default link tags with additional linkTags
  const allLinkTags = [...defaultLinkTags, ...linkTags];

  // Default meta tags
  const defaultMetaTags = [
    { charSet: 'utf-8' }, // Adding charset as a meta tag
    { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    { name: 'google-site-verification', content: 'HzImGeUsmCR8sd4oCmARzvMOL8WemXqNNclqFOaeUbc' },
    { name: 'description', content: description },
    { name: 'keywords', content: keywordsContent },
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'author', content: "K'Cho Ethnic Association Malaysia" },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    // Open Graph Tags
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${BASE_URL}/` },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: SOCIAL_SHARE_IMAGE },
    { property: 'og:image:alt', content: "CEAM - Supporting K'Cho & Chin Refugees" },
    { property: 'og:site_name', content: "K'Cho Ethnic Association Malaysia" },
    { property: 'og:locale', content: 'en_US' },
    // Twitter Card Tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@ceamalaysia' },
    { name: 'twitter:url', content: `${BASE_URL}/` },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: SOCIAL_SHARE_IMAGE },
    { name: 'twitter:image:alt', content: "CEAM - Supporting K'Cho & Chin Refugees" },
    // Security Meta Tags
    { httpEquiv: 'Content-Security-Policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;" },
    { httpEquiv: 'X-Frame-Options', content: 'SAMEORIGIN' },
    { httpEquiv: 'X-XSS-Protection', content: '1; mode=block' },
  ];

  // Merge default meta tags with additional metaTags
  const allMetaTags = [...defaultMetaTags, ...metaTags];

  // Default script tags
  const defaultScriptTags = [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(organizationSchema),
    },
  ];

  // Merge default script tags with additional scriptTags
  const allScriptTags = [...defaultScriptTags, ...scriptTags];

  return (
    <>
      <Helmet
        htmlAttributes={{ lang }}
        title={title}
        titleTemplate={`%s | K'Cho Ethnic Association Malaysia`}
        meta={allMetaTags}
        link={allLinkTags}
        script={allScriptTags.map((script) => ({
          type: script.type,
          innerHTML: script.innerHTML,
        }))}
      >

      </Helmet>
      <FaviconLinks />

        {/* Preconnect and DNS Prefetch */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <WebSiteSchema />
    </>
  );
};

export default Seo;
