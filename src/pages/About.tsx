// src/pages/About.tsx
import React from 'react';
import Seo from '../components/Seo'; // Adjust the path based on your project structure
import { commonKeywords } from '../../commonKeywords';
// import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const pageKeywords = [
    "About CEAM",
    "K'Cho Refugees",
    "Chin State",
    "Myanmar",
    "Community Network",
    "Asylum Seekers",
    "Humanitarian Aid",
    "Ethnic Minorities",
    "Cultural Heritage",
    "Informal Organization",
    "Community-Based Organization",
    "Mindat K'Cho Refugees",
    "Kanpetlet",
    "Matupi",
    "Paletwa",
    "Distinct Social Ethics"
  ];

  const allKeywords = [...commonKeywords, ...pageKeywords];

  const pageTitle = "About CEAM | K'Cho Ethnic Association Malaysia";
  const pageDescription = "Learn about CEAM's work supporting K'Cho and Chin refugees from Myanmar in Malaysia. We serve Dai/Daai, Mün, Kaang communities from Mindat, Kanpetlet, and other regions.";

  return (
    <>
      {/* Seo Component */}
      <Seo
        title={pageTitle}
        description={pageDescription}
        keywords={allKeywords}
        metaTags={[
          { property: 'og:image', content: 'https://www.ceamalaysia.org/images/cea-social-share.png' },
          { name: 'twitter:image', content: 'https://www.ceamalaysia.org/images/cea-social-share.png' },
        ]}
      />

      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="mb-4 text-lg">
          The K'Cho Ethnic Association Malaysia (CEAM) is a dedicated community network supporting K'Cho refugees and asylum-seekers in Malaysia. Our community consists of individuals who have fled conflict and persecution in Myanmar, seeking safety and a chance for a better life.
        </p>
        <h3 className="text-2xl font-semibold mb-3">Who are the K'Cho?</h3>
        <p className="mb-4 text-lg">
          The term 'K'Cho' refers to all Chin ethnic groups residing mainly in Mindat and Kanpelet townships, including the Daai/Dai, Kaang, and Mün peoples, and encompassing parts of Matupi and Paletwa areas bordering Mindat and Kanpetlet. K'Cho people possess their own distinct cultural and social ethics that set them apart from other Chin groups.
        </p>
        <h3 className="text-2xl font-semibold mb-3">Our Community in Malaysia</h3>
        <p className="mb-4 text-lg">
          We estimate there are approximately 4,000 to 7,000 Mindat K'Cho refugees currently residing in Malaysia, with only a fraction registered with UNHCR, leaving many without formal protection or access to essential services.
        </p>
        <h3 className="text-2xl font-semibold mb-3">Our Role</h3>
        <p className="mb-4 text-lg">
          CEAM in Malaysia operates as an independent, informal community-based organization (CBO). Our primary focus is on addressing the specific needs and challenges faced by K'Cho refugees in Malaysia.
        </p>
      </div>
    </>
  );
};

export default About;
