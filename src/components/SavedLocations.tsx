import React from 'react';
import { MapPin, Trash2 } from 'lucide-react';
import type { SavedLocation } from '../types/maps';

interface SavedLocationsProps {
  locations: SavedLocation[];
  onSelect: (location: SavedLocation) => void;
  onRemove: (id: string) => void;
}

export default function SavedLocations({ locations, onSelect, onRemove }: SavedLocationsProps) {
  if (locations.length === 0) {
    return (
      <div className="text-gray-500 text-center py-4">
        No saved locations yet
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {locations.map((location) => (
        <div
          key={location.id}
          className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => onSelect(location)}
            className="flex items-center flex-1 text-left"
          >
            <MapPin className="text-blue-500 mr-2" size={18} />
            <div>
              <h3 className="font-medium">{location.name}</h3>
              <p className="text-sm text-gray-500">{location.address}</p>
            </div>
          </button>
          <button
            onClick={() => onRemove(location.id)}
            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}