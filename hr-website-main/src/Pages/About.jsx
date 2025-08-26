import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AboutUs from "../assets/Images/AboutUs.jpg";
import SkillDev from "../../src/assets/Images/SkillDev.jpg";
import Respect from "../../src/assets/Images/Respect.png";
import Perform from "../../src/assets/Images/Out-perform.png";
import Leader from "../../src/assets/Images/Leader-ship.png";
import Integrity from "../../src/assets/Images/Integrity.png";
import Customer from "../../src/assets/Images/Customer-centric.png";
import Keypoints from "../Components/Keypoints";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-full px-10 md:px-10  py-4 md:py-0 font-poppins">
      <div className="flex flex-col md:flex-row md:px-10 items-center gap-8">
        <div className="space-y-6 w-full md:w-1/2  md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">About Us</h1>
          <p className="text-gray-700 leading-relaxed text-base">
            ParadigmIT HR Services is Indian arm of ParadigmIT Group established
            in 2002 as an RPO and offshore venture of ParadigmIT US. It has
            subsequently built expertise in enterprise IT solutions and
            end-to-end human resource solutions.
          </p>
          <p className="text-gray-700 leading-relaxed text-base">
            ParadigmIT consists of multiple business units managing different
            lines of businesses, delivering services in Clinical Trial Services
            (i.e., CDM, Stats, MW), Application Development/Maintenance, Large
            scale onsite deployment projects (SI), Staffing, Staff Augmentation
            spread across India & USA, e-Governance solutions in Central and
            State Government, Cyber Security and Smart Agri-Tech in Government
            and Enterprise sectors.
          </p>
        </div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={AboutUs}
            alt="About Us"
            className="w-full rounded-md shadow-md"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </div>

      <div className="mt-10 md:px-10 space-y-6  md:text-left">
        <p className="text-gray-700  leading-relaxed text-base">
          We are certified with CMMI Level 5 for development, ISO 9001, SOC 2
          certifications and State-of-the-art infrastructure with ISO 27001
          Certified Information Security Management, possessing for software
          design and development activities
        </p>
        <p className="text-gray-700 leading-relaxed text-base">
          ParadigmITHR is the Human Resources solutions company focuses on
          Search, Selection, Staffing, Staff Augmentation and Training in India
          & USA.
        </p>
      </div>

      <div className="pt-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Core Values
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
          <div className="flex flex-col gap-10 md:mr-16">
            <img
              src={Respect}
              alt="Respect"
              className="h-60 w-60 object-contain"
            />
            <img
              src={Perform}
              alt="Respect For"
              className="h-60 w-60 object-contain"
            />
          </div>

          <div className="md:mx-6">
            <img
              src={Leader}
              alt="Leadership"
              className="h-60 w-60 object-contain"
            />
          </div>

          <div className="flex flex-col gap-10 md:ml-16">
            <img
              src={Integrity}
              alt="Integrity"
              className="h-60 w-60 object-contain"
            />
            <img
              src={Customer}
              alt="Customer Centric"
              className="h-60 w-60 object-contain "
            />
          </div>
        </div>
      </div>
      <Keypoints />
    </div>
  );
};

export default About;
