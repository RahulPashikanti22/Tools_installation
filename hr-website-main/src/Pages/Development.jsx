import React from "react";
import skill from "../assets/Images/skill-development.jpg";
import traning from "../assets/Images/traning.jpeg";
import prepost from "../assets/Images/Prepost-offer.jpg";
import courses from "../assets/Images/Courses.jpg";
import Keypoints from "../Components/Keypoints";

const Development = () => {

  const sections = [
    {
      title: "Skill Development",
      content: (
        <>
          <p className="mb-4">
            ”Empower the Youth By Unlocking Potential Through Various Skill
            Development Schemes”.
          </p>
          <p className="mb-4">
            Skill Development is the cornerstone of youth empowerment and
            industry competitiveness. At ParadigmitHR, we are committed to
            providing impactful and sustainable training to equip individuals
            with the skills needed for today’s job market.
          </p>
          <p>
            We (ParadigmitHR) as a trusted training partner to government bodies
            and private enterprises, we leverage our extensive experience and
            network to deliver the best solutions. Our team comprises skilled
            professionals from various industries, united in our mission to
            bridge the gap between skills and employment through Certified
            Training to Placement.
          </p>
        </>
      ),
      image: skill,
      reverse: false,
    },
    {
      title: "Training Methodology",
      title3:
        "ParadigmitHR employs a unique Job Role based Training methodology that combines market-oriented, competency-based, and placement-linked employability skill development. Our approach is tailored to the needs of vulnerable youth, featuring barrier-free learning models and active private sector participation. The nine-step methodology includes:",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Market Assessment Study</li>
          <li>Curriculum Development</li>
          <li>Trainer Identification and Training</li>
          <li>Establishment of Training Centers</li>
          <li>Identification and Mobilization of Beneficiaries</li>
          <li>Aptitude Assessment and Screening</li>
          <li>Intensive Training in Essential Skills</li>
          <li>On-the-Job Training/Apprenticeship</li>
          <li>Placement and Retention, with Tracking Mechanism</li>
        </ul>
      ),
      image: traning,
      reverse: true,
    },
    {
      title: "Pre & Post Placement Activities",
      title2:
        "ParadigmitHR prioritizes real delivery of training and post-placement support, including:",
      content: (
        <>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Monthly MIS and Reporting System</li>
            <li>
              Pre-placement activities - Job Fairs, Career Guidance, and
              Placement Execution
            </li>
            <li>Post-placement Reviews and Support for Career Progression</li>
            <li>
              Facilitation of Workshops, Industrial Visits, and Guest Lectures
            </li>
            <li>Practical Learning with Continuous Industry Interactions</li>
          </ul>
          <p className="mb-2 font-bold">Post Placement Support:</p>
          <p className="mb-4">
            We offer one-year monitoring and access to higher qualifications and
            better job opportunities, including support for career progression
            and entrepreneurship.
          </p>
          <p className="font-bold mb-4">Career Progression Strategies:</p>
          <p>
            We empower candidates to manage their goals effectively through
            regular self-assessment, skill upgrading, goal setting, and
            utilizing support from our Placement team and Career Coaches.
          </p>
        </>
      ),
      image: prepost,
      reverse: false,
    },
    {
      title: "Our Offered Sectors/Courses",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            IT-ITES/NASSCOM: Domestic Data Entry Operator, CRM Domestic
            Non-Voice
          </li>
          <li>
            Electronics & Hardware: Field Technician Other Home Appliances,
            Multi Skills Technician
          </li>
          <li>Apparel, Made-Ups & Home Furnishing: Sewing Machine Operator</li>
          <li>Hospitality: Food & Beverage Service Assistant</li>
          <li>Logistics: Warehouse Picker & Packer</li>
        </ul>
      ),
      image: courses,
      reverse: true,
    },
  ];

  return (
    <div className="w-full px-10 sm:px-6 md:px-10 py-10 space-y-16 max-w-screen-5xl mx-auto">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            section.reverse ? "md:flex-row-reverse" : ""
          } gap-10 items-center`}
        >
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-left">
              {section.title}
            </h2>
            {section.title2 && (
              <h3 className="text-lg font-semibold mb-4">{section.title2}</h3>
            )}
            {section.title3 && <p className="mb-4">{section.title3}</p>}
            <div className="text-justify text-gray-800">{section.content}</div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={section.image}
              alt={section.title}
              className="w-full max-w-md rounded-lg shadow-md h-auto object-cover"
            />
          </div>
        </div>
      ))}

      {/* Keypoints section */}
      <Keypoints />
    </div>
  );
};

export default Development;
