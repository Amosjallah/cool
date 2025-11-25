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
  
  // Header background logic
  const isTransparent = isHome && !scrolled && !mobileMenuOpen;

  const navClasses = `fixed w-full z-40 transition-all duration-300 ${
    !isTransparent ? 'bg-white shadow-md py-3' : 'bg-transparent py-4 md:py-6'
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
        {/* Logo - Linear Layout */}
        <Link to="/" className={`flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-bold tracking-tight group ${textClasses} whitespace-nowrap z-50`}>
          <Logo className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 ${logoColorClass} group-hover:text-teal-500`} />
          <span className="flex items-center">
            Cool Job <span className={!isTransparent ? "text-teal-600 ml-1.5" : "text-teal-300 font-normal ml-1.5"}>Services</span>
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
          className={`md:hidden p-2 rounded-lg z-50 ${textClasses}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden animate-fade-in-down">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
               <Link 
                  key={link.name}
                  to={link.path} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`text-2xl text-gray-900 font-medium ${location.pathname === link.path ? 'text-teal-600 font-bold' : ''}`}
               >
                  {link.name}
               </Link>
            ))}
            <hr className="border-gray-100 my-2" />
            <Link 
              to="/booking" 
              onClick={() => setMobileMenuOpen(false)} 
              className="bg-teal-600 text-white py-4 rounded-xl text-xl font-bold shadow-lg"
            >
              Book Now
            </Link>
            <div className="mt-8 text-gray-500">
              <p className="mb-2">Need help?</p>
              <a href={`tel:${PHONE_NUMBER}`} className="text-teal-600 text-xl font-bold block">{PHONE_NUMBER}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;