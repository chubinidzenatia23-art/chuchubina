import React from 'react';
import PlaceCard from './components/PlaceCard';
import placesData from './data/places';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">dajavshne.online.ge</h1>
          <p className="text-gray-500 mt-1">აღმოაჩინე და დაჯავშნე საუკეთესო ადგილები</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placesData.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
}
