import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Features from './Features';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />

      {/* Mission Statement */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8">
              Cleaning redefined for the <span className="text-teal-600">modern era.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-12">
              We believe a clean environment is the foundation of clarity and productivity. 
              From high-rise offices to cozy homes, we bring a level of precision and care 
              that transforms spaces.
            </p>
            <div className="h-1 w-24 bg-teal-500 mx-auto rounded-full"></div>
          </div>
        </div>
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-teal-50 to-transparent rounded-full opacity-50 blur-3xl -z-0 pointer-events-none"></div>
      </section>

      {/* Services Import */}
      <Services limit={6} />

      {/* Stats Strip */}
      <div className="border-y border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            <div className="py-12 text-center px-4">
              <div className="text-4xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="py-12 text-center px-4">
              <div className="text-4xl font-bold text-gray-900 mb-1">1.2k</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Projects Done</div>
            </div>
            <div className="py-12 text-center px-4">
              <div className="text-4xl font-bold text-gray-900 mb-1">98%</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Retention</div>
            </div>
            <div className="py-12 text-center px-4">
              <div className="text-4xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works - Minimalist Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 md:mb-24">
            <span className="text-teal-600 font-bold uppercase tracking-wider text-xs">The Process</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">Effortless from start to finish.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 group">
              <div className="bg-white w-24 h-24 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center mb-8 group-hover:border-teal-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-gray-900 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Book Online</h3>
              <p className="text-gray-500 leading-relaxed">Select your service, choose a time that works for you, and get a transparent quote instantly.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 group">
              <div className="bg-white w-24 h-24 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center mb-8 group-hover:border-teal-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-gray-900 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. We Clean</h3>
              <p className="text-gray-500 leading-relaxed">Our vetted professionals arrive on time with eco-friendly supplies to make your space shine.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 group">
              <div className="bg-white w-24 h-24 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center mb-8 group-hover:border-teal-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-gray-900 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. You Relax</h3>
              <p className="text-gray-500 leading-relaxed">Walk into a fresh environment. Pay securely only after you are 100% satisfied with our work.</p>
            </div>
          </div>
        </div>
      </section>

      <Features />

      {/* Testimonials - Bento Grid Style */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-teal-400 font-bold uppercase tracking-wider text-xs">Testimonials</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">Loved by locals.</h2>
              <p className="text-gray-400 mt-4 text-lg">See why hundreds of homeowners and businesses trust us with their keys.</p>
            </div>
            <Link to="/booking" className="px-6 py-3 border border-gray-700 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
              Read all reviews
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
                  alt="Sarah Mensah" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-500/50"
                />
                <div>
                  <h4 className="font-bold">Sarah Mensah</h4>
                  <p className="text-sm text-gray-400">Homeowner, East Legon</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "I've tried several cleaning services in Accra, but Cool Job Services is on another level. The attention to detail in my kitchen and bathrooms was impressive."
              </p>
              <div className="mt-6 flex text-teal-400">★★★★★</div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:border-gray-600 transition-colors md:translate-y-8">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" 
                  alt="Kwame Asante" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-500/50"
                />
                <div>
                  <h4 className="font-bold">Kwame Asante</h4>
                  <p className="text-sm text-gray-400">CEO, TechHub Ghana</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "We needed a reliable team for our office cleaning. They are punctual, professional, and invisible while they work. Highly recommended for businesses."
              </p>
              <div className="mt-6 flex text-teal-400">★★★★★</div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150" 
                  alt="Ama Osei" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-500/50"
                />
                <div>
                  <h4 className="font-bold">Ama Osei</h4>
                  <p className="text-sm text-gray-400">Tenant, Cantonments</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "The move-out cleaning saved my security deposit. They scrubbed places I didn't even know existed. Thank you for the stress-free experience!"
              </p>
              <div className="mt-6 flex text-teal-400">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Split Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <span className="text-teal-600 font-bold uppercase tracking-wider text-xs">Support</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">Frequently Asked Questions</h2>
                <p className="text-gray-500 mb-8">Can't find the answer you're looking for? Chat with our AI assistant or call us directly.</p>
                <Link to="/contact" className="font-bold text-teal-600 hover:text-teal-800 underline underline-offset-4 decoration-2">
                  Contact Support →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {[
                { q: "Do I need to be home during the cleaning?", a: "It's completely up to you. You can be present to let us in, or provide us with a key or access code. Many of our regular clients trust us with a key." },
                { q: "Are your cleaning products safe for pets?", a: "Yes, we use eco-friendly and non-toxic products that are safe for children and pets. If you have specific allergies, please let us know." },
                { q: "How do you vet your cleaners?", a: "Every staff member undergoes a strict background check, in-person interviews, and rigorous training on our cleaning standards before entering any client's home." },
                { q: "What if I'm not satisfied with the service?", a: "We offer a 100% satisfaction guarantee. If you're not happy with any aspect of the clean, let us know within 24 hours and we will come back to re-clean for free." }
              ].map((item, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Ready for a spotless space?</h2>
              <p className="text-xl text-gray-300 mb-10 font-light">
                Join hundreds of satisfied customers in Ghana. Book your professional cleaning service today in less than 2 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking" className="px-10 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg">
                  Book a Cleaning
                </Link>
                <Link to="/contact" className="px-10 py-4 bg-transparent border border-gray-500 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;