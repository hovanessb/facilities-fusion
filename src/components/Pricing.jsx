import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const basic = [
  "Routine Scheduled Inspections: Proactive assessments to identify and address maintenance needs before they become major issues.",
  "Scheduled Maintenance Services: Regular upkeep to ensure your facility operates smoothly and efficiently.",
  "Cost-Efficiency: Minimize unexpected repair costs through preventive measures.",
  "Customized Plans: Tailored to the unique needs of your property.",
  "Peace of Mind: Know that your facility is in good hands."
];

const advanced = [
  "All Basic Plan Features: Routine inspections, scheduled maintenance, and cost-effective solutions.",
  "24/7 Emergency Call Service: Access to immediate assistance for urgent maintenance and repair needs.",
  "Rapid Response: Quick resolution of emergency situations to minimize downtime.",
  "Priority Service: Your facility's needs are our top priority, day or night.",
  "Comprehensive Support: A complete package to keep your facility running smoothly."
];
const project = [
  "Single Project Focus: Dedicated planning and execution of a specific facility-related project.",
  "Customized Project Scope: Tailored to your project's unique requirements.",
  "Expert Guidance: Benefit from our extensive experience in managing facility projects.",
  "Cost-Effective Solutions: We optimize resources to deliver your project on time and within budget.",
  "Project Success: Achieve your facility improvement goals with our focused approach."
];
export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">
                Find Your Perfect Fit
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Choose your best plan
              </h2>
              <p className="mb-6 text-customGrayText">
                At Facilities Fusion, we believe in transparency. Our pricing is competitive, and we offer flexible plans to accommodate your budget. Contact us for a personalized quote based on your specific facility management and maintenance needs.
              </p>
              
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Basic
                  </h4>

                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    The perfect way to get scheduled routine maintenance for your property.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    {basic.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                    Advanced
                  </h4>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    Routine maintenance and emergency call service.
                  </p>
                  <ul className="mb-14 text-white">
                    {advanced.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-20"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Project Based
                  </h4>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Lets plan and execute a project
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    {project.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
