import { useState, useEffect } from 'react';
import { Eye, BarChart } from 'lucide-react';

export default function ArticleCard({ imageSrc, title, category, date, status, statusColor, className = '' }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`
        relative rounded-lg overflow-hidden shadow-md text-white
        ${isMobile ? 'w-[200px]' : 'w-[360px]'}
        ${isMobile ? 'h-[180px]' : 'h-[340px]'}
        transition-all duration-300
        hover:shadow-xl
        hover:scale-[1.02]
        hover:brightness-105
        ${className}
      `}
    >
      {/* Image */}
      <div className="h-full w-full bg-gray-300">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover opacity-60 transition-opacity duration-300 hover:opacity-75"
        />
      </div>

      {/* Top Right Icons */}
      <div className={`absolute top-2 right-2 flex space-x-1 ${isMobile ? 'top-1 right-1' : ''}`}>
        <span className={`flex items-center space-x-1 px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-md ${isMobile ? 'text-xs' : 'text-sm'} transition-all duration-300 hover:bg-white/30`}>
          <Eye size={isMobile ? 10 : 14} />
          <span className={isMobile ? 'text-xs' : ''}>428</span>
        </span>
        <span className={`flex items-center space-x-1 px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-md ${isMobile ? 'text-xs' : 'text-sm'} transition-all duration-300 hover:bg-white/30`}>
          <BarChart size={isMobile ? 10 : 14} />
        </span>
      </div>

      {/* Text Content */}
      <div className={`absolute bottom-0 w-full ${isMobile ? 'p-2' : 'p-4'}`}>
        <h2 className={`font-semibold leading-tight ${isMobile ? 'text-xs line-clamp-2' : 'text-lg'}`}>
          {title}
        </h2>
        
        <div className={`flex items-center mt-1 space-x-1 ${isMobile ? 'text-xs mt-0.5' : 'text-sm mt-2 space-x-2'}`}>
          <span className="font-bold uppercase">{category}</span>
          <span className="text-gray-300">•</span>
          <span>{date}</span>
          <span
            className={`ml-1 px-1.5 py-0.5 rounded ${isMobile ? 'text-xs' : 'text-sm'} font-medium ${statusColor}`}
          >
            {status}
          </span>
        </div>

        {/* Buttons */}
        <div className={`${isMobile ? 'mt-1.5 flex space-x-1' : 'mt-4 flex space-x-2'}`}>
          <button 
            className={`
              bg-white text-black rounded font-medium
              ${isMobile ? 'px-2 py-0.5 text-xs' : 'px-4 py-2 text-sm rounded-xl'}
              transition-all duration-300 hover:bg-opacity-90 hover:shadow-md
            `}
          >
            View
          </button>
          <button 
            className={`
              bg-white text-black rounded font-medium
              ${isMobile ? 'px-1.5 py-0.5 text-xs' : 'px-3 py-2 text-sm rounded-xl'}
              transition-all duration-300 hover:bg-opacity-90 hover:shadow-md
            `}
          >
            ...
          </button>
        </div>
      </div>
    </div>
  );
}