import React, { useState } from 'react';
import Map from './Map';
import SearchBar from './SearchBar';
import SavedLocations from './SavedLocations';
import { SavedLocation, SearchResult } from '../types/maps';
import { getSavedLocations, saveLocation, removeLocation } from '../utils/storage';
import { MapPin } from 'lucide-react';

export default function PropertyMap() {
  const [center, setCenter] = useState({ lat: 40.7128, lng: -74.0060 });
  const [locations, setLocations] = useState<SavedLocation[]>(getSavedLocations());

  const handleSearch = (result: SearchResult) => {
    setCenter({ lat: result.lat, lng: result.lng });
  };

  const handleSaveLocation = () => {
    const newLocation: SavedLocation = {
      id: Date.now().toString(),
      name: `Location ${locations.length + 1}`,
      address: 'Custom location',
      lat: center.lat,
      lng: center.lng
    };
    saveLocation(newLocation);
    setLocations(getSavedLocations());
  };

  const handleSelectLocation = (location: SavedLocation) => {
    setCenter({ lat: location.lat, lng: location.lng });
  };

  const handleRemoveLocation = (id: string) => {
    removeLocation(id);
    setLocations(getSavedLocations());
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Find Your Properties</h2>
          <p className="text-xl text-gray-600">Interactive map to locate and manage your properties</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Search Location</h3>
              <SearchBar onSearch={handleSearch} />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Saved Locations</h3>
                <button
                  onClick={handleSaveLocation}
                  className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <MapPin size={16} />
                  Save Current
                </button>
              </div>
              <SavedLocations
                locations={locations}
                onSelect={handleSelectLocation}
                onRemove={handleRemoveLocation}
              />
            </div>
          </div>

          <div className="lg:col-span-3 h-[600px] rounded-xl overflow-hidden shadow-xl">
            <Map center={center} />
          </div>
        </div>
      </div>
    </section>
  );
}