import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const PakistanMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [69.3451, 30.3753], // Pakistan center coordinates
      zoom: 5,
      pitch: 30,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add marker for headquarters (Karachi)
    new mapboxgl.Marker({ color: '#D97706' })
      .setLngLat([67.0011, 24.8607])
      .setPopup(new mapboxgl.Popup().setHTML('<h3 class="font-bold">StitchScanTex HQ</h3><p>Karachi, Pakistan</p>'))
      .addTo(map.current);

    // Add marker for Lahore office
    new mapboxgl.Marker({ color: '#D97706' })
      .setLngLat([74.3587, 31.5204])
      .setPopup(new mapboxgl.Popup().setHTML('<h3 class="font-bold">Lahore Office</h3><p>Lahore, Pakistan</p>'))
      .addTo(map.current);

    // Add marker for Faisalabad factory
    new mapboxgl.Marker({ color: '#D97706' })
      .setLngLat([73.0479, 31.4504])
      .setPopup(new mapboxgl.Popup().setHTML('<h3 class="font-bold">Production Facility</h3><p>Faisalabad, Pakistan</p>'))
      .addTo(map.current);

    map.current.on('load', () => {
      setIsMapLoaded(true);
    });

    return () => {
      map.current?.remove();
    };
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Location
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Based in Pakistan, we serve clients worldwide with our premium textile solutions.
          </p>
        </div>

        {!isMapLoaded && (
          <div className="max-w-md mx-auto mb-8 bg-card p-6 rounded-xl shadow-soft">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">Enter Mapbox Token</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Get your free public token from{' '}
              <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                mapbox.com
              </a>
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="pk.eyJ1..."
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="flex-1"
              />
              <Button onClick={initializeMap} disabled={!token}>
                Load Map
              </Button>
            </div>
          </div>
        )}

        <div className="relative rounded-xl overflow-hidden shadow-strong">
          <div
            ref={mapContainer}
            className={`w-full h-[500px] ${!isMapLoaded ? 'bg-muted flex items-center justify-center' : ''}`}
          >
            {!isMapLoaded && (
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p>Map will appear here</p>
              </div>
            )}
          </div>
        </div>

        {isMapLoaded && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-soft text-center">
              <h3 className="font-heading font-semibold text-foreground mb-2">Headquarters</h3>
              <p className="text-muted-foreground text-sm">Karachi, Pakistan</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-soft text-center">
              <h3 className="font-heading font-semibold text-foreground mb-2">Regional Office</h3>
              <p className="text-muted-foreground text-sm">Lahore, Pakistan</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-soft text-center">
              <h3 className="font-heading font-semibold text-foreground mb-2">Production</h3>
              <p className="text-muted-foreground text-sm">Faisalabad, Pakistan</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PakistanMap;
