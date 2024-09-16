import React from 'react';
import Seo from '../components/Seo';
import { commonKeywords, keywordTrails, contactKeywords, contactKeywordTrails } from '../../commonKeywords';

const Contact: React.FC = () => {
  const allKeywords = [...commonKeywords, ...keywordTrails, ...contactKeywords, ...contactKeywordTrails];
  const pageTitle = "Contact CEAM | K'Cho Ethnic Association Malaysia";
  const pageDescription = "Contact CEAM for support or to help K'Cho and Chin refugees from Myanmar in Malaysia. Reach out to assist Dai/Daai, Mün, Kaang, and other Chin ethnic communities.";

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
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="mb-6 text-lg">
          Whether you're a K'Cho refugee seeking support or someone interested in helping our community, we welcome your involvement. Reach out to learn more about our activities and how you can contribute to our mission.
        </p>
        
        <h2 className="text-3xl font-semibold mb-4">How to Reach Us</h2>
        <p className="mb-6 text-lg">
          Due to the informal nature of our organization, we do not have a physical office. Please contact us through the following methods:
        </p>
        <ul className="list-disc pl-8 mb-6 text-lg">
          <li>Email: ceamalaysia2018@gmail.com</li>
          <li>Phone: +60 11-6812 8634</li>
        </ul>
        
        <h2 className="text-3xl font-semibold mb-4">Privacy and Security</h2>
        <p className="mb-6 text-lg">
          For security and privacy reasons, we may not be able to provide detailed information about our activities or members over public channels. We appreciate your understanding.
        </p>
        
        <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
        <p className="mb-6 text-lg">
          If you're interested in volunteering, donating, or supporting our cause in any way, please don't hesitate to reach out. Your support can make a significant difference in the lives of K'Cho refugees in Malaysia.
        </p>
        
        <p className="text-lg">
          At CEAM, we are committed to supporting the K'Cho community in Malaysia. Your contact and involvement help us continue our mission of providing humanitarian aid, preserving cultural heritage, and advocating for refugee rights.
        </p>
      </div>
    </>
  );
};

export default Contact;