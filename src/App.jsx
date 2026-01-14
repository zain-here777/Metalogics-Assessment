import React from 'react';
import Navbar from './components/global/Navbar';
import Main from './layouts/Main';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/Banner';

/**
 * App Component
 * Main application component that structures the landing page layout
 * Contains only layout structure and routes, content is in separate components
 */
function App() {
  // Define sections configuration for the landing page
  // Each section references a component from the components directory
  const sections = [
    {
      id: 'hero',
      title: 'Welcome to Our Platform',
      subtitle: 'Get Started',
      bgColor: 'bg-gradient-to-br from-primary-50 to-primary-100',
      content: <Hero />,
    },
    {
      id: 'features',
      title: 'Our Features',
      subtitle: 'What We Offer',
      bgColor: 'bg-white',
      content: <Features />,
    },
    {
      id: 'about',
      title: 'About Us',
      subtitle: 'Our Story',
      bgColor: 'bg-gray-50',
      content: <About />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <Main sections={sections} />
      <Footer />
    </div>
  );
}

export default App;
