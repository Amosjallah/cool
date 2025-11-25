import React from 'react';
import { COMPANY_NAME, TAGLINE } from '../constants';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-teal-900 text-white pt-32 pb-20 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=1" 
          alt="Clean bright living room" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/90 to-teal-900/70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            {COMPANY_NAME}
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 mb-8 font-light">
            {TAGLINE}
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Fast-growing cleaning and facilities management company delivering clean, healthy environments across Ghana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/booking" 
              className="px-8 py-4 bg-white text-teal-900 font-bold rounded-lg hover:bg-teal-50 transition-colors shadow-lg text-center"
            >
              Book a Cleaning
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;