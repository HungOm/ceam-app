import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <Helmet>
      <title>CEAM - Supporting K'Cho Refugees in Malaysia | Chin Ethnic Association</title>
      <meta name="description" content="CEAM supports K'Cho and Chin refugees from Myanmar in Malaysia. We assist Dai/Daai, Mün, Kaang communities from Mindat, Kanpetlet, and other Chin State regions." />
      <meta name="keywords" content="K'Cho, Chin Refugees, Myanmar Refugees, Malaysia Refugees, Dai, Daai, Mün, Kaang, Mindat, Kanpetlet, Chin State, CEAM, Refugee Support, Asylum Seekers" />
      <meta property="og:title" content="CEAM - K'Cho Refugee Support in Malaysia" />
      <meta property="og:description" content="Supporting K'Cho and Chin refugees from Myanmar in Malaysia. Community services for Dai/Daai, Mün, Kaang, and other Chin ethnic groups." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ceamalaysia.org" />
      <meta property="og:image" content="https://www.ceamalaysia.org/images/ceam-logo.jpg" />
    </Helmet>
    <div>
      <div className="relative h-64 md:h-96 mb-8">
        <img src="/images/cover-photo.png" alt="Refugees helping each other" className="w-full h-full object-cover" />
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
          <Link to="/ceam-app/about" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 inline-flex items-center">
            Learn More About Our Work
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default Home;