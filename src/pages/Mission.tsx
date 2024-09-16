import React from 'react';
import Seo from '../components/Seo';
import { commonKeywords, keywordTrails, missionKeywords, missionKeywordTrails } from '../../commonKeywords';

const Mission: React.FC = () => {
  const allKeywords = [...commonKeywords, ...keywordTrails, ...missionKeywords, ...missionKeywordTrails];
  const pageTitle = "Our Mission | CEAM - Empowering K'Cho Refugees in Malaysia";
  const pageDescription = "CEAM's mission is to empower K'Cho and Chin refugees from Myanmar in Malaysia. We focus on community support, cultural preservation, and integration for Dai/Daai, Mün, Kaang, and other Chin ethnic groups.";

  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        keywords={allKeywords}
        metaTags={[
          { property: 'og:image', content: 'https://www.ceamalaysia.org/images/cea-social-share.png' },
          { name: 'twitter:image', content: 'https://www.ceamalaysia.org/images/cea-social-share.png' },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Our Mission and Vision</h1>
        
        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="mb-6 text-lg">
          To foster a united and empowered K'Cho refugee community in Malaysia that navigates displacement challenges with resilience and dignity. We aim to:
        </p>
        <ul className="list-disc pl-8 mb-6 text-lg">
          <li>Facilitate access to essential services</li>
          <li>Advocate for refugee rights</li>
          <li>Promote personal and collective growth</li>
          <li>Preserve our cultural heritage</li>
          <li>Strengthen community bonds</li>
        </ul>
        <p className="mb-6 text-lg">
          Through these efforts, we strive to create a supportive environment that enables our members to thrive amidst uncertainty.
        </p>
        
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-6 text-lg">CEAM is committed to:</p>
        <ul className="list-disc pl-8 mb-6 text-lg">
          <li><strong>Empowerment and Protection:</strong> Safeguarding the rights and well-being of K'Cho refugees in Malaysia by facilitating access to essential services, advocating for their needs, and supporting their journey towards durable solutions.</li>
          <li><strong>Cultural Preservation and Identity:</strong> Preserving and promoting K'Cho cultural heritage, traditions, and distinct social ethics to maintain our community's unique identity in the face of displacement.</li>
          <li><strong>Positive Integration and Community Relations:</strong> Fostering respectful coexistence with Malaysian society during our temporary stay, while building a strong, supportive network within the K'Cho refugee community.</li>
        </ul>
        
        <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
        <p className="mb-6 text-lg">
          We achieve our mission through:
        </p>
        <ul className="list-disc pl-8 mb-6 text-lg">
          <li>Community-led initiatives and programs</li>
          <li>Collaboration with local and international organizations</li>
          <li>Advocacy for refugee rights and improved policies</li>
          <li>Education and skill-building programs</li>
          <li>Cultural events and heritage preservation activities</li>
        </ul>
        
        <p className="text-lg">
          At CEAM, we believe in the resilience and potential of the K'Cho community. Our mission guides us in creating a supportive environment where K'Cho refugees can not only survive but thrive, maintaining their cultural identity while building a better future.
        </p>
      </div>
    </>
  );
};

export default Mission;