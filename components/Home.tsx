import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Features from './Features';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services limit={3} />
      <div className="bg-white">
         <Features />
      </div>
      
      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Spotless Space?</h2>
           <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
             Book your cleaning service today and experience the Cool Job Services difference.
           </p>
           <Link to="/booking" className="inline-block bg-white text-teal-800 font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
             Book Now
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;