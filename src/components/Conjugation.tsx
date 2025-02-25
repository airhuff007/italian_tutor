import React from 'react';
import { Search } from 'lucide-react';

const Conjugation = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-italian-green">Verb Conjugation</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search verbs..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-italian-green"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Common Verbs</h3>
          <ul className="space-y-2">
            <li className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer">
              <span className="font-medium">Essere</span>
              <span className="text-gray-500 text-sm block">to be</span>
            </li>
            <li className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer">
              <span className="font-medium">Avere</span>
              <span className="text-gray-500 text-sm block">to have</span>
            </li>
            <li className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer">
              <span className="font-medium">Fare</span>
              <span className="text-gray-500 text-sm block">to do/make</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Conjugation Table</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-italian-green mb-2">Present Tense (Presente)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p>io sono</p>
                  <p>tu sei</p>
                  <p>lui/lei è</p>
                </div>
                <div className="space-y-2">
                  <p>noi siamo</p>
                  <p>voi siete</p>
                  <p>loro sono</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-italian-red mb-2">Past Tense (Passato Prossimo)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p>io sono stato/a</p>
                  <p>tu sei stato/a</p>
                  <p>lui/lei è stato/a</p>
                </div>
                <div className="space-y-2">
                  <p>noi siamo stati/e</p>
                  <p>voi siete stati/e</p>
                  <p>loro sono stati/e</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conjugation;