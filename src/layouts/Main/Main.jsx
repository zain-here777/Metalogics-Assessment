import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../components/Section';

/**
 * Main Layout Component
 * Container for all landing page sections
 * 
 * @param {Array} sections - Array of section configuration objects
 */
const Main = ({ sections = [] }) => {
  return (
    <main className="min-h-screen">
      {sections.map((section, index) => (
        <Section
          key={section.id || `section-${index}`}
          id={section.id || `section-${index}`}
          title={section.title}
          subtitle={section.subtitle}
          bgColor={section.bgColor || 'bg-white'}
        >
          {section.content}
        </Section>
      ))}
    </main>
  );
};

Main.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      content: PropTypes.node.isRequired,
      bgColor: PropTypes.string,
    })
  ),
};

export default Main;
