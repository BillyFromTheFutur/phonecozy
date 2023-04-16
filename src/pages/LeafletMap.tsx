import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const LeafletMapLazyComp: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const [lng, setLng] = useState<number | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const successCallBackPosition = (position: GeolocationPosition) => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  };
  const errorCallBackPosition: () => unknown = (): unknown => {
    return;
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successCallBackPosition,
      errorCallBackPosition
    );
    setIsMounted(true);
  }, [lng, lat]);
  return (
    <>
      {isMounted && lng == null && lat == null && (
        <h1>😔 YOU DIDNT GAVE YOUR POSITION...</h1>
      )}
      {isMounted && lng != null && lat != null && (
        <MapContainer
          className="relative h-full w-full"
          center={[40.0, 40.0]}
          zoom={3}
          maxZoom={5}
          minZoom={2}
          attributionControl={false}
          bounds={[
            [51.505, -0.09],
            [51.5, -0.06],
          ]}
          boundsOptions={{}}
          maxBoundsViscosity={0.1}
          // maxBoundsViscosity={1.0}
          //         whenReady={(map) => (mapRef.current = map)}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
        </MapContainer>
      )}
    </>
  );
};

export default LeafletMapLazyComp;
