import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

/**
 * Generic Section Content Component
 * Reusable content section with tagline, heading, description, and buttons
 */
const SectionContent = ({ 
  tagline, 
  taglineIcon, 
  heading, 
  headingHighlight, 
  belowHighlight,
  description, 
  buttons = [],
  className = '',
  children 
}) => {
  return (
    <div className={`w-full ${className}`}>
      {tagline && (
        <span className='tagline mb-[20px]'>
          {taglineIcon && <FontAwesomeIcon icon={taglineIcon} />}
          {tagline}
        </span>
      )}
      <div className='banner-tittle'>
        {heading && (
          <h1>
            {heading}
            {headingHighlight && <span>{headingHighlight}</span>} 
            {belowHighlight}
          </h1>
        )}
        {description && <p>{description}</p>}
        {buttons.length > 0 && (
          <div className="flex gap-4 mt-6">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.children}
              </Button>
            ))}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default SectionContent;
