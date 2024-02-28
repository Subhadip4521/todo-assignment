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
import io from "socket.io-client";
import { SpinnerCircularFixed } from "spinners-react";

const OpenLayermap = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const socket = io("http://172.178.104.95");
    socket.on("coordinates", (data) => {
      setLatitude(data.latitude);
      setLongitude(data.longitude);
    });

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
      socket.disconnect();
    };
  }, [latitude, longitude]);

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
          <div className="flex justify-center ml-28 md:ml-10 md:my-10">
            <SpinnerCircularFixed color="blue" size={100} thickness={100} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenLayermap;
