import React from "react";
import general from "../assets/Images/General.png";
import strength from "../assets/Images/Strength.png";
import various from "../assets/Images/sectors.webp";
import Keypoints from "../Components/Keypoints";

const sectors = [
  "Industrial",
  "Construction and Real Estate",
  "Pharma and Biotechnology",
  "Clerical",
  "Accounting",
  "Automotive",
  "Manufacturing",
  "Telecommunications",
  "Banking",
  "Financial Institutional Services",
  "Insurance",
  "Media and PR",
  "Government (Public Sector Units)",
  "Information Technology",
  "Logistics",
];

const servicesData = [
  {
    title: "Recruitment",
    description:
      "End-to-end HR solutions to corporates across India. Our strength lies in the unconventional hiring methodologies that adapt to the dynamic requirements of the ever-changing staffing landscape.",
  },
  {
    title: "Employee Rebadging",
    description:
      "Structured migration to ensure a seamless rebadging process while keeping the employee perspective in mind and guiding them through a dedicated HR team.",
  },
  {
    title: "Training",
    description:
      "Customized training programs tailored to company needs, delivered by a team of certified instructors and subject matter experts.",
  },
  {
    title: "Direct Hire",
    description:
      "Also known as One time hiring. Provides full-time employment solutions for long-term workforce needs.",
  },
  {
    title: "Payroll Management",
    description:
      "Robust payroll techniques using class-leading technology and processes to deliver next-generation payroll solutions.",
  },
  {
    title: "Compliance Management",
    description:
      "100% statutory compliance aligned with labor laws, supported by a strong internal legal framework.",
  },
];

const General = () => {
  const leftServices = servicesData.slice(0, 3);
  const rightServices = servicesData.slice(3, 6);



  return (
    <div className="w-full  sm:px-6 md:px-10 px-10 py-6 max-w-screen-5xl mx-auto">
      {/* Section 1 - General Staffing */}
      <div className="flex flex-col md:flex-row  items-center gap-8 mb-12">
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">GENERAL STAFFING</h2>
          <p className="text-lg font-semibold">
            Your ultimate end to end HR Solution Provider in India
          </p>
          <p>
            ParadigmIT HR specializes in providing top-notch manpower solutions
            to both corporate and government sectors. With over fifteen years of
            expertise, we are recognized as one of India’s leading recruitment
            agencies for general staffing needs.
          </p>
          <p>
            At ParadigmitHR, we boast dedicated recruitment teams, each
            proficient in specific industry sectors. Our qualified teams
            meticulously navigate the full hiring lifecycle, ensuring the right
            talent is matched with the right role. From candidate selection to
            onboarding, we handle every step with precision and professionalism.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={general}
            alt="General Staffing"
            className="w-full h-auto rounded-md shadow"
          />
        </div>
      </div>

      {/* Section 2 - Our Strength */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">OUR STRENGTH</h2>
          <div className="space-y-4">
            <p>
              Our tailored approach allows us to seamlessly understand and meet
              our clients’ requirements, delivering optimal resources at
              competitive costs. By partnering with us, clients can streamline
              their administrative burdens, reduce costs, and save valuable
              time.
            </p>
            <p>
              Experience seamless staffing solutions from onboarding to exit and
              beyond. Our comprehensive services cover payroll management,
              employee benefits, HR Connect, and statutory compliances.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={strength}
            alt="Our Strength"
            className="w-full h-auto rounded-md shadow"
          />
        </div>
      </div>

      {/* Our Services */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Our Services :</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {leftServices.map((service, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            {rightServices.map((service, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sectors Section */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          We serve various sectors, including the ones listed below to help our{" "}
          <span className="text-blue-600">CUSTOMERS</span> and{" "}
          <span className="text-blue-600">EMPLOYEES</span> to{" "}
          <span className="text-green-600">GROW</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <img
              src={various}
              alt="Industry"
              className="w-full h-auto rounded-md shadow"
            />
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-lg text-gray-800">
            {sectors.map((sector, index) => (
              <div key={index}>• {sector}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Keypoints */}
      <Keypoints />
    </div>
  );
};

export default General;
