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
        relative rounded-2xl overflow-hidden shadow-md text-white 
        ${isMobile ? 'w-full h-auto' : ''} 
        ${isMobile ? 'w-[200px]': 'w-[360px]'} 
        ${isMobile ? 'h-[225px]': 'h-[340px]'}
        transition-all duration-300 
        hover:shadow-xl 
        hover:scale-[1.03] 
        hover:brightness-110
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
      <div className={`absolute top-2 right-2 flex space-x-2 ${isMobile ? 'top-1 right-1' : ''}`}>
        <span className={`flex items-center space-x-1 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs ${isMobile ? 'text-xs' : ''} transition-all duration-300 hover:bg-white/30`}>
          <Eye size={14} />
          <span>428</span>
        </span>
        <span className={`flex items-center space-x-1 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs ${isMobile ? 'text-xs' : ''} transition-all duration-300 hover:bg-white/30`}>
          <BarChart size={14} />
        </span>
      </div>

      {/* Text Content */}
      <div className={`absolute bottom-0 p-4 w-full ${isMobile ? 'p-3' : ''}`}>
        <h2 className={`text-lg font-semibold leading-tight ${isMobile ? 'text-sm' : ''}`}>{title}</h2>
        <div className={`flex items-center mt-2 space-x-2 text-sm ${isMobile ? 'text-xs' : ''}`}>
          <span className="font-bold uppercase">{category}</span>
          <span className="text-gray-300">•</span>
          <span>{date}</span>
          <span
            className={`ml-2 px-2 py-1 rounded-md text-xs font-medium ${statusColor}`}
          >
            {status}
          </span>
        </div>

        {/* Buttons */}
        <div className={`mt-4 flex space-x-2 ${isMobile ? 'flex-col space-y-2 space-x-0' : ''}`}>
          <button className={`bg-white text-black px-4 py-2 rounded-xl text-sm font-medium ${isMobile ? 'px-3 py-1 text-xs' : ''} transition-all duration-300 hover:bg-opacity-90 hover:shadow-md`}>
            View
          </button>
          <button className={`bg-white text-black px-3 py-2 rounded-xl text-sm font-medium ${isMobile ? 'px-2 py-1 text-xs' : ''} transition-all duration-300 hover:bg-opacity-90 hover:shadow-md`}>
            ...
          </button>
        </div>
      </div>
    </div>
  );
}