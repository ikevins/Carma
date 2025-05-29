import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ServicesPage from './pages/ServicesPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import ResourcesPage from './pages/ResourcesPage';
import MesoneedlingPage from './pages/services/MesoneedlingPage';
import WrinkleRelaxersPage from './pages/services/WrinkleRelaxersPage';
import DermalFillersPage from './pages/services/DermalFillersPage';
import PRPPage from './pages/services/PRPPage';
import DermalFillersCare from './pages/resources/DermalFillersCare';
import MesoneedlingCare from './pages/resources/MesoneedlingCare';

function App() {
  useEffect(() => {
    document.title = 'Carma Aesthetics | Medical Spa in Winter Garden, FL';
  }, []);

  return (
    <Router>
      <ScrollRestoration />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/services/mesoneedling" element={<MesoneedlingPage />} />
            <Route path="/services/wrinkle-relaxers" element={<WrinkleRelaxersPage />} />
            <Route path="/services/dermal-fillers" element={<DermalFillersPage />} />
            <Route path="/services/prp" element={<PRPPage />} />
            <Route path="/resources/dermal-fillers-care" element={<DermalFillersCare />} />
            <Route path="/resources/mesoneedling-care" element={<MesoneedlingCare />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;