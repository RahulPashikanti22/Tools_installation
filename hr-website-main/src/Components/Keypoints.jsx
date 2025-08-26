import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import keyFrames from "../../src/assets/Images/keyFrames.png";
import "../App.css";
import { useNavigate } from "react-router-dom";

const messages = [
  "Integrating people, processes, and purpose to meet evolving workforce demands.",
  "Your trusted partner in building skilled, future-ready workforces for both public and private sectors.",
  "Empowering individuals with industry-relevant training and real job opportunities to build careers and fuel long-term success.",
  "Reliable staffing partner for State and Central Government departments—offering compliant, scalable workforce solutions that support public service excellence.",
  "From talent acquisition to workforce management, we deliver end-to-end HR solutions that align people, performance, and business goals.",
  " We’re committed to helping people unlock their potential with the perfect mix of job opportunities and skill development training to fuel their lasting success.",
];
const Keypoints = () => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full  py-5">
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={keyFrames}
          alt="Background"
          className="w-full opacity-70 h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 px-10 text-center space-y-6">
          <p className="text-white text-xl md:text-4xl font-medium  transition-opacity duration-1000 ease-in-out">
            &ldquo;{messages[index]}&rdquo;
          </p>

          <div className="flex gap-2 mt-4">
            {messages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full border-2 ${
                  i === index
                    ? "bg- bg-gray-600 border-gray-600"
                    : "bg-transparent border-gray-600"
                } transition-all duration-300`}
                aria-label={`Go to message ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keypoints;
