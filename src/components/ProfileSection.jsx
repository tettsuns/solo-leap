import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const ProfileSection = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log("User data: " + userData);
    setUser(userData);
  }, []);

  return (
    <div className="bg-white text-black mb-4 p-8 rounded-lg shadow-lg">
      <div className="justify-between flex">
        <img
          src="https://i.pravatar.cc/300"
          className="h-20 mb-2 align-middle w-20 rounded-lg overflow-clip"
        />
        <FontAwesomeIcon
          icon={faEdit}
          className="text-cyan-800 cursor-pointer"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold">
          {user.firstName + " " + user.lastName}
        </h2>
        <ul className="mt-2">
          <li className="items-center text-gray-500 flex text-sm">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-900 h-4 mr-2 align-middle w-4 overflow-hidden"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
            </svg>
            Front-end Developer
          </li>
          <li className="items-center text-gray-500 flex text-sm mt-1">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-900 h-4 mr-2 align-middle w-4 overflow-hidden"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
            {user.country}
          </li>
        </ul>
      </div>

      <div>
        <div className="flex-grow">
          <div className="text-gray-500 text-sm">
            <div className="mt-4">Email address</div>
            <a className="text-gray-900 cursor-pointer font-medium">
              {user.email}
            </a>
            <div className="mt-4">Work Type Preference</div>
            <div className="text-gray-900 font-medium mb-2">
              {user.workType}
            </div>
            <div className="mt-4">Work Hours Availability</div>
            <div className="text-gray-900 font-medium mb-2">
              {user.hoursPerWeek}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
