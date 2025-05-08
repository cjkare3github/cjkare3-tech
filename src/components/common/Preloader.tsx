import React from 'react';
import { Code } from 'lucide-react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="flex items-center gap-3 mb-6 animate-pulse">
        <Code size={40} className="text-primary" />
        <h1 className="text-3xl font-bold font-poppins">
          <span>CJKARE3</span>
          <span className="text-accent"> TECH</span>
        </h1>
      </div>
      
      <div className="relative h-1 w-40 bg-gray-200 rounded-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-primary rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
};

export default Preloader;