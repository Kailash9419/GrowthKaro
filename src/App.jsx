import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Process from './pages/Process';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FreeAudit from './pages/FreeAudit';
import ROICalculator from './pages/ROICalculator';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import WhatsAppWidget from './components/WhatsAppWidget';
import AIAgentWidget from './components/AIAgentWidget';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/free-audit" element={<FreeAudit />} />
            <Route path="/roi-calculator" element={<ROICalculator />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
        <AIAgentWidget />
      </div>
    </Router>
  );
}

export default App;
