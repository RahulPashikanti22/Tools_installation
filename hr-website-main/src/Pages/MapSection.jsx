import React from "react";

const MapSection = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.098100377951!2d78.50653287495338!3d17.451295901839237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c12a7ce1967%3A0xe2bd8c3dc9914d35!2sInnovative%20House%2C%20Nalgonda%20X%20Roads%2C%20Hyderabad%2C%20Telangana%20500036!5e0!3m2!1sen!2sin!4v1714567891234!5m2!1sen!2sin";

  return (
    <div className="w-full min-h-[500px] flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-10 bg-gray-100">
      {/* Map */}
      <div className="w-full md:w-2/3 h-[400px]">
        <iframe
          title="Google Map"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Location Info */}
      <div className="w-full md:w-1/3 flex flex-col items-start justify-center space-y-4 text-gray-800">
        <h3 className="text-xl font-semibold">ParadigmIt</h3>
        <p>
          Trendset Jayabheri Connect, Near - Kothaguda Junction, White fields,
          Kondapur,Hyderabad, Telangana 500081
        </p>
        <button
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/ParadigmIT+Technology+Services+Pvt+Ltd/@17.4577674,78.3627825,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93780c8567c3:0x22495f2cd5d3d0bf!8m2!3d17.4577675!4d78.3673959!16s%2Fg%2F11rsg3rzgp?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D",
              "_blank"
            )
          }
          className="bg-[#1e73be] text-white px-5 py-2 rounded-md hover:bg-[#175fa2] transition"
        >
          Directions
        </button>

        <div className="text-sm text-gray-600">
          ⭐ 4.9 &nbsp;|&nbsp; 159 reviews
        </div>
        <a
          href="https://www.google.com/maps/place/ParadigmIT+Technology+Services+Pvt+Ltd/@17.4577674,78.3627825,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93780c8567c3:0x22495f2cd5d3d0bf!8m2!3d17.4577675!4d78.3673959!16s%2Fg%2F11rsg3rzgp?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View larger map
        </a>
      </div>
    </div>
  );
};

export default MapSection;
