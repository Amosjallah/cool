import React from 'react';
import { FEATURES } from '../constants';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">Why Choose Us?</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
              We Keep Your Space Clean, So You Can Focus on What Matters.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="flex gap-5 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/booking" className="inline-block bg-gray-900 text-white font-semibold py-4 px-10 rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
              Book Your Service Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;