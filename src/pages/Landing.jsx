import React from "react";
import LandingPic from "../assets/landing-pic.svg";

const Landing = () => {
  return (
    <section className="text-gray-600 body-font bg-slate-50 ">
      <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24 md:flex-row md:justify-between lg:max-w-7xl min-h-screen-nav">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded w-full"
            alt="hero"
            src={LandingPic}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="relative z-20 font-sans text-4xl font-extrabold leading-none text-black sm:text-5xl xl:text-6xl sm:text-center lg:text-left">
            <span className="relative">
              <span className="absolute bottom-0 left-0 inline-block w-full h-4 mb-1 -ml-1 transform -skew-x-3 bg-cyan-200"></span>
              <span className="relative">Leap Together,</span>
            </span>
            <span className="relative block text-cyan-400">Grow Together.</span>
          </h1>
          <p className="mt-8 leading-relaxed">
            Discover a world of opportunities tailored for single parents at
            SoloLeap. We provide the tools, resources, and support you need to
            land your dream job and build a successful career while balancing
            the responsibilities of parenthood. Join us today and take the leap
            towards a brighter future.
          </p>
          <div class="mt-8 space-y-5">
            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-2 text-cyan-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="mx-2">Find your dream job</span>
            </p>

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-2 text-cyan-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="mx-2">Resources to build your skills</span>
            </p>

            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-2 text-cyan-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="mx-2">Resume Builder</span>
            </p>
          </div>
          <a href="/signup">
            <button className="mt-8 text-white bg-cyan-800 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg">
              Get Started
            </button>
          </a>
          <p className="mt-4 text-sm text-gray-400">
            Already a member?{" "}
            <a
              href="/signin"
              className="text-cyan-800 focus:outline-none focus:underline hover:underline"
            >
              Sign in
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
