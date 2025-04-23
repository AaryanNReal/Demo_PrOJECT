import React, { useState, useEffect } from "react";

const tabs = [
  { label: "All", count: 4500 },
  { label: "Draft", count: 1203 },
  { label: "Pending", count: 890 },
  { label: "Published", count: 2432 },
  { label: "Archived", count: 320 },
];

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("All");
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
    <div className={`flex gap-1 p-1 overflow-x-auto whitespace-nowrap scrollbar-hide ${isMobile ? 'pb-2' : 'p-2'}`}>
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={`
            rounded-lg font-medium transition-all shrink-0
            ${isMobile ? 'px-2 py-1 text-xs' : 'px-4 py-1.5 text-sm'}
            ${
              activeTab === tab.label
                ? "bg-[#1B103E] text-white"
                : "bg-[#ECECF2] text-black hover:bg-[#ddd]"
            }
          `}
        >
          {tab.label}{" "}
          <span
            className={`${
              activeTab === tab.label ? "text-white" : "text-gray-500"
            } ${isMobile ? 'text-xs' : ''}`}
          >
            {isMobile ? `(${tab.count})` : `(${tab.count.toLocaleString()})`}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TabMenu;