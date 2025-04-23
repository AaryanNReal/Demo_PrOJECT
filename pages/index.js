import { useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import Search1 from '../components/Search1';
import Tab from '../components/Tab';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
      if (window.innerWidth >= 786) {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Simplified grid columns configuration
  const getGridColumns = () => {
    if (isMobile) return 'grid-cols-1';
    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Admin Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>

      <div className="flex min-h-screen bg-gray-100">
        {/* Mobile toggle button - better positioning and accessibility */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="fixed top-4 left-4 z-50 p-2 bg-purple-800 text-white rounded-md shadow-lg"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            {sidebarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        )}

        {/* Overlay backdrop for mobile sidebar */}
        {(isMobile && sidebarOpen) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>
        )}
        
        {/* Sidebar with improved mobile handling */}
        <div className={`${
          isMobile 
            ? sidebarOpen 
              ? 'fixed left-0 top-0 z-50 h-full w-64 shadow-xl transition-transform duration-300 ease-in-out transform translate-x-0' 
              : 'fixed left-0 top-0 z-50 h-full w-64 shadow-xl transition-transform duration-300 ease-in-out transform -translate-x-full'
            : 'relative w-64'
        }`}>
          <Sidebar />
        </div>

        {/* Main Content Area with padding adjustments for mobile */}
        <div className={`flex flex-col flex-1 transition-all duration-300 ${isMobile ? (sidebarOpen ? 'ml-0 opacity-30' : 'ml-0') : 'ml-0'}`}>
          {/* TopBar with better mobile spacing */}
          <div className={`${isMobile ? 'px-4 py-2 ml-14' : 'px-6 py-3'}`}>
            <TopBar />
          </div>

          {/* Search with mobile optimization */}
          <div className={`${isMobile ? 'px-4 py-2' : 'px-6 py-3'}`}>
            <Search1 />
          </div>

          {/* Tabs with horizontal scrolling for mobile */}
          <div className={`${isMobile ? 'px-4 py-2 overflow-x-auto whitespace-nowrap' : 'px-6 py-3'}`}>
            <Tab />
          </div>

          {/* Page Content with improved grid for mobile */}
          <main className={`flex-1 ${isMobile ? 'p-4 pt-2' : 'p-6'}`}>
            <div className={`grid ${getGridColumns()} gap-y-4 gap-x-3`}>
              <ArticleCard
                imageSrc="/images/1.png"
                title="How 7 lines of code turned into a $36B empire"
                category="Business"
                date="20 Sep 2022"
                status="Published"
                statusColor="bg-green-100 text-green-800"
              />
              <ArticleCard
                imageSrc="/images/2.png"
                title="Chez Pierre: Restaurant in Monte Carlo"
                category="Business"
                date="20 Sep 2022"
                status="Created"
                statusColor="bg-blue-100 text-blue-800"
              />
              <ArticleCard
                imageSrc="/images/3.png"
                title="Teknion wins Gold at 2022 Design Awards"
                category="Politics"
                date="20 Sep 2022"
                status="Draft"
                statusColor="bg-gray-300 text-gray-600"
              />
              <ArticleCard
                imageSrc="/images/4.png"
                title="AI disrupting the Creative Industry"
                category="Tech"
                date="22 Oct 2022"
                status="Published"
                statusColor="bg-green-100 text-green-800"
              />
              <ArticleCard
                imageSrc="/images/5.png"
                title="New Sports Policy for Youth Development"
                category="Sports"
                date="10 Nov 2022"
                status="Draft"
                statusColor="bg-yellow-100 text-yellow-800"
              />
              <ArticleCard
                imageSrc="/images/6.png"
                title="Chez pierre restaurant in Monte Carlo by Vuidafieri"
                category="Culture"
                date="2 Dec 2022"
                status="Created"
                statusColor="bg-blue-100 text-blue-800"
              />
              <ArticleCard
                imageSrc="/images/7.png"
                title="Teknion wins Gold at 2022 International Design Awards"
                category="Culture"
                date="2 Dec 2022"
                status="Created"
                statusColor="bg-blue-100 text-blue-800"
              />
              <ArticleCard
                imageSrc="/images/8.png"
                title="How 7 lines code turned into $36 Billion Empire"
                category="Culture"
                date="2 Dec 2022"
                status="Created"
                statusColor="bg-blue-100 text-blue-800"
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}