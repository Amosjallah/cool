import React from 'react';
import { FEATURES } from '../constants';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <div className="relative">
                <img 
                  src="https://picsum.photos/600/600?random=2" 
                  alt="Cleaning professional at work" 
                  className="rounded-2xl shadow-2xl z-10 relative"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-teal-100 rounded-2xl -z-0 hidden md:block"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-dots-pattern opacity-20 hidden md:block"></div>
             </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">Why Choose Us?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8">
              We Keep Your Space Clean, So You Can Focus on What Matters.
            </h2>
            
            <div className="space-y-6">
              {FEATURES.map((feature) => (
                <div key={feature.id} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link to="/booking" className="inline-block bg-gray-900 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;