import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Header from './Header';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Mission', path: '/mission' },
    { name: 'Community', path: '/community' },
    { name: 'Shelter', path: '/shelter' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center"> 
            <Header/>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cea-blue hover:text-blue-700 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-cea-blue"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-cea-blue hover:bg-blue-50 hover:text-blue-700 py-2 px-3 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;