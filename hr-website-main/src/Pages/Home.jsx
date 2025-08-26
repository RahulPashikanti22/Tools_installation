import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../App.css";
import { motion } from "framer-motion";
import Image1 from "../../src/assets/Images/HomeImg1.svg";
import Image2 from "../../src/assets/Images/HomeImage2.jpg";
import Image4 from "../../src/assets/Images/HomeImg4.jpg";
import Image5 from "../../src/assets/Images/HomeImg5.jpg";
import BlueBg from "../../src/assets/Images/Blue-bg.png";

import { useNavigate } from "react-router-dom";
import Keypoints from "../Components/Keypoints";

const testimonials = [
  "The customized solutions provided have significantly streamlined our operations. Thank you for your innovative approach.",
  "Your attention to detail in financial reporting has been crucial for our decision-making process. Excellent work!",
  "Your prompt response to our inquiries has been impressive. The swift resolution of issues exceeded our expectations.",
  "Your team’s ability to handle payroll efficiently is invaluable. We’ve seen significant improvements in our processes.",
  "We greatly appreciate the level of professionalism shown. The expertise demonstrated throughout our interactions is commendable.",
];

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about"); // Navigate to the About Us page
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-full font-poppins">
      <div className="space-y-24 px-10 py-0">
        <section className="flex flex-col md:flex-row items-center gap-10 px-4 md:px-10 pt-6 md:pt-16">
          <div className="w-full md:w-1/2 space-y-4  md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">
              ParadigmIT HR Services Private Limited
            </h2>
            <p className="text-base leading-relaxed">
              ParadigmIT Services is the Indian arm of ParadigmIT Group,
              established in 2002 as an RPO and offshore venture of ParadigmIT
              US. It has subsequently built expertise in enterprise IT solutions
              and end-to-end human resource solutions.
            </p>
            <p className="text-base leading-relaxed">
              ParadigmIT consists of multiple business units managing different
              lines of business…
            </p>
            <button
              onClick={handleClick}
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              Explore More
            </button>
          </div>

          <div className="w-full md:w-2/3 relative">
            <motion.img
              src={Image1}
              alt="Company Overview"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full h-auto rounded shadow-md"
            />
          </div>
        </section>

        <section className="flex flex-col-reverse  md:flex-row  gap-6 px-4 md:px-10 mt-10">
          <div className="w-full md:w-[60%] relative">
            <motion.img
              src={BlueBg}
              alt="Blue Background"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full h-full object-cover shadow-sm"
            />
            <motion.img
              src={Image2}
              alt="Who We Are"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-12 left-0 w-full  h-[200px] md:h-[550px] object-contain rounded px-4 md:px-20 shadow-lg"
            />
          </div>

          <div className="w-full md:w-[40%] space-y-6  md:text-left px-2 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold">Who We Are</h2>
            <p className="text-base leading-relaxed">
              At ParadigmIT Services, we have been providing cutting-edge
              staffing and skill development services tailored to the unique
              needs of our clients across diverse sectors such as Automobile,
              Agriculture, Manufacturing, Telecom, Healthcare & Pharmaceuticals,
              Education, Transportation & Logistics, Workforce Management, and
              Warehouse Management.
            </p>
            <p className="text-base leading-relaxed">
              As part of our skill development initiative, we help young
              professionals from multiple states join a dynamic skill
              development family, where they can hone their abilities and build
              successful careers. Our goal is to train and provide skills and
              employment opportunities to 50,000 youth by 2023, contributing to
              the next generation’s success through diverse and innovative work
              opportunities.
            </p>
            <p className="text-base leading-relaxed">
              At ParadigmIT, we’re not just about filling positions – we’re
              about growing talent and creating a thriving, skilled workforce
              that drives business success.
            </p>
            <button
              onClick={handleClick}
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              Explore More
            </button>
          </div>
        </section>

        <section
          className="relative h-auto md:h-[600px]  w-full bg-center bg-cover bg-fixed flex items-center justify-center mt-10"
          style={{ backgroundImage: `url(${Image5})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="relative z-10 w-full px-4 md:px-0 text-center">
            {/* <h1 className="text-white text-2xl md:text-3xl font-semibold">
                            We’re committed to helping people unlock their potential with the
                            perfect mix of job opportunities and skill development training to
                            fuel their lasting success.
                        </h1> */}

            <div className="max-w-3lg pt-10 mx-auto text-center">
              <div className="pt-10 mx-auto">
                <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">
                  Client Testimonials
                </h2>
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {testimonials.map((text, index) => (
                  <SwiperSlide key={index} className="p-4">
                    <div className="bg-white rounded-xl p-5 shadow-lg h-48 flex items-center justify-center text-center mx-auto max-w-xs text-sm md:text-base">
                      "{text}"
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* <div className="relative">
                    <div className="relative h-[300px] w-full">
                        <img
                            src={Image4}
                            alt="Image"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    </div>

               

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute top-40 right-40 h-[400px] w-[350px] shadow-xl rounded-lg overflow-hidden z-10"
                    >
                        <img
                            src={Image5}
                            alt="Foreground"
                            className="h-full w-full object-cover rounded-lg"
                        />

                       
                    </motion.div>
                </div> */}

        <div className="text-center mt-14 px-4 md:px-32">
          <h1 className="text-2xl md:text-3xl font-semibold">News & Article</h1>
          <p className="pt-4 text-base md:text-xl">
            ParadigmitHR is a strategic partner of the central and state
            governments, as well as their primary suppliers, providing superior
            staffing solutions that are specifically designed to meet the needs
            of the public sector. We are additionally committed that we hire
            highly competent employees that adhere to strict regulatory
            regulations on security and confidentiality.
          </p>
        </div>
        <Keypoints />
      </div>
    </div>
  );
};

export default Home;
