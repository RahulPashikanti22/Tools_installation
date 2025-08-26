import React, { useState } from "react";
import icon from "../assets/Images/LocationIcon.png";
import MapChart from "./MapChart";

const MapLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const isMobile = window.innerWidth < 768;

  const data = [
    {
      id: 1,
      Image: icon,
      title: "Telangana",
      content: "ParadigmIT HR Services",
      content1:
        "F958+4VW TRENDSET JAYABHERI CONNECT, Laxmi Cyber City, Whitefields, HITEC City, Kondapur, Telangana 500081",
      coordinates: {
        latitude: 17.458054023465063,
        longitude: 78.36720052883554,
      },
    },
    {
      id: 2,
      Image: icon,
      title: "Maharashtra",
      content: "ParadigmIT HR Services",
      content1:
        "Gundecha Onclave, Excom house, Khairani Rd, Ansa Industrial Estate, Chandivali, Saki Naka, Mumbai, Maharashtra 400071",
      coordinates: {
        latitude: 19.10662816946253,
        longitude: 72.88896055582228,
      },
    },
    {
      id: 3,
      Image: icon,
      title: "Haryana",
      content: "ParadigmIT HR Services",
      content1: "C27V+4MJ Gurugram, Haryana",
      coordinates: {
        latitude: 28.41300735617207,
        longitude: 77.04415132883554,
      },
    },
    {
      id: 4,
      Image: icon,
      title: "Karnataka",
      content: "ParadigmIT HR Services",
      content1:
        "Leela Landmark, No.7, Ground Floor, 3rd Cross Road, 1ST Main Road, Ashwini Layout, Ejipura, Bengaluru, Karnataka 560047",
      coordinates: {
        latitude: 12.939747653455187,
        longitude: 77.62917332883555,
      },
    },
    {
      id: 5,
      Image: icon,
      title: "Delhi (Skill Development & Govt Staffing)",
      content: "ParadigmIT HR Services",
      content1:
        "2nd Floor, ParadigmIT Technology Services Private Limited, Dwarka Mor Metro Station, Plot No. A-3, Jain Rd, near Metro Pillar No. 786, Jai Bharat Enclave, Block A, Bhagwati Garden, Nawada, New Delhi, Delhi, 110059",
      coordinates: {
        latitude: 28.619814159340628,
        longitude: 77.03118755767109,
      },
    },
    {
      id: 6,
      Image: icon,
      title: "Kolkata",
      content: "ParadigmIT HR Services",
      content1: "G97X+6MH Kolkata, West Bengal",
      coordinates: {
        latitude: 22.513240901764778,
        longitude: 88.39920221349338,
      },
    },
    {
      id: 7,
      Image: icon,
      title: "Tamil Nadu",
      content: "ParadigmIT HR Services",
      content1:
        "Inspire Officespace, 158, 2rd Floor, Guleacha Tower, Arcot Rd, Ottagapalayam, Somasundara Bharathi Nagar, Vadapalani, Chennai, Tamil Nadu 600026",
      coordinates: {
        latitude: 13.049200042851647,
        longitude: 80.20972464417773,
      },
    },
    {
      id: 8,
      Image: icon,
      title: "Pune",
      content: "ParadigmIT HR Services",
      content1: "",
      coordinates: {
        latitude: 18.525410694888972,
        longitude: 73.87687854151238,
      }, // Fixed coordinates for Pune
    },
  ];

  const handleLocationClick = (item) => {
    setSelectedLocation(item);
  };

  const generateGoogleMapsLink = (latitude, longitude) => {
    return `https://www.google.com/maps?q=${latitude},${longitude}`;
  };

  return (
    <div className="w-full flex flex-col md:flex-row py-4 pt-12 h-[600px]">
      {/* Left panel with inner scroll */}
      <div className="w-full md:w-[30%] h-full bg-[#F5F5F5] p-4 overflow-y-auto space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            className={`flex items-start hover:text-sky-600 space-x-4 cursor-pointer p-2 rounded transition-colors ${
              selectedLocation?.id === item.id ? "bg-sky-100 text-sky-600" : ""
            }`}
            onClick={() => handleLocationClick(item)}
          >
            <img src={item.Image} alt="Icon" className="w-6 h-6 mt-1" />
            <div>
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <p className="text-sm">{item.content}</p>

              {/* Google Maps link only on mobile */}
              {isMobile ? (
                <a
                  href={generateGoogleMapsLink(
                    item.coordinates.latitude,
                    item.coordinates.longitude
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline text-sm pt-1 block"
                >
                  {item.content1}
                </a>
              ) : (
                <p className="text-sm pt-1">{item.content1}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Map panel (hidden on mobile) */}
      {!isMobile && (
        <div className="w-full md:w-[70%] h-full">
          <MapChart
            selectedLocation={selectedLocation}
            allLocations={data}
            onLocationChange={setSelectedLocation}
          />
        </div>
      )}
    </div>
  );
};

export default MapLocations;
