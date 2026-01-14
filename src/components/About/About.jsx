import React from 'react';

/**
 * About Section Component
 * Displays information about the company
 */
const About = () => {
  return (
    <div className="text-center md:text-left">
      <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
        We are a team of passionate developers and designers dedicated to creating
        exceptional digital experiences. Our mission is to help businesses grow
        through innovative technology solutions.
      </p>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        With years of experience in the industry, we've built a reputation for
        delivering high-quality products that exceed expectations. We believe in
        continuous learning and staying ahead of the curve with the latest
        technologies and best practices.
      </p>
    </div>
  );
};

export default About;
