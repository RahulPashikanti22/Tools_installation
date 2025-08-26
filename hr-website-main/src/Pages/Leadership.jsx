import React from "react";
import Kanakaraju from "../../src/assets/Images/Leaders/Kanakaraju.jfif";
import awanish from "../../src/assets/Images/Leaders/awanish.jfif";
import leela from "../../src/assets/Images/Leaders/leela.png";
import sridhar from "../../src/assets/Images/Leaders/sridhar.png";
import linkedin from "../../src/assets/Images/Leaders/linkedin.png";
import vector from "../../src/assets/Images/Leaders/Vector.png";
import "../../src/index.css";
import Keypoints from "../Components/Keypoints";

const teamData = [
  {
    id: 1,
    name: "Leela Krishna G",
    title: "Business Head - Staffing Services",
    linkedin: "https://www.linkedin.com/in/leela-krishna-68b7903/",
    image: leela,
    description:
      "Leverages two decades of experience in Sales & Marketing, Business Development...",
  },
  {
    id: 2,
    name: "Sridhar Gadhi",
    title: "Founder",
    image: sridhar,
    linkedin: "https://www.linkedin.com/in/sridhargadhi/",
    description:
      "Leverages two decades of experience in Sales & Marketing, Business Development...",
  },
  {
    id: 3,
    name: "Awanish Mishra",
    title: "Operations Head - Skill Development",
    image: awanish,
    linkedin: "https://www.linkedin.com/in/awanish-mishra-5a07011b",
    description:
      "Leverages two decades of experience in Sales & Marketing, Business Development...",
  },
  {
    id: 4,
    name: "Venkata Kanaka Raju",
    title: "National Sales Head",
    image: Kanakaraju,
    linkedin: "https://www.linkedin.com/in/venkat-raju-mudunuri-225708103/",
    description:
      "An expert in HR & Staffing Industry with experience in Delivery, Account Management...",
  },
];

const Leadership = () => {
  return (
    <div className="font-poppins px-4 md:px-10 py-10">
      {/* Header */}
      <div className="flex justify-center">
        <div className="flex items-center bg-[#4361EE1A] px-4 py-2 rounded-full max-w-fit">
          <img src={vector} alt="Vector" className="mr-2 w-5 h-5" />
          <h1 className="text-lg md:text-xl font-medium text-[#4361EE]">Our Team</h1>
        </div>
      </div>

      <div className="flex flex-col pt-2 items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Meet Our{" "}
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Expert Team
          </span>
        </h1>
        <p className="pt-4 text-base md:text-lg max-w-3xl mx-auto">
          Our specialists bring diverse expertise to deliver excellent HR solutions
        </p>
      </div>

      {/* Mobile View - Static */}
      <div className="grid grid-cols-1 gap-6 mt-10 md:hidden">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center bg-white rounded-xl border border-[#4361EE1A] p-4 shadow-md"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-xl w-24 h-24 object-cover mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-800">{member.name}</h2>
            <p className="text-sm text-[#475569]">{member.title}</p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Desktop & Tablet View - Auto Scroll */}
      <div className="hidden md:block overflow-hidden mt-10 group py-6">
        <div className="flex gap-8 w-max animate-scroll group-hover:[animation-play-state:paused]">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-xl border border-[#4361EE1A] p-4 shadow-md w-[300px] md:w-[340px] hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-xl w-24 h-24 object-cover mb-3 md:mb-0 md:mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{member.name}</h2>
                <p className="text-sm text-[#475569]">{member.title}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block"
                  >
                    <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Keypoints />
    </div>
  );
};

export default Leadership;
