import React from "react";
import Map, { Marker } from "react-map-gl";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
  cursor: "pointer",
  fill: "#d00",
  stroke: "none",
};
export function CustomMap() {
  const longitude = 14.80188890096415;
  const latitude = 56.87893355738348;

  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiZGFpbmphIiwiYSI6ImNsMWF3NzAyYjAzY2IzaW96NXZmMGI3bTEifQ.02VQ45FwlNIQLTVcTYCxMw"
      initialViewState={{
        longitude,
        latitude,
        zoom: 15,
      }}
      style={{ width: 600, height: 600 }}
      mapStyle="mapbox://styles/dainja/cl1awdsgy005a14o08f3t3f72"
    >
      <Marker longitude={longitude} latitude={latitude} anchor="center">
        <svg height={20} viewBox="0 0 24 24" style={pinStyle}>
          <path d={ICON} />
        </svg>
      </Marker>
    </Map>
  );
}
