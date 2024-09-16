import React from 'react';
import Seo from '../components/Seo';
import { Link } from 'react-router-dom';
import { commonKeywords, keywordTrails } from '../../commonKeywords';

const NotFound: React.FC = () => {
  const pageKeywords = [
    "404 Error",
    "Page Not Found",
    "CEAM Support",
    "K'Cho Refugees",
    "Malaysia Refugees",
    "CEAM Homepage",
    "Refugee Assistance",
    "Community Support",
    "Humanitarian Aid",
    "Cultural Preservation",
    "Asylum Seekers Support",
    "Myanmar Conflict Aid"
  ];
  const allKeywords = [...commonKeywords, ...keywordTrails, ...pageKeywords];
  const pageTitle = "Page Not Found | CEAM - K'Cho Ethnic Association Malaysia";
  const pageDescription = "The page you are looking for could not be found. Please check the URL or return to the CEAM homepage.";

  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        keywords={allKeywords}
        metaTags={[
          { name: 'robots', content: 'noindex, nofollow' },
          { property: 'og:title', content: pageTitle },
          { property: 'og:description', content: pageDescription },
          { property: 'og:url', content: 'https://www.ceamalaysia.org/404' },
          { property: 'og:image', content: 'https://www.ceamalaysia.org/images/cea-social-share.png' },
          { name: 'twitter:title', content: pageTitle },
          { name: 'twitter:description', content: pageDescription },
          { name: 'twitter:image', content: 'https://www.ceamalaysia.org/images/cea-social-share.png' },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">404 - Page Not Found</h1>
        
        <div className="text-center">
          <p className="mb-6 text-xl">
            We're sorry, but the page you're looking for doesn't exist or has been moved.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4">How Can We Help?</h2>
          <p className="mb-6 text-lg">
            You can return to our <Link to="/" className="text-cea-blue hover:underline">homepage</Link>, or check out some of our key pages:
          </p>
          
          <ul className="list-none space-y-2 mb-6">
            <li><Link to="/about" className="text-cea-blue hover:underline">About CEAM</Link></li>
            <li><Link to="/mission" className="text-cea-blue hover:underline">Our Mission</Link></li>
            <li><Link to="/community" className="text-cea-blue hover:underline">Community Efforts</Link></li>
            <li><Link to="/shelter" className="text-cea-blue hover:underline">K'Cho Shelter</Link></li>
            <li><Link to="/contact" className="text-cea-blue hover:underline">Contact Us</Link></li>
          </ul>
          
          <Link 
            to="/" 
            className="bg-cea-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 inline-block"
          >
            Return to Homepage
          </Link>
        </div>
        
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Need Immediate Assistance?</h2>
          <p className="mb-6 text-lg">
            If you're a K'Cho refugee in need of urgent help, please don't hesitate to reach out:
          </p>
          <p className="text-lg">
            Email: <a href="mailto:ceamalaysia2018@gmail.com" className="text-cea-blue hover:underline">ceamalaysia2018@gmail.com</a><br />
            Phone: +60 11-6812 8634
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;