import { Helmet } from 'react-helmet-async';

const Contact = () => (
  <>
    <Helmet>
      <title>Contact CEAM | K'Cho Ethnic Association Malaysia</title>
      <meta name="description" content="Contact CEAM for support or to help K'Cho refugees from Chin State, Myanmar in Malaysia. Reach out to assist Dai/Daai, Mün, Kaang, and other Chin ethnic communities." />
      <meta name="keywords" content="Contact CEAM, K'Cho Refugee Support, Chin State, Myanmar Refugees in Malaysia, Dai, Daai, Mün, Kaang, Mindat, Kanpetlet, Matupi, Paletwa, Volunteer, Donate, Refugee Assistance" />
      <meta property="og:title" content="Contact CEAM - Support K'Cho Refugees in Malaysia" />
      <meta property="og:description" content="Contact CEAM to support or seek assistance for K'Cho refugees from Chin State, Myanmar in Malaysia. Help Dai/Daai, Mün, Kaang, and other Chin ethnic communities." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ceamalaysia.org/contact" />
      <meta property="og:image" content="https://www.ceamalaysia.org/images/contact-ceam.jpg" />
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
        <li>Email: info@ceamalaysia.org</li>
        <li>Phone: +60 1XX XXX XXXX</li>
      </ul>
      <p className="mb-4 text-lg">
        For security and privacy reasons, we may not be able to provide detailed information about our activities or members over public channels. We appreciate your understanding.
      </p>
    </div>
  </>
);

export default Contact;