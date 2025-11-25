import React, { useState, useEffect } from 'react';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  
  // Header background logic: Always solid on non-home pages, transparent on home until scroll
  const isTransparent = isHome && !scrolled;

  const navClasses = `fixed w-full z-40 transition-all duration-300 ${
    !isTransparent ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
  }`;

  const textClasses = !isTransparent ? 'text-gray-900' : 'text-white';
  const logoColorClass = !isTransparent ? 'text-teal-700' : 'text-white';
  
  const buttonClasses = !isTransparent
    ? 'bg-teal-600 text-white hover:bg-teal-700' 
    : 'bg-white text-teal-900 hover:bg-gray-100';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`flex items-center gap-3 text-2xl font-bold tracking-tight group ${textClasses}`}>
          <Logo className={`w-10 h-10 transition-colors duration-300 ${logoColorClass} group-hover:text-teal-500`} />
          <span>
            Cool Job <span className={!isTransparent ? "text-teal-600" : "text-teal-300 font-normal"}>Services</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
             <Link 
                key={link.name}
                to={link.path} 
                className={`font-medium transition-colors hover:text-teal-500 ${textClasses} ${location.pathname === link.path ? 'underline underline-offset-4 decoration-2 decoration-teal-500' : ''}`}
             >
                {link.name}
             </Link>
          ))}
          <Link to="/booking" className={`px-5 py-2.5 rounded-full font-semibold transition-colors ${buttonClasses}`}>
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 rounded-lg ${textClasses}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 border-t md:hidden">
          {navLinks.map((link) => (
             <Link 
                key={link.name}
                to={link.path} 
                onClick={() => setMobileMenuOpen(false)} 
                className={`text-gray-900 py-2 border-b border-gray-100 ${location.pathname === link.path ? 'font-bold text-teal-600' : ''}`}
             >
                {link.name}
             </Link>
          ))}
          <Link to="/booking" onClick={() => setMobileMenuOpen(false)} className="bg-teal-600 text-white py-3 rounded-lg text-center font-semibold">Book Now</Link>
          <div className="text-center text-sm text-gray-500 pt-2">
            Call us: <a href={`tel:${PHONE_NUMBER}`} className="text-teal-600 font-bold">{PHONE_NUMBER}</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;