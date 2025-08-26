import React from "react";
import Staffing from "../assets/Images/Govt-staffing.webp";
import Keypoints from "../Components/Keypoints";

const Govt = () => {
 
  return (
    <div className="w-full px-10 sm:px-6 md:px-10 py-6 max-w-screen-5xl mx-auto">
      {/* Section - Text and Image */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mb-12">
        {/* Left Column - Text */}
        <div className="w-full lg:w-3/4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-left">
            Govt. Staffing Services
          </h2>
          <p className="text-justify">
            ParadigmitHR is a strategic partner of the central and state
            governments, as well as their primary suppliers, providing superior
            staffing solutions that are specifically designed to meet the needs
            of the public sector. We are additionally committed that we hire
            highly competent employees that adhere to strict regulatory
            regulations on security and confidentiality.
          </p>

          <h3 className="text-xl font-semibold">
            Government Staffing Highlights:
          </h3>
          <p className="text-justify">
            Since 2008, ParadigmIT HR has been a reliable partner in executing
            key government initiatives across India. We specialize in providing
            skilled manpower for mission-critical projects, supporting both
            State and Central Government departments. Our expertise spans
            digital transformation, citizen services, and data management.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Staffing}
            alt="Govt Staffing"
            className="w-full max-w-md h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section - Key Projects */}
      <div className="mb-16">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Key Projects & Contributions
        </h3>
        <ul className="list-disc list-inside space-y-3 text-justify text-gray-800">
          <li>
            <strong>NIC & NICSI Staffing:</strong> ParadigmitHR has supplied
            skilled technical and administrative personnel to the National
            Informatics Centre (NIC) and NICSI, playing a key role in supporting
            IT-led governance initiatives across various departments.
          </li>
          <li>
            <strong>Land & Revenue Management Systems:</strong> We deployed a
            competent workforce for the successful implementation and support of
            land record management across government sectors, enhancing service
            efficiency.
          </li>
          <li>
            <strong>UIDAI (Aadhaar Services):</strong> ParadigmitHR has executed
            large-scale Aadhaar enrolment and data verification projects across
            multiple states, ensuring secure and accurate identity
            authentication.
          </li>
          <li>
            <strong>Citizen Services – Seva Centers:</strong> By deploying
            well-trained personnel across Seva Centers in Punjab and Telangana,
            we have helped enhance the delivery of citizen-centric services.
          </li>
          <li>
            <strong>National Survey Projects:</strong> Our teams have supported
            nationwide survey initiatives through data collection, validation,
            and analysis, contributing to accurate and impactful policy
            decisions.
          </li>
          <li>
            <strong>SRDH Project:</strong> ParadigmitHR is proud to be a part of
            the State Resident Data Hub (SRDH) project, gathering demographic
            and biometric information of citizens residing in the state. Our
            staffing ensures accurate data collection and management, including
            Aadhaar linkage.
          </li>
          <li>
            <strong>IGRS and NPR Projects:</strong> From scanning and digitizing
            land records for the Integrated Grievance Redressal System (IGRS) to
            providing data entry services for the National Population Register
            (NPR), ParadigmitHR’s expertise ensures seamless project execution.
          </li>
        </ul>
      </div>

      <Keypoints />
    </div>
  );
};

export default Govt;
