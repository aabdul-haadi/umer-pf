import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navbarClass = isScrolled
    ? 'fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md shadow-md z-50 py-3'
    : 'fixed top-0 left-0 right-0 bg-transparent z-50 py-5';

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/projects', name: 'Projects' },
    { path: '/skills', name: 'Skills' },
    { path: '/pricing', name: 'Pricing' },
    { path: '/about', name: 'About Me' },
  ];

  return (
    <motion.header 
      className={`${navbarClass} transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-blue-500" />
          <span className="font-bold text-xl">Muhammed Umer</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                isActive 
                  ? "text-blue-500 font-medium" 
                  : "text-gray-300 hover:text-white transition-colors duration-200"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-200 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.nav
          className="md:hidden bg-gray-800 mt-3"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  isActive 
                    ? "text-blue-500 font-medium py-2" 
                    : "text-gray-300 hover:text-white py-2 transition-colors duration-200"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;