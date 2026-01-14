import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../components/Banner';
import Features from '../../components/Features';
import Community from '../../components/Community';
/**
 * Main Layout Component
 * Container for all landing page sections
 * 
 * @param {Array} sections - Array of section configuration objects
 */
const Main = ({ sections = [] }) => {
  return (
    <main className="min-h-screen">
        <Banner />
        <Features/>
        <Community/>
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
