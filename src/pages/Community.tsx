import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Community = () => (
  <>
    <Helmet>
      <title>Community Efforts | CEAM - Supporting K'Cho Refugees in Malaysia</title>
      <meta name="description" content="CEAM's community efforts for K'Cho refugees from Chin State, Myanmar in Malaysia. Services include education, healthcare, cultural preservation, and UNHCR registration support for Dai/Daai, Mün, Kaang communities." />
      <meta name="keywords" content="CEAM Community Services, K'Cho Refugee Support, Chin State, Myanmar Refugees, Malaysia, Dai, Daai, Mün, Kaang, Mindat, Kanpetlet, Matupi, Paletwa, Education, Healthcare, UNHCR Registration, Cultural Preservation" />
      <meta property="og:title" content="CEAM Community Efforts for K'Cho Refugees in Malaysia" />
      <meta property="og:description" content="Explore CEAM's community services for K'Cho refugees from Chin State, Myanmar in Malaysia. Education, healthcare, cultural preservation, and UNHCR support." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ceamalaysia.org/community" />
      <meta property="og:image" content="https://www.ceamalaysia.org/images/ceam-community.jpg" />
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
);

export default Community;