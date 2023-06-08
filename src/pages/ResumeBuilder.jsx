import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faDownload,
  faMagnifyingGlassArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Transition } from "@headlessui/react";
import TemplateSelection from "../components/TemplateSelection";

const ResumeBuilder = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobRole: "",
    languages: "",
    skills: "",
    education: "",
    experience: "",
    workHistory: "",
    other: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const splitCamelCase = (str) => {
    return str
      .replace(/([A-Z])/g, " $1")
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="">
      {/* First Step */}
      <Transition
        show={step === 1}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <section className="flex justify-center items-center min-h-screen-nav bg-slate-50">
          <div className="container mx-auto flex flex-col w-full p-10 gap-5 md:flex-row justify-center items-center lg:gap-40 ">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-700">
                Choose a{" "}
                <span className="bg-gradient-to-r gradient-to-r from-cyan-400 via-blue-500 to-cyan-700 text-transparent bg-clip-text">
                  template
                </span>
              </h2>
              <div className="mt-5 relative">
                <button
                  type="button"
                  className="w-full max-w-xs lg:max-w-md xl:max-w-lg inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-800 hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700"
                  onClick={() => setStep(2)}
                >
                  Next
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="h-5 w-5 absolute right-3"
                  />
                </button>
              </div>
            </div>
            <div>
              <TemplateSelection />
            </div>
          </div>
        </section>
      </Transition>
      {/* Second Step */}
      <Transition
        show={step === 2}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <section className="flex justify-center items-center min-h-screen-nav p-10 bg-slate-50">
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
            <form className="w-full md:w-1/2">
              <h2 className="text-3xl font-extrabold text-center text-gray-700">
                Fill out the{" "}
                <span className="bg-gradient-to-r gradient-to-r from-cyan-400 via-blue-500 to-cyan-700 text-transparent bg-clip-text">
                  details
                </span>
              </h2>
              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label htmlFor="job-role">Job Role</label>
                    <input
                      id="jobRole"
                      placeholder="e.g. Software Engineer"
                      name="jobRole"
                      type="text"
                      className="w-full mt-2 rounded-lg px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-700 focus:border-cyan-700 focus:z-10 sm:text-sm"
                      value={formData.jobRole}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="languages">Languages</label>
                    <input
                      id="languages"
                      placeholder="e.g. English, Filipino"
                      name="languages"
                      type="text"
                      className="w-full mt-2 rounded-lg px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-700 focus:border-cyan-700 focus:z-10 sm:text-sm"
                      value={formData.languages}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="skills">Skills</label>
                  <textarea
                    id="skills"
                    placeholder="Enter your skills here..."
                    name="skills"
                    rows="4"
                    className="w-full mt-2 rounded-lg resize-none px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-700 focus:border-cyan-700 focus:z-10 sm:text-sm"
                    value={formData.skills}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="education">Education</label>
                  <textarea
                    id="education"
                    placeholder="Enter your education here..."
                    name="education"
                    rows="4"
                    className="w-full mt-2 rounded-lg resize-none px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-700 focus:border-cyan-700 focus:z-10 sm:text-sm"
                    value={formData.education}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="experience">Experience</label>
                  <textarea
                    id="experience"
                    placeholder="Enter your experience here..."
                    name="experience"
                    rows="4"
                    className="w-full mt-2 rounded-lg resize-none px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-700 focus:border-cyan-700 focus:z-10 sm:text-sm"
                    value={formData.experience}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="work-history">Work History</label>
                  <textarea
                    id="workHistory"
                    placeholder="Enter your work history here..."
                    name="workHistory"
                    rows="4"
                    className="w-full mt-2 rounded-lg resize-none px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-700 focus:border-cyan-700 focus:z-10 sm:text-sm"
                    value={formData.workHistory}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="other"
                    className=" text-md text-gray-800 dark:text-gray-300"
                  >
                    Other
                  </label>
                  <textarea
                    id="other"
                    placeholder="Anything else you want to add? e.g. Certifications, Volunteer Experience, etc."
                    name="other"
                    rows="4"
                    className="w-full mt-2 rounded-lg resize-none px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-700 focus:border-cyan-700 focus:z-10 sm:text-sm"
                    value={formData.other}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  className="w-1/3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-cyan-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700"
                  onClick={() => setStep(1)}
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="mr-auto h-4 w-4 text-cyan-800"
                  />
                  Previous
                </button>
                <button
                  type="button"
                  className="w-1/3 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-800 hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700"
                  onClick={() => setStep(3)}
                >
                  Next
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-auto h-4 w-4"
                  />
                </button>
              </div>
            </form>
          </div>
        </section>
      </Transition>
      {/* Last Step */}
      <Transition
        show={step === 3}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <section className="flex justify-center items-center min-h-screen-nav p-10 bg-slate-50">
          <div className="container mx-auto flex flex-col w-full md:flex-row justify-center items-center lg:gap-20">
            <div className="w-1/3">
              <div className="text-gray-500 text-sm">
                {Object.entries(formData).map(([key, value]) => (
                  <React.Fragment key={key}>
                    <div className="mt-4">
                      <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-700 text-white font-semibold shadow-md">
                        {splitCamelCase(key)}
                      </span>
                    </div>
                    <div className="text-gray-900 font-medium ml-2 my-2">
                      {value}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="w-1/5">
              <div className="w-full mt-8 flex flex-col gap-5">
                <button
                  type="button"
                  className="items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-800 hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700 flex justify-between"
                >
                  Preview
                  <FontAwesomeIcon
                    icon={faMagnifyingGlassArrowRight}
                    className="h-4 w-4 ml-2"
                  />
                </button>
                <button
                  type="button"
                  className="items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-800 hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700 flex justify-between"
                >
                  Download
                  <FontAwesomeIcon icon={faDownload} className="h-4 w-4 ml-2" />
                </button>

                <button
                  type="button"
                  className="items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700 flex justify-between"
                  onClick={() => setStep(2)}
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="h-4 w-4 mr-2 text-cyan-800"
                  />
                  Previous
                </button>
              </div>
            </div>
          </div>
        </section>
      </Transition>
    </div>
  );
};

export default ResumeBuilder;
