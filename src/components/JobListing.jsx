import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const JobListing = () => {
  return (
    <a
      className="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg ml-6 mr-6 shadow-lg"
      href=""
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-700"></span>

      <div className="justify-between sm:flex">
        <div>
          <h5 className="text-xl font-bold text-slate-900">
            Building a beautiful product as a software developer
          </h5>
          <div className="flex items-center mt-1">
            <span className="text-xs font-medium text-slate-600 rounded-full bg-gray-200 px-2 py-1 mr-2">
              Category 1
            </span>
            <span className="text-xs font-medium text-slate-600 rounded-full bg-gray-200 px-2 py-1">
              Category 2
            </span>
          </div>
        </div>

        <div className="flex-shrink-0 hidden ml-3 sm:block">
          <div className="flex items-center rounded-lg bg-cyan-800 px-2 py-1">
            <span className="text-xs text-white">Remote</span>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-slate-500">
          Open source Tailwind UI components and templates to bootstrap your new
          apps, projects, or landing sites! Open source Tailwind UI.
        </p>
      </div>

      <dl className="flex mt-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-slate-600">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
            Date
          </dt>
          <dd className="text-xs text-slate-500">31st June, 2022</dd>
        </div>

        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <dt className="text-sm font-medium text-slate-600">
            <FontAwesomeIcon icon={faMoneyBill} className="mr-1" />
            Salary
          </dt>
          <dd className="text-xs text-slate-500">$5000/month</dd>
        </div>
      </dl>

      <div className="mt-6">
        <button className="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-800 rounded-lg hover:bg-cyan-900 focus:outline-none focus:ring focus:ring-cyan-600 focus:ring-opacity-50">
          Apply Now
        </button>
      </div>
    </a>
  );
};

export default JobListing;
