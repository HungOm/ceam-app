import React from 'react';
import Seo from '../components/Seo';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { commonKeywords, keywordTrails, homepageKeywords, homepageKeywordTrails } from '../../commonKeywords';

const Home: React.FC = () => {
  const allKeywords = [...commonKeywords, ...keywordTrails, ...homepageKeywords, ...homepageKeywordTrails];
  const pageTitle = "CEAM - Supporting K'Cho & Chin Refugees in Malaysia | K'Cho Ethnic Association";
  const pageDescription = "CEAM supports K'Cho and Chin refugees from Myanmar in Malaysia. We assist communities from Mindat, Kanpetlet, and other parts of southern Chin State regions with humanitarian aid and cultural preservation.";

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
      <div>
        <div className="relative h-64 md:h-96 mb-8">
          <img
            src="/images/cover-photo.png"
            alt="Refugees helping each other"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
              Supporting K'Cho Refugees in Malaysia
            </h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold mb-4">Welcome to CEAM</h2>
          <p className="mb-6 text-lg">
            The K'Cho (pronounced "Cho" - /tʃoʊ/) Ethnic Association Malaysia (CEAM) is a dedicated community network supporting K'Cho refugees and asylum-seekers in Malaysia. Our community consists of individuals who have fled conflict and persecution in Myanmar, seeking safety and a chance for a better life.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6 text-lg">
            At CEAM, we are committed to:
          </p>
          <ul className="list-disc pl-8 mb-6 text-lg">
            <li>Providing humanitarian aid and emergency assistance</li>
            <li>Supporting cultural preservation and community development</li>
            <li>Facilitating access to education and healthcare</li>
            <li>Advocating for refugee rights and positive integration</li>
            <li>Collaborating with UNHCR and other organizations to improve the lives of K'Cho refugees</li>
          </ul>
          
          <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
          <p className="mb-6 text-lg">
            Your support can make a significant difference in the lives of K'Cho refugees. Whether through volunteering, donating, or spreading awareness, every action counts.
          </p>
          
          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 inline-flex items-center"
            >
              Learn More About Our Work
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;