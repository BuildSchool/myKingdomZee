import { SavedLocation } from '../types/maps';

const STORAGE_KEY = 'savedLocations';

export const getSavedLocations = (): SavedLocation[] => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const saveLocation = (location: SavedLocation): void => {
  const locations = getSavedLocations();
  locations.push(location);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(locations));
};

export const removeLocation = (id: string): void => {
  const locations = getSavedLocations();
  const filtered = locations.filter(loc => loc.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};