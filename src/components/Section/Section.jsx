import React from 'react';
import PropTypes from 'prop-types';

/**
 * Section Component
 * Reusable section component for landing page sections
 * 
 * @param {string} id - Unique identifier for the section
 * @param {string} title - Section title
 * @param {string} subtitle - Section subtitle
 * @param {React.ReactNode} children - Section content
 * @param {string} bgColor - Background color class (default: 'bg-white')
 */
const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  bgColor = 'bg-white'
}) => {
  return (
    <section 
      id={id} 
      className={`${bgColor} py-16 md:py-24`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {subtitle && (
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-3">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {title}
              </h2>
            )}
          </div>
        )}
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
};

export default Section;
