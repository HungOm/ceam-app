import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-8 mt-16 w-full">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">About CEAM</h3>
        <p>Supporting K'Cho refugees and asylum-seekers in Malaysia since [Year].</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul>
          <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
          <li><Link to="/mission" className="hover:text-blue-300">Our Mission</Link></li>
          <li><Link to="/community" className="hover:text-blue-300">Community Efforts</Link></li>
          <li><Link to="/shelter" className="hover:text-blue-300">K'Cho Shelter</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
        <p>Email: info@ceamalaysia.org</p>
        <p>Shelter: kchoshelter@ceamalaysia.org</p>
        <p>Phone: +60 1XX XXX XXXX</p>
      </div>
    </div>
    <div className="mt-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} K'Cho Ethnic Association Malaysia (CEAM). All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;