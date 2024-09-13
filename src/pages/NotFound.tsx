import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | CEAM - K'Cho Ethnic Association Malaysia</title>
        <meta name="description" content="The page you are looking for could not be found. Please check the URL or return to the CEAM homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-cea-blue">404 - Page Not Found</h1>
        <p className="text-xl mb-8">We're sorry, but the page you're looking for doesn't exist or has been moved.</p>
        <p className="text-lg mb-8">
          You can return to our <Link to="/" className="text-cea-blue hover:underline">homepage</Link>, or check out some of our key pages:
        </p>
        <ul className="list-none space-y-2 mb-8">
          <li><Link to="/about" className="text-cea-blue hover:underline">About CEAM</Link></li>
          <li><Link to="/mission" className="text-cea-blue hover:underline">Our Mission</Link></li>
          <li><Link to="/community" className="text-cea-blue hover:underline">Community Efforts</Link></li>
          <li><Link to="/shelter" className="text-cea-blue hover:underline">K'Cho Shelter</Link></li>
          <li><Link to="/contact" className="text-cea-blue hover:underline">Contact Us</Link></li>
        </ul>
        <Link 
          to="/" 
          className="bg-cea-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Return to Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;