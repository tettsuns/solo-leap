import React from "react";
import TestPic from "../assets/testimonial-pic.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div className="bg-white text-black mb-4 p-8 rounded-lg shadow-lg">
      <div className="justify-between flex">
        <h3 className="text-xl font-bold">Testimonials</h3>

        <FontAwesomeIcon
          icon={faCirclePlus}
          className="text-cyan-800 cursor-pointer"
        />
      </div>
      <p className="text-gray-500 text-sm text mt-1">
        Endorsements from past clients
      </p>
      <div className="text-center mt-4">
        <img
          src={TestPic}
          alt="testimonial"
          className="mx-auto mt-10 max-h-60"
        />
        <p className="text-gray-900 text-sm my-3">
          Showcasing client testimonials can strengthen your profile.
        </p>
        <a
          href="#"
          className="text-cyan-800 text-sm focus:outline-none focus:underline hover:underline"
        >
          Request a testimonial
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
