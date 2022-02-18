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
import { getLocationByOsmIdOsmtype } from "../utils/api";

const Map = ({ searchResult }) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [placeData, setPlaceData] = useState({});
  //   let testLocation = [53.722761112180216, -1.8599722637531162];

  useEffect(() => {}, []);

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

    return searchResult.length ? (
      <>
        {searchResult.map((place) => {
          let location = [place.lat, place.lon];
          // console.log(place);
          return (
            <Marker
              key={place.place_id}
              position={location}
              eventHandlers={{
                click: () => {
                  getLocationByOsmIdOsmtype(place.osm_type, place.osm_id).then(
                    (res) => {
                      // setPlaceData(res);
                      // console.log(placeData);
                    }
                  );
                },
              }}
            >
              <Popup>
                <div>
                  <h2>{}</h2>
                  <p>{place.display_name}</p>
                  <p>{place.address.city}</p>
                  <p>{place.address.county}</p>
                  <p>{place.address.postcode}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </>
    ) : null;
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
