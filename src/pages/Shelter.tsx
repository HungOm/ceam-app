// src/pages/Shelter.tsx
import React from 'react';
import Seo from '../components/Seo'; // Adjust the path based on your project structure
import { commonKeywords } from '../../commonKeywords';
// import { Link } from 'react-router-dom';

const Shelter: React.FC = () => {
  const pageKeywords = [
    "K'Cho Shelter",
    "Vulnerable Refugee Support",
    "Mental Health Support",
    "Chronic Conditions",
    "Temporary Shelter",
    "Refugee Accommodation",
    "Emergency Support",
    "CEAM Shelter Services",
    "Health Challenges",
    "Mental Health Crises",
    "Humanitarian Needs",
    "Refugee Housing Assistance",
    "Shelter for Asylum Seekers",
    "Crisis Intervention"
  ];

  const allKeywords = [...commonKeywords, ...pageKeywords];

  const pageTitle = "K'Cho Shelter | CEAM - Supporting Vulnerable Refugees in Malaysia";
  const pageDescription = "CEAM's K'Cho Shelter provides temporary support for extremely vulnerable K'Cho refugees in Malaysia, focusing on individuals with mental health issues and chronic conditions.";

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
        <h2 className="text-3xl font-bold mb-6">K'Cho Shelter</h2>
        <p className="mb-4 text-lg">
          The K'Cho Shelter is a crucial initiative by CEAM to provide temporary support and accommodation for extremely vulnerable K'Cho refugees in Malaysia. Our shelter services are designed to offer a short-term haven for those facing severe health challenges, particularly mental health issues, and other pressing needs.
        </p>
        <h3 className="text-2xl font-semibold mb-3">Our Services</h3>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>Temporary shelter for individuals with severe mental health concerns</li>
          <li>Support for those with chronic health conditions requiring immediate attention</li>
          <li>Assistance with essential needs during the temporary stay</li>
          <li>Referrals to specialized medical and mental health services</li>
          <li>Guidance on accessing other community resources and long-term support options</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-3">Eligibility</h3>
        <p className="mb-4 text-lg">
          Our shelter services are specifically for K'Cho refugees facing extreme vulnerability, with a primary focus on individuals with mental health issues. Eligibility is strictly based on humanitarian needs and is assessed on a case-by-case basis. This is not a solution for general housing issues.
        </p>
        <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
        <p className="mb-4 text-lg">
          If you know of an extremely vulnerable individual in urgent need of our specialized shelter services, please contact us at:
          <br />
          <a href="mailto:kchoshelter@ceamalaysia.org" className="text-blue-600 hover:underline">kchoshelter@ceamalaysia.org</a>
        </p>
        <p className="mb-4 text-lg">
          For emergencies involving individuals with severe mental health crises outside of regular hours, please call our emergency hotline at: +60 17-953 3189
        </p>
        <p className="mb-4 text-lg font-semibold text-red-600">
          Please note: This shelter is not a solution for general housing issues. It is specifically designed for temporary support of extremely vulnerable individuals, particularly those with mental health concerns or severe chronic conditions.
        </p>
      </div>
    </>
  );
};

export default Shelter;
