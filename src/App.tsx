import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import Community from './pages/Community';
import Shelter from './pages/Shelter';
import Contact from './pages/Contact';
import SEO from './components/SEO';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main id="main-content" className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/community" element={<Community />} />
              <Route path="/shelter" element={<Shelter />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;