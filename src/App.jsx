import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

import Home from './pages/Home';
import About from './pages/About';
import Profession from './pages/Profession';
import Business from './pages/Business';
import Lions from './pages/Lions';
import Politics from './pages/Politics';
import Contact from './pages/Contact';

// Scroll to top automatically on route change
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <ScrollToTopOnNavigate />
      
      <div className="flex flex-col min-h-screen relative">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profession" element={<Profession />} />
            <Route path="/business" element={<Business />} />
            <Route path="/lions" element={<Lions />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
