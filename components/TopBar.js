import { useState, useEffect } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';

export default function TopBar() {
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
    <div className={`flex justify-between items-center bg-white shadow-sm ${isMobile ? 'px-2 py-0.5 w-64' : 'px-4 py-1'}`}>
      {/* Left side - Back button and title */}
      <div className="flex items-center ml-1 space-x-1">
        <ArrowLeft className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-black`} />
        <span className={`font-semibold text-black ${isMobile ? 'text-base' : 'text-lg'}`}>Stories</span>
      </div>
      
      {/* Right side - User profile */}
      <div className={`
        flex items-center bg-white rounded-lg shadow border
        ${isMobile ? 'space-x-1.5 px-2 py-0.5' : 'space-x-3 px-4 py-1'}
      `}>
        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=Akshita"
          alt="User Avatar"
          className={`rounded-full ${isMobile ? 'w-6 h-6' : 'w-8 h-8'}`}
        />
        <div className={isMobile ? 'text-xs' : 'text-sm'}>
          <p className={`text-gray-500 ${isMobile ? 'text-xs leading-tight' : 'text-xs'}`}>Welcome back.</p>
          <p className={`font-medium text-gray-900 ${isMobile ? 'text-xs leading-tight' : 'text-sm'}`}>Akshita Patel</p>
        </div>
        <ChevronDown className={`text-gray-500 ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
      </div>
    </div>
  );
}