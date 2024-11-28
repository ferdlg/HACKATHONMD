import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css';

const EjemploMapa = () => {
  const puntos = [
    { lat: 40.7128, lon: -74.0060, descripcion: 'Nueva York' },
    { lat: 34.0522, lon: -118.2437, descripcion: 'Los Ángeles' },
    { lat: 41.8781, lon: -87.6298, descripcion: 'Chicago' },
  ];

  return (
    <MapContainer 
      center={[40.7128, -74.0060]} 
      zoom={5} 
      style={{ width: '100%', height: '500px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      

      {puntos.map((punto, index) => (
        <Marker 
          key={index} 
          position={[punto.lat, punto.lon]} 
          icon={new L.Icon({ iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mauritius_Road_Signs_-_Mandatory_Sign_-_Compulsory_route_for_bicycle.svg/2048px-Mauritius_Road_Signs_-_Mandatory_Sign_-_Compulsory_route_for_bicycle.svg.png',
            iconSize: [40, 40],
           })}
        >
          <Popup>{punto.descripcion}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default EjemploMapa;
