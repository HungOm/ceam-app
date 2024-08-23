import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="text-white p-4 flex items-center">
    <Link to="/" className="flex items-center">
      <img src="/ceam-app/images/cea-logo.png" alt="CEA Malaysia Logo" className="h-12 mr-4" />
      <h1 className="text-2xl font-bold">Malaysia</h1>
    </Link>
  </header>
);

export default Header;