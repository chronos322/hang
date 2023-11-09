'use client';

import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { LatLng, LeafletEvent } from 'leaflet';
import { Popup } from 'react-leaflet';

const [position, setPosition] = useState<LatLng | null>(null as LatLng | null);



// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl; 
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

interface MapProps {
  center?: number[]
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

function LocationMarker() {
  const [position, setPosition] = useState<LatLng | null>(null);

  // Explicitly define the type for the map object
  const map = useMapEvents({
    click(e: LeafletEvent) {
      map.locate();
    },
    locationfound(e: LeafletEvent) {
      const latlng = (e as any).latlng as LatLng; // Cast latlng to LatLng
      setPosition(latlng);
      map.flyTo(latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const Map: React.FC<MapProps> = ({ center }) => {
  return (
      <MapContainer 
        center={center as L.LatLngExpression || [46, 105]} 
        zoom={13} 
        scrollWheelZoom={false} 
        className="h-[35vh] rounded-lg"
      >
        <TileLayer
          url={url}
          attribution={attribution}
        />
        {center && (
          <Marker position={center as L.LatLngExpression} />
        )}
      </MapContainer>
  )
}

export default Map