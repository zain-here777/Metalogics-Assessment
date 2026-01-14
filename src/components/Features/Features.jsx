import React from 'react';

/**
 * Features Section Component
 * Displays key features of the platform
 */
const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <div className="text-center p-6 md:p-8 rounded-lg bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">Fast Performance</h3>
        <p className="text-gray-600 leading-relaxed">
          Lightning-fast performance optimized for the best user experience.
        </p>
      </div>
      <div className="text-center p-6 md:p-8 rounded-lg bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">Secure</h3>
        <p className="text-gray-600 leading-relaxed">
          Enterprise-grade security to protect your data and privacy.
        </p>
      </div>
      <div className="text-center p-6 md:p-8 rounded-lg bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">User Friendly</h3>
        <p className="text-gray-600 leading-relaxed">
          Intuitive interface designed with user experience in mind.
        </p>
      </div>
    </div>
  );
};

export default Features;
