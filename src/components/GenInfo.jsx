import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const GenInfo = () => {
  return (
    <div className="bg-white text-black mb-4 p-8 rounded-lg shadow-lg">
      <div className="justify-between flex">
        <h3 className="text-xl font-bold">General information</h3>
        <FontAwesomeIcon
          icon={faEdit}
          className="text-cyan-800 cursor-pointer"
        />
      </div>
      <div className="mt-5">
        <div className="text-gray-900 text-lg font-medium">About me</div>
        <div className="text-gray-500 text-sm mt-1">
          <p>
            Hey there! I'm a single parent on a mission to find a rewarding job
            that allows me to provide for my family. It hasn't been easy
            balancing the demands of parenthood and job hunting, but I'm
            determined to make it work. With little to no skills in the job
            market, I'm ready to take the leap and discover new opportunities
            with SoloLeap.
          </p>
          <p className="mt-3">
            I may not have much experience or expertise right now, but I'm eager
            to learn and grow. I believe in the power of perseverance and the
            value of hard work. Being a single parent has taught me resilience,
            adaptability, and the ability to multitask like a pro. I may not
            have a fancy resume, but I have an unwavering dedication to make a
            better future for myself and my children. I'm excited to leverage
            the resources and support offered by SoloLeap to enhance my skills,
            build a strong resume, and connect with potential employers. I'm
            ready to embark on this journey, and with SoloLeap by my side, I
            know I can find a job that not only provides financial stability but
            also allows me to thrive as a single parent. Together, let's turn
            challenges into opportunities and create a brighter future for
            ourselves and our families.
          </p>
        </div>
      </div>
      <div
        style={{
          columnGap: "1.00rem",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
        className="mt-10 grid gap-10"
      >
        <div>
          <div className="text-gray-500 text-sm font-medium">Education</div>
          <div className="text-gray-900 text-sm font-semibold">
            University of Cebu
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm font-medium">Work History</div>
          <div className="text-gray-900 text-sm font-semibold">None</div>
        </div>
        <div>
          <div className="text-gray-500 text-sm font-medium">Join Date</div>
          <div className="text-gray-900 text-sm font-semibold">06-08-2023</div>
        </div>
        <div>
          <div className="text-gray-500 text-sm font-medium">Languages</div>
          <div className="text-gray-900 text-sm font-semibold">
            English, Filipino
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm font-medium">Interests</div>
          <div className="text-gray-900 text-sm font-semibold">
            Cooking, Music, Pets
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm font-medium">Birthday</div>
          <div className="text-gray-900 text-sm font-semibold">15-08-1990</div>
        </div>
      </div>
    </div>
  );
};

export default GenInfo;
