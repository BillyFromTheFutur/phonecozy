import React, { useEffect, useState, useRef } from "react";
//import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Map from "react-map-gl";
import maplibregl from "maplibre-gl";

import { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

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
  const customMarkerIcon = divIcon({
    html: renderToStaticMarkup(<div className="userMarker"></div>),
  });

  return (
    <>
      {isMounted && lng == null && lat == null && (
        <h1>😔 YOU DIDNT GAVE YOUR POSITION...</h1>
      )}
      {
        isMounted && lng != null && lat != null && (
        )
        /*
      <MapContainer
        className="relative h-full w-full bg-transparent"
        center={[lat, lng]}
        zoom={15}
        //maxZoom={}
        minZoom={5}
        attributionControl={false}
      // maxBoundsViscosity={1.0}
      //         whenReady={(map) => (mapRef.current = map)}
      >
        <TileLayer
          url="
          https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
          "
        />
        <Marker position={[lat, lng]} icon={customMarkerIcon} />
      </MapContainer>
*  {
         Call the handleGetCenter function on button click 
      }
      */
      }
    </>
  );
};

export default LeafletMapLazyComp;
