import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { commonKeywords } from '../../commonKeywords';

const Community = () => {
  const pageKeywords = [
    "CEAM Community Services", "K'Cho Refugee Support", "Chin State", "Myanmar Refugees",
    "Education Services", "Healthcare Access", "UNHCR Registration Support",
    "Cultural Preservation", "Shelter Support", "Mental Health Services",
    "Community Development", "Refugee Integration", "Humanitarian Assistance",
    "Vulnerable Populations", "Refugee Assistance Programs", "Community-Based Organization"
  ];

  const allKeywords = [...commonKeywords, ...pageKeywords].join(', ');

  const pageTitle = "Community Efforts | CEAM - Supporting K'Cho Refugees in Malaysia";
  const pageDescription = "CEAM's community efforts for K'Cho and Chin refugees from Myanmar in Malaysia. Services include education, healthcare, cultural preservation, and UNHCR registration support for Dai/Daai, Mün, Kaang communities.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={allKeywords} />
        {/* Open Graph */}
        <meta property="og:title" content="Community Efforts - Supporting K'Cho & Chin Refugees in Malaysia" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ceamalaysia.org/community" />
        <meta property="og:image" content="https://www.ceamalaysia.org/images/cea-social-share.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Community Efforts - Supporting K'Cho & Chin Refugees in Malaysia" />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.ceamalaysia.org/images/cea-social-share.png" />
      </Helmet>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Our Community Efforts</h2>
      <p className="mb-4 text-lg">
        In Malaysia, refugees lack formal legal status, making our community vulnerable to various challenges. Despite these obstacles, our network strives to:
      </p>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li><strong>Facilitate Support Services:</strong> We connect community members with available resources for education, healthcare, and legal aid to help ensure access to basic necessities and opportunities for growth.</li>
        <li><strong>Preserve K'Cho Cultural Heritage:</strong> We encourage the preservation and sharing of our rich cultural traditions and distinct social ethics, helping our heritage remain vibrant even while away from our homeland.</li>
        <li><strong>Raise Awareness of Community Needs:</strong> We work to increase understanding of the challenges faced by K'Cho refugees, promoting safety and basic rights for our community members.</li>
        <li><strong>UNHCR Registration Support:</strong> We provide information and community-based assistance to help members navigate the UNHCR registration process. This includes community (CBO) referrals for Persons of Concern (PoC) based on UNHCR's priority guidelines. We emphasize that CEAM has no influence over referral outcomes, and all UNHCR-related services, including referrals, are provided free of charge.</li>
        <li><strong>Promote Respectful Integration:</strong> We encourage and raise awareness among our community about the importance of respectful integration during their temporary stay in Malaysia, fostering positive relationships with the local community.</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-3">Shelter Support</h3>
      <p className="mb-4 text-lg">
        CEAM provides shelter assistance to refugees with health conditions or mental health concerns who are in need of food and accommodation support. This service is available to all eligible individuals, regardless of their race, religion, or registration status. Our shelter support is based solely on humanitarian needs and is designed to provide a safe environment for vulnerable members of our community.
      </p>
      <p className="mb-4 text-lg">
        For more information about our shelter services, please visit our <Link to="/shelter" className="text-blue-600 hover:underline">K'Cho Shelter page</Link>.
      </p>
      <p className="mb-4 text-lg">
        For inquiries about our shelter service, please contact us at: <a href="mailto:kchoshelter@ceamalaysia.org" className="text-blue-600 hover:underline">kchoshelter@ceamalaysia.org</a>
      </p>
    </div>
  </>
)
}

export default Community;