import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  light = false
}) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${light ? 'text-white' : 'text-secondary'}`}>
        {title}
      </h2>
      {subtitle && (
        <div className={`h-1 w-24 bg-accent rounded-full mb-6 ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
      )}
      {subtitle && (
        <p className={`text-lg max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};