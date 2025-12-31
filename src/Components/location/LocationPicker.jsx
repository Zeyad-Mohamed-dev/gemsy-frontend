import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { set } from "zod";
export default function LocationPicker({ position, setPosition, setLocation }) {
//   const [position, setPosition] = useState({ lat: 30.0444, lng: 31.2357 });
  const [searchQuery, setSearchQuery] = useState("");
  const [recommendations, setRecomm] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if(searchQuery.trim() === "") {
      setRecomm([]);
      return;
    }

    const timeOut = setTimeout(() => {
      handleSearch(searchQuery);
    }, 400);

    return () => clearTimeout(timeOut);
  }, [searchQuery])
  const handleSearch = async () => {
    // e.preventDefault();
    console.log("search submitted");
    console.log(searchQuery);
    // console.log(query);
    if (!searchQuery) return;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      searchQuery
    )}`;
    const req = await axios.get(url);
    console.log(req.data);
    setRecomm(req.data);
  };

  const handleSelect = ( lat, lon, name) => {
    setPosition({ lat: lat, lng: lon });
    setRecomm([]);
    setLocation(name);
    setSearchQuery(name);
  };

  function MapTraverser({ position }) {
    const map = useMap();
    if (position) {
      map.flyTo(position, 13);
    }
    return null;
  }
  function ClickHandler() {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });
    return null;
  }
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    <div className="flex gap-2.5 flex-col">
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          placeholder="Search for a place (e.g. Zamalek, Cairo)"
          className="flex-1 p-2 border border-gray-300 rounded text-sm"
          value={searchQuery}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={handleSearch}
          className="bg-black text-white px-4 py-2 rounded text-sm cursor-pointer"
        >
          Search
        </button>
      </div>
      <div>
        {recommendations.length ? (
          <ul className="bg-white border border-gray-300 rounded mt-2 max-h-48 overflow-y-auto">
            {recommendations.map((rec, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(rec.lat, rec.lon, rec.display_name)}
              >
                {rec.display_name}
              </li>
            ))}
          </ul>
        ) : (
          <>No Places found</>
        )}
      </div>
      <div className="h-72 w-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <MapContainer
          center={[30.0444, 31.2357]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <ClickHandler />
          <Marker position={position}></Marker>
          <MapTraverser position={position} />
        </MapContainer>
      </div>
    </div>
  );
}
