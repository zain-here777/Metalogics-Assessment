import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import logoHeader from '../../assets/images/logo-header.svg';

/**
 * Navbar Component
 * Professional navigation bar with responsive design
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="lg:p-[30px] p-[20px] z-50 xl:container m-auto lg:flex block w-full gap-[30px] justify-between">
      <div className="w-full">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logoHeader} alt="Logo" className="w-[164px] object-cover mr-2" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 gap-[30px]">
              <a href="#home" className="nav-link relative text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">HOME</a>
              <a href="#about" className="nav-link relative text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">ABOUT</a>
              <a href="#pricing" className="nav-link relative text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">PRICING</a>
              <a href="#gallery" className="nav-link relative text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">GALLERY</a>
              <a href="#student-login" className="nav-link relative text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">STUDENT LOGIN</a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button icon="arrow-right">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a
              href="#home"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button className="w-full mt-2 bg-primary-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-primary-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
