import React, { useState } from 'react';

export default function PlaceCard({ place }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        onClick={() => setShowModal(true)}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col justify-between p-4"
      >
        <div>
          <div className="relative h-48 rounded-xl overflow-hidden mb-3">
            <span className="absolute top-2 left-2 bg-slate-900/80 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
              GEORGIA
            </span>
            <img src={place.image} alt={place.title} className="w-full h-full object-cover" />
          </div>

          <h3 className="font-bold text-gray-900 text-lg leading-snug mb-1">{place.title}</h3>
          <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
            📍 {place.location}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-2">
          <div>
            <span className="text-blue-600 font-extrabold text-lg">{place.price}</span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-xl transition-colors"
          >
            დაჯავშნა
          </button>
        </div>
      </div>

      {/* დეტალების ფანჯარა (Modal) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="relative h-64">
              <img src={place.image} alt={place.title} className="w-full h-full object-cover" />
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg shadow-md transition-all"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                {place.category || 'ინფორმაცია'}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-1">{place.title}</h2>
              <p className="text-gray-500 text-sm mb-4">📍 {place.location}</p>

              <div className="bg-gray-50 border-l-4 border-amber-400 p-4 rounded-r-xl mb-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {place.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-xs text-gray-400">ღირებულება</p>
                  <p className="text-2xl font-extrabold text-blue-600">{place.price}</p>
                </div>
                <button 
                  onClick={() => alert('დაჯავშნის პროცესი დაწყებულია!')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  ახლავე დაჯავშნა
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
