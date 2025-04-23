import { Calendar, Filter, Search } from 'lucide-react';

export default function Search1() {
  return (
    <div className="flex flex-col sm:flex-row justify-end mt-2 flex-wrap gap-3 px-4 sm:px-6 py-2">
      {/* Search input - full width on mobile */}
      <div className="flex bg-gray-50 border border-gray-300 px-3 py-2 w-full sm:w-60 shadow-sm">
        <Search className="w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-transparent outline-none text-sm text-gray-700 w-full ml-2"
        />
      </div>
      
      {/* Action buttons - wrap and centered on mobile */}
      <div className="flex gap-2 mt-2 sm:mt-0">
        <button className="p-2 bg-gray-100 rounded-lg shadow-sm">
          <Calendar className="w-5 h-5 text-purple-950" />
        </button>
        <button className="p-2 bg-gray-100 rounded-lg shadow-sm">
          <Filter className="w-5 h-5 text-purple-950" />
        </button>
      </div>
      
      {/* Add New Story button - full width on mobile */}
      <button className="bg-purple-950 text-white px-5 py-2 w-full sm:w-auto sm:ml-2 md:ml-10 mt-2 sm:mt-0 rounded-xl text-sm font-medium shadow-sm hover:bg-purple-800">
        Add New Story
      </button>
    </div>
  );
}