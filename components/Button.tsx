import React from 'react';
import { scrollToSection } from '../utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  href,
  onClick,
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer inline-flex";
  
  const variants = {
    // Primary Button: Uses the brand Blue
    primary: "bg-primary text-white hover:bg-blue-700 hover:shadow-lg",
    // Secondary Button: Uses the Accent Yellow/Orange
    secondary: "bg-accent text-secondary hover:bg-yellow-400 hover:shadow-lg",
    // Outline: White border for dark backgrounds
    outline: "border-2 border-white text-white hover:bg-white/10",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        onClick={(e) => {
          if (onClick) onClick(e as any);
          scrollToSection(e, href);
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};