import React from 'react';

const WebSiteSchema: React.FC = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "K'Cho Ethnic Association Malaysia",
    "url": "https://ceamalaysia.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ceamalaysia.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema),
      }}
    />
    </>
  );
};

export default WebSiteSchema;