import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import Community from './pages/Community';
import Shelter from './pages/Shelter';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/ceam-app/" element={<Home />} />
              <Route path="/ceam-app/about" element={<About />} />
              <Route path="/ceam-app/mission" element={<Mission />} />
              <Route path="/ceam-app/community" element={<Community />} />
              <Route path="/ceam-app/shelter" element={<Shelter />} />
              <Route path="/ceam-app/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;