import { Helmet } from 'react-helmet-async';
import { commonKeywords } from '../../commonKeywords';

const Contact = () => {
  const pageKeywords = [
    "Contact CEAM", "K'Cho Refugee Support", "Chin State", "Myanmar Refugees in Malaysia",
    "Volunteer", "Donate", "Refugee Assistance", "Community Support", "Humanitarian Aid",
    "Get Involved", "Support K'Cho Community", "CEAM Contact Information",
    "Asylum Seekers Help", "Aid for Refugees", "Malaysia Refugee Support"
  ];

  const allKeywords = [...commonKeywords, ...pageKeywords].join(', ');

  const pageTitle = "Contact CEAM | K'Cho Ethnic Association Malaysia";
  const pageDescription = "Contact CEAM for support or to help K'Cho and Chin refugees from Myanmar in Malaysia. Reach out to assist Dai/Daai, Mün, Kaang, and other Chin ethnic communities.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={allKeywords} />
        {/* Open Graph */}
        <meta property="og:title" content="Contact CEAM - Support K'Cho & Chin Refugees in Malaysia" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ceamalaysia.org/contact" />
        <meta property="og:image" content="https://www.ceamalaysia.org/images/cea-social-share.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact CEAM - Support K'Cho & Chin Refugees in Malaysia" />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.ceamalaysia.org/images/cea-social-share.png" />
      </Helmet>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="mb-4 text-lg">
        Whether you're a K'Cho refugee seeking support or someone interested in helping our community, we welcome your involvement. Reach out to learn more about our activities and how you can contribute to our mission.
      </p>
      <p className="mb-4 text-lg">
        Due to the informal nature of our organization, we do not have a physical office. Please contact us through the following methods:
      </p>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Email: ceamalaysia2018@gmail.com</li>
        <li>Phone: +60 11-6812 8634</li>
      </ul>
      <p className="mb-4 text-lg">
        For security and privacy reasons, we may not be able to provide detailed information about our activities or members over public channels. We appreciate your understanding.
      </p>
    </div>
  </>
)
};

export default Contact;