import React from "react";
import culture1 from "../assets/Images/Culture/culture1.png";
import culture2 from "../assets/Images/Culture/culture2.png";
import culture3 from "../assets/Images/Culture/culture3.png";
import culture4 from "../assets/Images/Culture/culture4.png";
import culture5 from "../assets/Images/Culture/culture5.png";
import culture6 from "../assets/Images/Culture/culture6.png";
import culture7 from "../assets/Images/Culture/culture7.png";
import culture8 from "../assets/Images/Culture/culture8.png";
import culture9 from "../assets/Images/Culture/culture9.png";
import culture10 from "../assets/Images/Culture/culture10.png";
import culture11 from "../assets/Images/Culture/culture11.png";
import Keypoints from "../Components/Keypoints";

const Culture = () => {
 
  return (
    <div className="w-full px-4 py-6 max-w-screen-5xl mx-auto">
      {/* First Row */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <img
            src={culture1}
            alt="Culture"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <img
              src={culture2}
              alt="Culture"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <img
              src={culture3}
              alt="Culture"
              className="w-full h-auto object-cover rounded-md"
            />
            <img
              src={culture4}
              alt="Culture"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row gap-4 pt-6">
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <img
              src={culture5}
              alt="Culture"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <img
              src={culture6}
              alt="Culture"
              className="w-full h-auto object-cover rounded-md"
            />
            <img
              src={culture7}
              alt="Culture"
              className="w-full h-auto object-cover rounded-md"
            />
            <img
              src={culture8}
              alt="Culture"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <img
            src={culture9}
            alt="Culture"
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <img
              src={culture10}
              alt="Culture"
              className="w-full h-auto object-cover rounded-md"
            />
            {/* <img src={culture11} alt="Culture" className="w-full h-auto object-cover rounded-md" /> */}
          </div>
        </div>
      </div>

      {/* Keypoints */}
      <div className="pt-8">
        <Keypoints />
      </div>
    </div>
  );
};

export default Culture;
