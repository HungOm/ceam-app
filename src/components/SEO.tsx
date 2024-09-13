import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => {
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://ceamalaysia.org" />
      
      {/* Default meta tags */}
      <title>CEAM - Supporting K'Cho Refugees in Malaysia</title>
      <meta name="description" content="CEAM supports K'Cho and Chin refugees from Myanmar in Malaysia. We assist Dai/Daai, Mün, Kaang communities from Mindat, Kanpetlet, and other Chin State regions." />
      <meta name="keywords" content="K'Cho, Chin Refugees, Myanmar Refugees, Malaysia Refugees, Dai, Daai, Mün, Kaang, Mindat, Kanpetlet, Chin State, CEAM, Refugee Support, Asylum Seekers, Humanitarian Aid, Cultural Preservation" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ceamalaysia.org/" />
      <meta property="og:title" content="CEAM - K'Cho Refugee Support in Malaysia" />
      <meta property="og:description" content="Supporting K'Cho and Chin refugees from Myanmar in Malaysia. Community services for Dai/Daai, Mün, Kaang, and other Chin ethnic groups." />
      <meta property="og:image" content="https://ceamalaysia.org/images/cea-social-share.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ceamalaysia.org/" />
      <meta property="twitter:title" content="CEAM - K'Cho Refugee Support in Malaysia" />
      <meta property="twitter:description" content="Supporting K'Cho and Chin refugees from Myanmar in Malaysia. Community services for Dai/Daai, Mün, Kaang, and other Chin ethnic groups." />
      <meta property="twitter:image" content="https://ceamalaysia.org/images/cea-social-share.png" />

      {/* JSON-LD for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          "name": "K'Cho Ethnic Association Malaysia",
          "alternateName": "CEAM",
          "url": "https://ceamalaysia.org",
          "logo": "https://ceamalaysia.org/images/cea-logo.png",
          "sameAs": [
            "https://www.facebook.com/ceamalaysia",
            "https://twitter.com/ceamalaysia"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;