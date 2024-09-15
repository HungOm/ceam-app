import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO, Community Based Organization",
    "name": "K'Cho Ethnic Association Malaysia",
    "alternateName": "CEAM",
    "url": "https://ceamalaysia.org",
    "logo": "https://ceamalaysia.org/images/cea-logo.png",
    "sameAs": [
      "https://www.facebook.com/ceamalaysia",
      "https://twitter.com/ceamalaysia"
    ],
    "description": "CEAM supports K'Cho, Chin, and other Myanmar refugees in Malaysia, focusing on Dai/Daai, Mün, Kaang communities from Mindat, Kanpetlet, and other Chin State regions. We provide humanitarian aid, cultural preservation, and community support services.",
    "areaServed": "Malaysia",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+60-XX-XXXXXXX",
      "contactType": "customer support"
    }
  };

  const keywords = [
    "K'Cho refugees", "Chin refugees", "Myanmar refugees", "Malaysia refugees",
    "Dai", "Daai", "Mün", "M'Kaang", "Kaang", "Mindat", "Kanpetlet", "Chin State",
    "CEAM", "Refugee Support", "Asylum Seekers", "Humanitarian Aid",
    "Cultural Preservation", "Chin Human Rights", "Myanmar Politics",
    "Civil Wars", "CDF - Mindat", "Battle of Mindat", "Kuki",
    "Chin subtribes", "Zo", "Laimi", "Mizo", "Zomi", "Asho", "Cho", "Khumi",
    "Matupi", "Paletwa", "Hakha", "Thantlang", "Falam", "Tedim", "Tonzang",
    "Refugee Education", "Southeast Asian Migration", "Human Rights",
    "Community Development", "Ethnic Minorities", "Social Services",
    "Refugee Integration", "Language Support", "Legal Aid for Refugees",
    "UNHCR Registration", "Durable Solutions", "Resettlement",
    "Myanmar Conflict", "Ethnic Armed Organizations", "Chin National Front",
    "Chin National Army", "Arakan Army", "Rakhine Conflict"
  ].join(", ");

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Added Google site verification meta tag */}
      <meta
        name="google-site-verification"
        content="HzImGeUsmCR8sd4oCmARzvMOL8WemXqNNclqFOaeUbc"
      />
      <link rel="canonical" href="https://ceamalaysia.org" />

      <title>
        CEAM - Supporting K'Cho & Chin Refugees in Malaysia | Myanmar Conflict
        Aid
      </title>
      <meta
        name="description"
        content="CEAM provides vital support to K'Cho, Chin, and other Myanmar refugees in Malaysia. We offer assistance to Dai/Daai, Mün, Kaang communities from Mindat, Kanpetlet, and various Chin State regions, focusing on humanitarian aid, education, cultural preservation, and community development in the context of ongoing conflicts in Myanmar."
      />
      <meta name="keywords" content={keywords} />

      <meta
        name="author"
        content="K'Cho Ethnic Association Malaysia"
      />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ceamalaysia.org/" />
      <meta
        property="og:title"
        content="CEAM - K'Cho & Chin Refugee Support in Malaysia | Myanmar Conflict Aid"
      />
      <meta
        property="og:description"
        content="CEAM provides comprehensive support to K'Cho, Chin, and other Myanmar refugees in Malaysia. We offer humanitarian aid, education, and cultural preservation services to Dai/Daai, Mün, Kaang, and other ethnic communities from Chin State, addressing the impacts of ongoing conflicts in Myanmar."
      />
      <meta
        property="og:image"
        content="https://ceamalaysia.org/images/cea-social-share.png"
      />
      <meta
        property="og:image:alt"
        content="CEAM - Supporting K'Cho & Chin Refugees"
      />
      <meta
        property="og:site_name"
        content="K'Cho Ethnic Association Malaysia"
      />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ceamalaysia" />
      <meta name="twitter:url" content="https://ceamalaysia.org/" />
      <meta
        name="twitter:title"
        content="CEAM - K'Cho & Chin Refugee Support in Malaysia | Myanmar Conflict Aid"
      />
      <meta
        name="twitter:description"
        content="CEAM provides comprehensive support to K'Cho, Chin, and other Myanmar refugees in Malaysia. We offer humanitarian aid, education, and cultural preservation services to Dai/Daai, Mün, Kaang, and other ethnic communities from Chin State, addressing the impacts of ongoing conflicts in Myanmar."
      />
      <meta
        name="twitter:image"
        content="https://ceamalaysia.org/images/cea-social-share.png"
      />
      <meta
        name="twitter:image:alt"
        content="CEAM - Supporting K'Cho & Chin Refugees"
      />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
