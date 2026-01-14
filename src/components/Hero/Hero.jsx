import React from 'react';

/**
 * Hero Section Component
 * Main hero/banner section for the landing page
 */
const Hero = () => {
  return (
    <div className="text-center">
      <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 leading-relaxed">
        Build amazing experiences with our modern platform. 
        We provide the tools and services you need to succeed.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-4">
        <button className="w-full sm:w-auto bg-primary-600 text-white px-8 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Get Started
        </button>
        <button className="w-full sm:w-auto bg-white text-primary-600 px-8 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-primary-600 hover:border-primary-700">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
