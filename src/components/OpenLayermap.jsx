import React, { useEffect, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import { Vector as VectorLayer } from "ol/layer";
import { Icon, Style } from "ol/style";
import { Attribution } from "ol/control";

const OpenLayermap = () => {
  const [latitude, setLatitude] = useState();
  const [userAddress, setUserAddress] = useState({});
  const [longitude, setLongitude] = useState();

  const geo = navigator.geolocation;
  geo.watchPosition(userCoords);
  function userCoords(position) {
    let userLatitude = position.coords.latitude;
    let userLongitude = position.coords.longitude;

    setLatitude(userLatitude);
    setLongitude(userLongitude);
  }
  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([longitude, latitude]),
        zoom: 10,
      }),
    });

    // Add marker to the map
    const marker = new Feature({
      geometry: new Point(fromLonLat([longitude, latitude])),
    });

    const markerStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: "https://openlayers.org/en/latest/examples/data/icon.png",
      }),
    });

    marker.setStyle(markerStyle);

    const vectorSource = new VectorSource({
      features: [marker],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    map.addLayer(vectorLayer);

    map.getControls().forEach((control) => {
      if (control instanceof Attribution) {
        map.removeControl(control);
      }
    });

    return () => {
      map.dispose();
    };
  }, [latitude, longitude]);

  const getUserAddress = async () => {
    let url = `https://api.opencagedata.com/geocode/v1/json?key=8aa15d164df344928a6a17af322044de&q=${latitude}%2C${longitude}&pretty=1`;
    const loc = await fetch(url);
    const data = await loc.json();
    try {
      setUserAddress({
        city: data.results[0].components.city,
        country: data.results[0].components.country,
      });
    } catch (error) {
      error.message = "Location not found!";
      alert(error.message);
    }
  };

  const handleGetUserAddress = () => {
    getUserAddress();
  };

  return (
    <div>
      <div>
        {latitude || longitude ? (
          <div
            id="map"
            style={{ width: "300px", height: "200px" }}
            className=""
          ></div>
        ) : (
          <div className="font-bold text-xl text-red-700">
            Can't find your location!
          </div>
        )}
      </div>

      <div>
        <div>
          {latitude ? (
            <div className="font-bold text-2xl">Current Location</div>
          ) : (
            <></>
          )}
        </div>
        <div>{latitude ? <div>Latitude: {latitude}</div> : <></>}</div>
        <div>{longitude ? <div>Longitude: {longitude}</div> : <></>}</div>
        <div>
          {userAddress.city ? (
            <div className="break-words">User City: {userAddress.city}</div>
          ) : (
            <></>
          )}
        </div>
        <div>
          {userAddress.country ? (
            <div className="break-words">
              User Country: {userAddress.country}
            </div>
          ) : (
            <></>
          )}
        </div>

        <div>
          {latitude || longitude ? (
            <div>
              <button
                onClick={handleGetUserAddress}
                className="bg-blue-900 text-white px-3 py-2 rounded-lg my-3"
              >
                Get Address
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default OpenLayermap;
