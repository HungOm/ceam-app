// src/pages/Mission.tsx
import React from 'react';
import Seo from '../components/Seo'; // Adjust the path based on your project structure
import { commonKeywords } from '../../commonKeywords';
// import { Link } from 'react-router-dom';

const Mission: React.FC = () => {
  const pageKeywords = [
    "CEAM Mission",
    "K'Cho Empowerment",
    "Chin Refugees",
    "Community Support",
    "Cultural Preservation",
    "Refugee Integration",
    "Refugee Rights Advocacy",
    "Positive Integration",
    "UNHCR Collaboration",
    "Humanitarian Goals",
    "Ethical Operation",
    "Community Resilience",
    "Empowerment and Protection",
    "Social Ethics",
    "Displacement Challenges"
  ];

  const allKeywords = [...commonKeywords, ...pageKeywords];

  const pageTitle = "Our Mission | CEAM - Empowering K'Cho Refugees in Malaysia";
  const pageDescription = "CEAM's mission is to empower K'Cho and Chin refugees from Myanmar in Malaysia. We focus on community support, cultural preservation, and integration for Dai/Daai, Mün, Kaang, and other Chin ethnic groups.";

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
        <h2 className="text-3xl font-bold mb-6">Our Mission and Vision</h2>
        <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
        <p className="mb-4 text-lg">
          To foster a united and empowered K'Cho refugee community in Malaysia that navigates displacement challenges with resilience and dignity. We aim to:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>Facilitate access to essential services</li>
          <li>Advocate for refugee rights</li>
          <li>Promote personal and collective growth</li>
          <li>Preserve our cultural heritage</li>
          <li>Strengthen community bonds</li>
        </ul>
        <p className="mb-4 text-lg">
          Through these efforts, we strive to create a supportive environment that enables our members to thrive amidst uncertainty.
        </p>
        <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
        <p className="mb-4 text-lg">CEAM is committed to:</p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li><strong>Empowerment and Protection:</strong> Safeguarding the rights and well-being of K'Cho refugees in Malaysia by facilitating access to essential services, advocating for their needs, and supporting their journey towards durable solutions.</li>
          <li><strong>Cultural Preservation and Identity:</strong> Preserving and promoting K'Cho cultural heritage, traditions, and distinct social ethics to maintain our community's unique identity in the face of displacement.</li>
          <li><strong>Positive Integration and Community Relations:</strong> Fostering respectful coexistence with Malaysian society during our temporary stay, while building a strong, supportive network within the K'Cho refugee community.</li>
        </ul>
      </div>
    </>
  );
};

export default Mission;
