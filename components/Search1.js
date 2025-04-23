import { useState, useEffect } from 'react';
import { Calendar, Filter, Search } from 'lucide-react';

export default function Search1() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`
      flex flex-col 
      ${isMobile ? 'items-start justify-start gap-1.5 px-2 py-1' : 'sm:flex-row justify-end mt-2 flex-wrap gap-3 px-4 sm:px-6 py-2'}
    `}>
      {/* Search input - smaller and left-aligned on mobile */}
      <div className={`
        flex bg-gray-50 border border-gray-300 shadow-sm
        ${isMobile ? 'px-2 py-1 w-5/6' : 'px-3 py-2 w-full sm:w-60'}
      `}>
        <Search className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} text-gray-400`} />
        <input
          type="text"
          placeholder="Search"
          className={`bg-transparent outline-none text-gray-700 w-full ml-1.5 ${isMobile ? 'text-xs' : 'text-sm'}`}
        />
      </div>
      
      {/* Action buttons - smaller and left-aligned on mobile */}
      <div className={`flex ${isMobile ? 'gap-1 mt-1 self-start' : 'gap-2 mt-2 sm:mt-0'}`}>
        <button className={`bg-gray-100 rounded-lg shadow-sm ${isMobile ? 'p-1' : 'p-2'}`}>
          <Calendar className={`${isMobile ? 'w-3.5 h-3.5' : 'w-5 h-5'} text-purple-950`} />
        </button>
        <button className={`bg-gray-100 rounded-lg shadow-sm ${isMobile ? 'p-1' : 'p-2'}`}>
          <Filter className={`${isMobile ? 'w-3.5 h-3.5' : 'w-5 h-5'} text-purple-950`} />
        </button>
      </div>
      
      {/* Add New Story button - smaller and left-aligned on mobile */}
      <button className={`
        bg-purple-950 text-white font-medium shadow-sm hover:bg-purple-800 
        ${isMobile ? 'px-3 py-1 text-xs rounded-md w-auto mt-1' : 'px-5 py-2 text-sm rounded-xl w-full sm:w-auto sm:ml-2 md:ml-10 mt-2 sm:mt-0'}
      `}>
        Add New Story
      </button>
    </div>
  );
}