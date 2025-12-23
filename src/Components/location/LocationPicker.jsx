import React, { useState } from 'react'
import { MapContainer, Marker, TileLayer, useMap, useMapEvent, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import axios from 'axios';
export default function LocationPicker() {
    const [position, setPosition] = useState({lat: 30.0444, lng: 31.2357});
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = async (e) => {
        e.preventDefault();
        console.log("search submitted");
        if(!searchQuery) return;
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`;
        const req = await axios.get(url);
        if(req.data && req.data.length > 0) {
            setPosition({lat: req.data[0].lat, lng: req.data[0].lon})
        }
    }

  function MapTraverser({position}) {
        const map = useMap();
        if(position) {
            map.flyTo(position, 13);
        }
        return null;
  }  
  function ClickHandler() {
    useMapEvents({
        click(e) {
            setPosition(e.latlng)
        }
    })
    return null
  }  
  return (
    <div className='flex gap-2.5 flex-col'>
    <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Search for a place (e.g. Zamalek, Cairo)"
                    className="flex-1 p-2 border border-gray-300 rounded text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="bg-black text-white px-4 py-2 rounded text-sm cursor-pointer"
                >
                    Search
                </button>
            </div>
    <div className='h-72 w-full border-2 border-gray-200 rounded-lg overflow-hidden'>
        <MapContainer center={[30.0444, 31.2357]} zoom={13} style={{height: '100%', width: '100%'}}>
            <TileLayer 
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <ClickHandler />
            <Marker position={position}></Marker>
            <MapTraverser position={position}/>
        </MapContainer>
    </div>
    </div>
  )
}
