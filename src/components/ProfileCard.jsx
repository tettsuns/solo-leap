import React, { useState, useEffect } from "react";

const ProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUser(userData);
  }, []);

  console.log("user: ", user);
  return (
    <div className="max-w-sm mx-auto mt-4 overflow-hidden rounded-lg shadow-lg">
      <div className="h-40 bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-700">
        <div className="flex justify-center">
          {user && (
            <span className="mt-10 text-4xl font-bold text-white">
              {user.firstName + " " + user.lastName}
            </span>
          )}
        </div>
        <div className="flex justify-center">
          <img
            className="object-cover w-24 h-24 mt-4 border-4 border-cyan-800 rounded-full"
            src="https://i.pravatar.cc/300"
            alt=""
          />
        </div>
      </div>
      <div className="px-6 py-4 bg-white">
        <div className="flex justify-center mt-10 mb-4 text-xl font-medium">
          Front-end Developer
        </div>
        <div className="flex w-full text-gray-600">
          <svg
            className="h-5 mt-1 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {user && <span>{user.country}</span>}
        </div>
        <div className="flex my-1 text-gray-600">
          <svg
            className="h-5 mt-1 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>23 Applications</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
