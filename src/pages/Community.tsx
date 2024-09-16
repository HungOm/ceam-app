import React from 'react';
import Seo from '../components/Seo';
import { commonKeywords, keywordTrails, communityKeywords, communityKeywordTrails } from '../../commonKeywords';
import { Link } from 'react-router-dom';

const Community: React.FC = () => {
  const allKeywords = [...commonKeywords, ...keywordTrails, ...communityKeywords, ...communityKeywordTrails];
  const pageTitle = "Community Efforts | CEAM - Supporting K'Cho Refugees in Malaysia";
  const pageDescription = "CEAM's community efforts for K'Cho and Chin refugees from Myanmar in Malaysia. Services include education, healthcare, cultural preservation, and UNHCR registration support for Dai/Daai, Mün, Kaang communities.";

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
        <h1 className="text-4xl font-bold mb-6">Our Community Efforts</h1>
        <p className="mb-6 text-lg">
          In Malaysia, refugees lack formal legal status, making our community vulnerable to various challenges. Despite these obstacles, our network strives to support and empower K'Cho refugees through a range of community-based initiatives.
        </p>
        
        <h2 className="text-3xl font-semibold mb-4">Core Community Services</h2>
        <p className="mb-6 text-lg">
          Our community efforts focus on several key areas to address the needs of K'Cho refugees:
        </p>
        <ul className="list-disc pl-8 mb-6 text-lg">
          <li><strong>Facilitate Support Services:</strong> We connect community members with available resources for education, healthcare, and legal aid to help ensure access to basic necessities and opportunities for growth.</li>
          <li><strong>Preserve K'Cho Cultural Heritage:</strong> We encourage the preservation and sharing of our rich cultural traditions and distinct social ethics, helping our heritage remain vibrant even while away from our homeland.</li>
          <li><strong>Raise Awareness of Community Needs:</strong> We work to increase understanding of the challenges faced by K'Cho refugees, promoting safety and basic rights for our community members.</li>
          <li><strong>UNHCR Registration Support:</strong> We provide information and community-based assistance to help members navigate the UNHCR registration process.</li>
          <li><strong>Promote Respectful Integration:</strong> We encourage and raise awareness among our community about the importance of respectful integration during their temporary stay in Malaysia.</li>
        </ul>
        
        <h2 className="text-3xl font-semibold mb-4">UNHCR Registration Assistance</h2>
        <p className="mb-6 text-lg">
          Our UNHCR registration support includes community (CBO) referrals for Persons of Concern (PoC) based on UNHCR's priority guidelines. We emphasize that CEAM has no influence over referral outcomes, and all UNHCR-related services, including referrals, are provided free of charge.
        </p>
        
        <h2 className="text-3xl font-semibold mb-4">Shelter Support</h2>
        <p className="mb-6 text-lg">
          CEAM provides shelter assistance to refugees with health conditions or mental health concerns who are in need of food and accommodation support. This service is available to all eligible individuals, regardless of their race, religion, or registration status. Our shelter support is based solely on humanitarian needs and is designed to provide a safe environment for vulnerable members of our community.
        </p>
        <p className="mb-6 text-lg">
          For more information about our shelter services, please visit our <Link to="/shelter" className="text-blue-600 hover:underline">K'Cho Shelter page</Link>.
        </p>
        
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-6 text-lg">
          For inquiries about our shelter service, please contact us at: <a href="mailto:kchoshelter@ceamalaysia.org" className="text-blue-600 hover:underline">kchoshelter@ceamalaysia.org</a>
        </p>
        
        <p className="text-lg">
          At CEAM, we are committed to supporting the K'Cho community in Malaysia, preserving our cultural identity, and working towards a future where our people can thrive, even in challenging circumstances.
        </p>
      </div>
    </>
  );
};

export default Community;