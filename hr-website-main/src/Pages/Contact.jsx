import React from "react";
import MapSection from "./MapSection";
import Map from "./Map";
import linkedin from "../assets/Images/linkedin.jfif";
import gmail from "../assets/Images/gmail.jfif";

const Contact = () => {
 
  return (
    <div className="w-full px-10 sm:px-6 md:px-10 py-10 space-y-16 max-w-screen-5xl mx-auto">
      {/* Header Section */}
      <div>
        <h2 className="text-3xl text-[#1e73be] font-bold">Contact Details</h2>
        <p className="mt-4 text-gray-700">
          Give us a call or drop by anytime, we endeavour to answer all
          enquiries within 24 hours on business days. We will be happy to answer
          your questions.
        </p>
      </div>

      {/* Address and Form */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left - Address + Map */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div>
            <h2 className="font-semibold text-lg">Our Address:</h2>
            <p className="mt-2">
              2A, 2nd Floor, Trendset Jayabheri Connect,
              <br />
              Near - Kothaguda Junction, White Fields,
              <br />
              Kondapur, Hyderabad, Telangana 500081
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mt-2">
              Our Mailbox:
              <span className="text-gray-500 font-normal">
                {" "}
                wecare@paradigmithr.com
              </span>
            </h2>
            <h2 className="font-semibold text-lg mt-2">
              Our Phone:
              <span className="text-gray-500 font-normal">
                {" "}
                +91-40-66556000
              </span>
            </h2>
          </div>

          <div className="mt-4">
            <MapSection />
          </div>
        </div>

        {/* Right - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full bg-[#1e73be] rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white mb-4">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium text-white">
                  Name *
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e73be]"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-white">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e73be]"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-white">
                  Message *
                </label>
                <textarea
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#1e73be]"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#0056b3] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#175fa2] transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Display Section */}
      <Map />

      {/* Office Locations */}
      <div className="w-full bg-white px-4 sm:px-6 md:px-10 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* India Locations */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-[#1e73be] mb-4">
              Locations – India
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Hyderabad</h4>
                <p>
                  2A, 2nd Floor, Trendset Jayabheri Connect,
                  <br />
                  Near Kothaguda Junction, White Fields,
                  <br />
                  Kondapur, Hyderabad, Telangana 500081.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Visakhapatnam</h4>
                <p>
                  Plot No 02, Hill No. 03, IT HUB,
                  <br />
                  Madhurawada, Visakhapatnam, AP – 530041
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Delhi</h4>
                <p>
                  Plot No. 11,12,16 & 17, 2nd Floor,
                  <br />
                  Workingdom Co-Working Space,
                  <br />
                  Dwarka Sector – 7, New Delhi – 110075
                </p>
              </div>
            </div>
          </div>

          {/* USA Locations */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-[#1e73be] mb-4">
              Locations – USA
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Maryland</h4>
                <p>
                  8830 Stanford Blvd, Suite 312,
                  <br />
                  Columbia, Maryland 21045, US
                </p>
                <p className="mt-2">
                  <strong>Phone:</strong> +1 410-872-9396
                  <br />
                  <strong>Fax:</strong> +1 410-872-9396
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Pennsylvania</h4>
                <p>Erie, PA 16508, US</p>
              </div>
            </div>
          </div>

          {/* Connect with us */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-[#1e73be] mb-4">
              Connect with us – USA
            </h2>
            <p className="mb-4">Find us on social media</p>
            <div className="flex items-center space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/paradigmittechnologyservices/posts/?feedView=all"
              >
                <img src={linkedin} alt="LinkedIn" width={50} />
              </a>
              <a href="mailto:wecare@paradigmithr.com">
                <img src={gmail} alt="Gmail" width={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
