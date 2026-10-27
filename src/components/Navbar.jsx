import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Scale, Briefcase, Award, Flag, Mail, User, Home as HomeIcon } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'HOME', path: '/', icon: HomeIcon },
    { name: 'ABOUT', path: '/about', icon: User },
    {
      name: 'PROFESSION',
      path: '/profession',
      icon: Scale,
      dropdown: [
        { name: 'Legal Career', path: '/profession', icon: Scale },
        { name: 'Business Venture', path: '/business', icon: Briefcase },
      ]
    },
    { name: 'BUSINESS', path: '/business', icon: Briefcase },
    { name: 'LIONS', path: '/lions', icon: Award },
    { name: 'POLITICS', path: '/politics', icon: Flag },
    { name: 'CONTACT', path: '/contact', icon: Mail },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slateGrey-950/95 backdrop-blur-xl border-b border-slate-800/80 shadow-xl py-3.5'
          : 'bg-gradient-to-b from-slateGrey-950/90 via-slateGrey-950/40 to-transparent backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navyBlue-800 to-slateGrey-900 border border-darkOrange-600/40 flex items-center justify-center font-bold text-white tracking-wider text-lg shadow-md group-hover:scale-105 group-hover:border-darkOrange-500 transition-all duration-300">
              NB
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest text-slate-100 group-hover:text-darkOrange-400 transition-colors uppercase">
                Nuwan Ballantudawa
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 font-medium">
                Law • Business • Lions • Politics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 ${
                        isActive(link.path)
                          ? 'text-darkOrange-400 bg-slateGrey-800/80 border border-darkOrange-600/40'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Link to={link.path}>{link.name}</Link>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-darkOrange-400' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-1 w-48 rounded-xl bg-slateGrey-900/95 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden py-1 z-50"
                        >
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-navyBlue-900/50 transition-colors"
                            >
                              <sub.icon className="w-3.5 h-3.5 text-darkOrange-400" />
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-darkOrange-400 bg-slateGrey-800/80 border border-darkOrange-600/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="px-4 py-2 text-xs font-bold tracking-wider text-white bg-gradient-to-r from-darkOrange-600 to-darkOrange-700 hover:from-darkOrange-500 hover:to-darkOrange-600 border border-darkOrange-500/40 rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slateGrey-900/80 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-darkOrange-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slateGrey-950/95 border-b border-white/10 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold tracking-wider transition-colors ${
                      isActive(link.path)
                        ? 'text-darkOrange-400 bg-slateGrey-800/80 border border-darkOrange-600/50'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <link.icon className="w-4 h-4 text-darkOrange-500" />
                    {link.name}
                  </Link>

                  {link.dropdown && (
                    <div className="pl-9 pr-2 py-1 space-y-1">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-darkOrange-400 hover:bg-white/5 transition-colors"
                        >
                          → {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-3 text-sm font-bold tracking-wider text-white bg-gradient-to-r from-darkOrange-600 to-darkOrange-700 rounded-xl shadow-lg border border-darkOrange-500/40"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
