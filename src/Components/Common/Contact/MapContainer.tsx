import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const MapContainer = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  // Convert degrees, minutes, seconds to decimal
  const latitude = 53 + (43 / 60) + (29.8 / 3600);
  const longitude = -(2 + (41 / 60) + (14.3 / 3600)); // Negative for west

  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA6RnHhsZgYcnISTuLDvWLrhRkEaVCGTYs"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        {/* Marker for the specified location */}
        <Marker position={defaultCenter} />

        {/* Add your other markers, polygons, or other map components here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
