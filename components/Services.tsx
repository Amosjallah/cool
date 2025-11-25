import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

interface ServicesProps {
  limit?: number;
}

const Services: React.FC<ServicesProps> = ({ limit }) => {
  const displayedServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Our Premium Services</h2>
          <p className="text-gray-600 text-lg">
            We combine trained staff, modern tools, and excellent customer service to give you a spotless experience every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
              <div className="text-4xl mb-6 bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block px-8 py-3 bg-white border border-teal-600 text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition-colors">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;