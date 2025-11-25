import React, { useState, useEffect } from 'react';
import { COMPANY_NAME, TAGLINE } from '../constants';
import { Link } from 'react-router-dom';

const HERO_IMAGES = [
  "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
  "https://images.pexels.com/photos/4239139/pexels-photo-4239139.jpeg",
  "https://media.istockphoto.com/id/1417833187/photo/professional-cleaner-vacuuming-a-carpet.jpg?b=1&s=612x612&w=0&k=20&c=-hIxa-9UCDsDzdNrdRQI67WZvhrU34PKejODkGMi-jA="
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[800px] flex items-center justify-center overflow-hidden bg-gray-900 text-white">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/90 via-teal-900/70 to-slate-900/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 font-semibold text-sm mb-6 backdrop-blur-sm animate-fade-in-down">
            ✨ Professional Cleaning Services in Ghana
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight drop-shadow-lg">
            {COMPANY_NAME}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {TAGLINE}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/booking" 
              className="px-10 py-4 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-400 transition-all shadow-lg hover:shadow-teal-500/30 text-center text-lg transform hover:-translate-y-1"
            >
              Book a Cleaning
            </Link>
            <Link 
              to="/services" 
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all text-center text-lg"
            >
              Our Services
            </Link>
          </div>

          {/* Trusted Users - Centered */}
          <div className="flex flex-col items-center justify-center gap-4 animate-fade-in-up">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
                "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&q=80&w=100&h=100"
              ].map((url, i) => (
                <img 
                  key={i}
                  src={url} 
                  alt={`Happy Client ${i + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-teal-900 object-cover" 
                />
              ))}
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-yellow-400 text-sm">
                <span>★★★★★</span>
                <span className="text-gray-200 ml-1 font-medium">5.0 Rating from 500+ Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;