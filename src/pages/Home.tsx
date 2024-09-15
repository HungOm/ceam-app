// pages/home.tsx
import React from 'react';
import Seo from '../components/Seo'; 
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { commonKeywords } from '../../commonKeywords';

const Home: React.FC = () => {
  const pageKeywords = [
    "K'Cho Ethnic Association",
    "CEAM Home",
    "Supporting Refugees",
    "Myanmar Conflict Aid",
    "Community Network",
    "Asylum Seekers Support",
    "Cultural Heritage Preservation",
    "Refugee Assistance in Malaysia",
    "Chin Ethnic Groups",
    "UNHCR Malaysia",
    "Humanitarian Support",
    "Mindat",
    "Kanpetlet",
    "Chin State Refugees"
  ];

  // Combine common keywords with page-specific keywords
  const allKeywords = [...commonKeywords, ...pageKeywords];

  const pageTitle = "CEAM - Supporting K'Cho & Chin Refugees in Malaysia | K'Cho Ethnic Association";
  const pageDescription = "CEAM supports K'Cho and Chin refugees from Myanmar in Malaysia. We assist communities from Mindat, Kanpetlet, and other parts of southen Chin State regions with humanitarian aid and cultural preservation.";

  return (
    <>
      {/* Seo Component */}
      <Seo
        title={pageTitle}
        description={pageDescription}
        keywords={allKeywords}
        // Optionally, you can pass additional metaTags or linkTags if needed
        // metaTags={[
        //   { property: 'og:image', content: 'https://www.ceamalaysia.org/images/ceam-logo.jpg' },
        // ]}
        // linkTags={[
        //   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto', crossOrigin: 'anonymous' },
        // ]}
      />

      {/* Page Content */}
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
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-4 text-lg">
            The K'Cho (pronounced "Cho" - /tʃoʊ/) Ethnic Association Malaysia (CEAM) is a dedicated community network supporting K'Cho refugees and asylum-seekers in Malaysia. Our community consists of individuals who have fled conflict and persecution in Myanmar, seeking safety and a chance for a better life.
          </p>
          {/* Add more content here */}
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
