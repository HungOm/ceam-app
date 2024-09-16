import React from 'react';
import Seo from '../components/Seo';
import { commonKeywords,keywordTrails, aboutKeywords, aboutKeywordTrails } from '../../commonKeywords';

const About: React.FC = () => {
  const allKeywords = [...commonKeywords, ...keywordTrails,...aboutKeywords,...aboutKeywordTrails];
  const pageTitle = "About CEAM | K'Cho Ethnic Association Malaysia";
  const pageDescription = "Learn about CEAM's work supporting K'Cho and Chin refugees from Myanmar in Malaysia. We serve Dai/Daai, Mün, Kaang communities from Mindat, Kanpetlet, and other regions.";

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
        <h1 className="text-4xl font-bold mb-6">About CEAM</h1>
        <p className="mb-6 text-lg">
          The K'Cho Ethnic Association Malaysia (CEAM) is a dedicated community network supporting K'Cho refugees and asylum-seekers in Malaysia. Our community consists of individuals who have fled conflict and persecution in Myanmar, seeking safety and a chance for a better life.
        </p>
        
        <h2 className="text-3xl font-semibold mb-4">Who are the K'Cho?</h2>
        <p className="mb-6 text-lg">
          The term 'K'Cho' encompasses all Chin ethnic groups primarily residing in Mindat and Kanpetlet townships of Chin State, Myanmar. This includes the Dai/Daai, Kaang, and Mün peoples, as well as communities from parts of Matupi and Paletwa areas bordering Mindat and Kanpetlet. K'Cho people possess their own distinct cultural heritage, social customs, and ethical values that set them apart from other Chin groups.
        </p>
        
        <h2 className="text-3xl font-semibold mb-4">Our Community in Malaysia</h2>
        <p className="mb-6 text-lg">
          We estimate there are approximately 4,000 to 7,000 K'Cho refugees currently residing in Malaysia. Unfortunately, only a fraction are registered with UNHCR, leaving many without formal protection or access to essential services. This underscores the critical need for community-based support and advocacy.
        </p>
        
        <h2 className="text-3xl font-semibold mb-4">Our Role and Mission</h2>
        <p className="mb-6 text-lg">
          CEAM operates as an independent, informal community-based organization (CBO) in Malaysia. Our primary focus is addressing the specific needs and challenges faced by K'Cho refugees. Our mission encompasses:
        </p>
        <ul className="list-disc pl-8 mb-6 text-lg">
          <li>Providing humanitarian aid and emergency assistance</li>
          <li>Supporting cultural preservation and community development</li>
          <li>Facilitating access to education and healthcare</li>
          <li>Advocating for refugee rights and positive integration</li>
          <li>Collaborating with UNHCR and other organizations to improve the lives of K'Cho refugees</li>
        </ul>
        
        <h2 className="text-3xl font-semibold mb-4">Our History and Achievements</h2>
        <p className="mb-6 text-lg">
          Since our inception, CEAM has been at the forefront of supporting the K'Cho community in Malaysia. We have successfully:
        </p>
        <ul className="list-disc pl-8 mb-6 text-lg">
          <li>Established a community network to connect and support K'Cho refugees</li>
          <li>Implemented various cultural preservation initiatives</li>
          <li>Provided crucial assistance during the COVID-19 pandemic</li>
          <li>Facilitated educational and skill-building programs for refugees</li>
          <li>Collaborated with local and international NGOs to amplify our impact</li>
        </ul>
        
        <p className="text-lg">
          At CEAM, we are committed to empowering the K'Cho community, preserving our cultural identity, and working towards a future where our people can thrive, whether in Malaysia or eventually back in our homeland.
        </p>
      </div>
    </>
  );
};

export default About;