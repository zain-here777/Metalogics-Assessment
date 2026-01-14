import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Global Button Component
 * Reusable button with icon support
 */
const Button = ({ children, icon, iconPosition = 'right', variant = 'primary', href, className = '', ...props }) => {
  const baseClasses = 'btn-primary';
  const variantClasses = variant === 'secondary' 
    ? 'bg-white border-2 border-btn-secondary text-orange-500 hover:bg-orange-50' 
    : '';
  
  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`} 
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      )}
    </Component>
  );
};

export default Button;
