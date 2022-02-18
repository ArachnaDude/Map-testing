import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

const Map = () => {
  const [markerPosition, setMarkerPosition] = useState(null);
  //   let testLocation = [53.722761112180216, -1.8599722637531162];

  const LocationMarker = () => {
    // const map = useMapEvents({
    //   click: (location) => {
    //     const { latlng } = location;
    //     console.log(latlng);
    //   },
    //   dblclick: (location) => {
    //     const { latlng } = location;
    //     setMarkerPosition(latlng);
    //   },
    // });

    const map = useMapEvents({
      click: () => {},
    });

    return markerPosition === null ? null : (
      <Marker position={markerPosition}>
        <Popup>
          <p>
            lat = {markerPosition.lat.toFixed(4)}
            <br />
            lng = {markerPosition.lng.toFixed(4)}
          </p>
        </Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      id='map'
      center={[53.72213263797156, -1.85819149017334]}
      zoom={14}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
