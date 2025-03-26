import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ 
  variant = 'primary', 
  children, 
  disabled = false, 
  className = '', 
  ...props 
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'btn-bookmyshow-primary';
      case 'secondary':
        return 'btn-bookmyshow-secondary';
      case 'disabled':
        return 'btn-bookmyshow-disabled';
      default:
        return 'btn-bookmyshow-primary';
    }
  };

  return (
    <Button
      variant={variant}
      disabled={disabled}
      className={`${getVariantClass()} ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton; 