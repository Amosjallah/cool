import React from 'react';
import BookingForm from './BookingForm';
import { PHONE_NUMBER, EMAIL, LOCATION } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="bg-teal-900 py-16 text-white text-center">
         <h1 className="text-4xl font-bold">Contact Us</h1>
         <p className="mt-4 text-teal-100">We'd love to hear from you. Get in touch with us today.</p>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* Contact Info */}
           <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                 <h3 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                       </div>
                       <div>
                          <p className="font-semibold text-gray-900">Phone</p>
                          <p className="text-gray-600">{PHONE_NUMBER}</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                       </div>
                       <div>
                          <p className="font-semibold text-gray-900">Email</p>
                          <p className="text-gray-600">{EMAIL}</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                       </div>
                       <div>
                          <p className="font-semibold text-gray-900">Location</p>
                          <p className="text-gray-600">{LOCATION}</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Booking Form */}
           <div className="lg:col-span-2">
              <BookingForm />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;