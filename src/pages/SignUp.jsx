import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const SignUp = () => {
  const passwordConfirmRef = useRef();
  const [formData, setFormData] = useState({
    accType: "worker",
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    password: "",
    workType: "Remote",
    hoursPerWeek: "More than 30 hrs/week",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormComplete = () => {
    const formFields = Object.values(formData);
    return formFields.every((field) => field !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== passwordConfirmRef.current.value) {
      window.alert("Password and Confirm Password do not match.");
      return;
    } else if (!isFormComplete()) {
      window.alert("Please fill out all fields.");
      return;
    }

    console.log(formData);

    axios
      .post("http://localhost:5000/users/register", formData)
      .then((response) => {
        console.log(response.data);
        window.alert("You have successfully signed up!");
        window.location.href = "./signin";
      })
      .catch((error) => {
        console.error("Error signing up: " + error);
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen-nav bg-slate-50">
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-70">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Join SoloLeap: Empowering Single Parents to Excel in Their
                Careers
              </h2>

              <p className="max-w-xl mt-4 text-gray-300">
                Create your SoloLeap account and unlock a wealth of job
                listings, a powerful resume builder, and skill-building
                resources. Sign up today to embark on a journey towards
                professional success as a single parent.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <div className="mt-6">
              <h1 className="text-gray-500 font-medium dark:text-gray-300">
                Select type of account:
              </h1>

              <div className="mt-3 md:flex md:items-center md:-mx-2">
                <button className="flex justify-center w-full px-6 py-3 text-white bg-cyan-800 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <span className="mx-2">Worker</span>
                </button>

                <button className="flex justify-center w-full px-6 py-3 mt-4 text-cyan-800 border border-cyan-800 rounded-lg hover: md:mt-0 md:w-auto md:mx-2 dark:border-cyan-400 dark:text-cyan-400 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2">Client</span>
                </button>
              </div>
            </div>

            <form
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-2 text-sm text-gray-600 font-medium dark:text-gray-200">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 font-medium dark:text-gray-200">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Snow"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 font-medium dark:text-gray-200">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. Philippines"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 font-medium dark:text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johnsnow@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 font-medium dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 font-medium dark:text-gray-200">
                  Confirm Password
                </label>
                <input
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600 font-medium dark:text-gray-200">
                  Work Type
                </label>
                <select
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="remote">Remote</option>
                  <option value="on-site">On-Site</option>
                  <option value="any">Any</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 font-medium dark:text-gray-200">
                  Hours per Week
                </label>
                <select
                  name="hoursPerWeek"
                  value={formData.hoursPerWeek}
                  onChange={handleChange}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="more-than-30">More than 30 hrs/week</option>
                  <option value="less-than-30">Less than 30 hrs/week</option>
                  <option value="as-needed">As needed - open to offers</option>
                </select>
              </div>
              <button className="mt-4 flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-800 rounded-lg hover:bg-cyan-900 focus:outline-none focus:ring focus:ring-cyan-600 focus:ring-opacity-50">
                <span>Sign Up </span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
