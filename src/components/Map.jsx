import React, { useState } from "react";

const Map = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [userAddress, setUserAddress] = useState({});

  const geo = navigator.geolocation;
  geo.watchPosition(userCoords);
  function userCoords(position) {
    let userLatitude = position.coords.latitude;
    let userLongitude = position.coords.longitude;

    setLatitude(userLatitude);
    setLongitude(userLongitude);
  }

  const getUserAddress = async () => {
    let url = `https://api.opencagedata.com/geocode/v1/json?key=8aa15d164df344928a6a17af322044de&q=${latitude}%2C${longitude}&pretty=1`;
    const loc = await fetch(url);
    const data = await loc.json();
    setUserAddress({
      city: data.results[0].components.city,
      country: data.results[0].components.country,
    });
  };

  const handleGetUserAddress = () => {
    getUserAddress();
  };

  return (
    <div>
      <div>
        <div className="font-bold text-2xl">Current Location</div>
        <div>
          Latittude: {latitude} & Longitude: {longitude}
        </div>
        <div className="break-words">User City: {userAddress.city}</div>
        <div className="break-words">User Country: {userAddress.country}</div>
        <div>
          <button
            onClick={handleGetUserAddress}
            className="bg-blue-900 text-white px-3 py-2 rounded-lg my-3"
          >
            Get Address
          </button>
        </div>
        <div>
          <iframe
            title="map"
            src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d924.3784130823987!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDA0JzA0LjQiTiA4OMKwMDMnNTguNSJF!5e0!3m2!1sen!2sin!4v1708841879870!5m2!1sen!2sin`}
            height="200"
            className="sm:w-[400px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
