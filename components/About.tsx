import React from 'react';
import { FEATURES, COMPANY_NAME } from '../constants';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Vision Section */}
      <section className="bg-teal-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">Our Vision</h2>
          <p className="text-xl leading-relaxed text-gray-100">
            "To become Ghana’s most trusted cleaning and facility management brand through excellent service and reliability."
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
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

      {/* Story / Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
             <h3 className="text-3xl font-bold text-gray-900 mb-6">{COMPANY_NAME} Story</h3>
             <p className="text-gray-600 leading-relaxed mb-8">
                Cool Job Services is a fast-growing cleaning and facilities management company committed to delivering clean, healthy, and well-maintained environments for homes, offices, schools, churches, warehouses, and commercial spaces across Ghana. We believe that a clean environment is the foundation of a productive and happy life.
             </p>
        </div>
      </section>
    </div>
  );
};

export default About;