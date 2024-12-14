import React, { useState } from 'react';
import { Search } from 'lucide-react';
import type { SearchResult } from '../types/maps';

interface SearchBarProps {
  onSearch: (result: SearchResult) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const geocoder = new google.maps.Geocoder();
    
    try {
      const result = await geocoder.geocode({ address: query });
      if (result.results[0]) {
        const { lat, lng } = result.results[0].geometry.location;
        onSearch({
          address: result.results[0].formatted_address,
          lat: lat(),
          lng: lng()
        });
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a location..."
          className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
}