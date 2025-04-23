import { useState, useEffect } from 'react';
import { Calendar, Filter, Search } from 'lucide-react';

export default function Search1() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786); // Using 786px as the breakpoint
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
    <div className={`flex flex-col ${isMobile ? 'gap-2 px-3 py-1.5' : 'sm:flex-row justify-end mt-2 flex-wrap gap-3 px-4 sm:px-6 py-2'}`}>
      {/* Search input - full width on mobile */}
      <div className={`flex bg-gray-50 border border-gray-300 ${isMobile ? 'px-2 py-1.5' : 'px-3 py-2'} w-full sm:w-60 shadow-sm`}>
        <Search className={`${isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-gray-400`} />
        <input
          type="text"
          placeholder="Search"
          className={`bg-transparent outline-none ${isMobile ? 'text-xs' : 'text-sm'} text-gray-700 w-full ml-2`}
        />
      </div>
      
      {/* Action buttons - wrap and centered on mobile */}
      <div className={`flex ${isMobile ? 'gap-1.5 mt-1.5 self-end' : 'gap-2 mt-2 sm:mt-0'}`}>
        <button className={`${isMobile ? 'p-1.5' : 'p-2'} bg-gray-100 rounded-lg shadow-sm`}>
          <Calendar className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-purple-950`} />
        </button>
        <button className={`${isMobile ? 'p-1.5' : 'p-2'} bg-gray-100 rounded-lg shadow-sm`}>
          <Filter className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-purple-950`} />
        </button>
      </div>
      
      {/* Add New Story button - full width on mobile */}
      <button className={`bg-purple-950 text-white ${isMobile ? 'px-4 py-1.5 text-xs rounded-lg' : 'px-5 py-2 rounded-xl text-sm'} w-full sm:w-auto sm:ml-2 md:ml-10 ${isMobile ? 'mt-1.5' : 'mt-2 sm:mt-0'} font-medium shadow-sm hover:bg-purple-800`}>
        Add New Story
      </button>
    </div>
  );
}