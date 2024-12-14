import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { GOOGLE_MAPS_API_KEY } from '../config/maps';
import type { SearchResult } from '../types/maps';

interface MapProps {
  center: { lat: number; lng: number };
}

export default function Map({ center }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: GOOGLE_MAPS_API_KEY,
        version: 'weekly',
      });

      try {
        await loader.load();
        if (mapRef.current && !googleMapRef.current) {
          googleMapRef.current = new google.maps.Map(mapRef.current, {
            center,
            zoom: 12,
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }],
              },
            ],
          });
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, []);

  useEffect(() => {
    if (googleMapRef.current) {
      googleMapRef.current.setCenter(center);
      
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }

      markerRef.current = new google.maps.Marker({
        position: center,
        map: googleMapRef.current,
        animation: google.maps.Animation.DROP,
      });
    }
  }, [center]);

  return <div ref={mapRef} className="w-full h-full rounded-lg" />;
}