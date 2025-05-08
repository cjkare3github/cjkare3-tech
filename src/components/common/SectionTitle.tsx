import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = true,
  light = false,
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <h2 
        className={`text-3xl md:text-4xl font-bold mb-4 relative inline-block pb-3
          ${light ? 'text-white' : 'text-gray-900 dark:text-white'}
        `}
      >
        {title}
        <span className="absolute bottom-0 left-0 w-2/3 h-1 bg-primary rounded-full"></span>
      </h2>
      {subtitle && (
        <p 
          className={`text-lg max-w-3xl mx-auto
            ${light ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;