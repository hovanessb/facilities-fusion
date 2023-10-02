import { motion, AnimatePresence } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";

import { Form } from "../components/Form.jsx";
export const InvitationModal = ({ setIsOpen }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, zIndex: 50 }}
      animate={{ opacity: 1, zIndex: 50 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-full h-full  bg-customDarkBgTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex relative">
            <div className="w-1/2 hidden lg:inline">
              <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-white">
                Contact Us
              </h2>
              <h2 className="text-5xl font-bold tracking-normal text-customSecondary">
                Winter is coming
              </h2>

              <ul className="mb-6 text-white mt-12">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Fast Response</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Free Consultation</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Free Estimates</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
              <div className="flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                <div className="text-white mr-2 text-8xl">
                  <TailcastLogo />
                </div>
                <div className="text-white font-['myFont'] font-bold text-3xl">
                  Tailcast
                </div>
              </div>
              <div className="flex flex-wrap -m-2">
                <Form />
              </div>
            </div>
            <div
              className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
