import React from 'react';
import { BookOpen, BookMarked, Search } from 'lucide-react';

const Reading = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-italian-green">Reading Practice</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search articles..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-italian-green"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-[url('https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800')] bg-cover bg-center" />
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Beginner</span>
              <span className="text-gray-500">5 min read</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Un Giorno a Roma</h3>
            <p className="text-gray-600 mb-4">Explore the eternal city through this simple narrative about a day in Rome...</p>
            <button className="w-full bg-italian-green text-white px-4 py-2 rounded-md hover:bg-opacity-90">
              Start Reading
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-[url('https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?auto=format&fit=crop&w=800')] bg-cover bg-center" />
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Intermediate</span>
              <span className="text-gray-500">8 min read</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">La Cucina Italiana</h3>
            <p className="text-gray-600 mb-4">Discover the rich traditions of Italian cuisine through this engaging article...</p>
            <button className="w-full bg-italian-green text-white px-4 py-2 rounded-md hover:bg-opacity-90">
              Start Reading
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-[url('https://images.unsplash.com/photo-1518730518541-d0843268c287?auto=format&fit=crop&w=800')] bg-cover bg-center" />
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">Advanced</span>
              <span className="text-gray-500">12 min read</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">L'Arte del Rinascimento</h3>
            <p className="text-gray-600 mb-4">An in-depth look at the Renaissance period and its impact on Italian art...</p>
            <button className="w-full bg-italian-green text-white px-4 py-2 rounded-md hover:bg-opacity-90">
              Start Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reading;