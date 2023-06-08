import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const SkillsSection = () => {
  return (
    <div className="bg-white text-black mb-4 p-8 rounded-lg shadow-lg">
      <div className="flow-root">
        <div className="justify-between flex">
          <h3 className="text-xl font-bold">Skills</h3>

          <FontAwesomeIcon
            icon={faEdit}
            className="text-cyan-800 cursor-pointer"
          />
        </div>
        <ul className="flex flex-wrap mt-4">
          <li className="bg-cyan-100 text-cyan-800 list-item font-medium mb-2 mr-2 py-1.5 px-3 rounded-md">
            Brand Design
          </li>
          <li className="bg-cyan-100 text-cyan-800 list-item font-medium mb-2 mr-2 py-1.5 px-3 rounded-md">
            Logo Design
          </li>
          <li className="bg-cyan-100 text-cyan-800 list-item font-medium mb-2 mr-2 py-1.5 px-3 rounded-md">
            Mobile App Design
          </li>
          <li className="bg-cyan-100 text-cyan-800 list-item font-medium mb-2 mr-2 py-1.5 px-3 rounded-md">
            UI Design
          </li>
          <li className="bg-cyan-100 text-cyan-800 list-item font-medium mb-2 mr-2 py-1.5 px-3 rounded-md">
            React Developer
          </li>
          <li className="bg-cyan-100 text-cyan-800 list-item font-medium mb-2 mr-2 py-1.5 px-3 rounded-md">
            Wordpress
          </li>
          <li className="bg-cyan-100 text-cyan-800 list-item font-medium mb-2 mr-2 py-1.5 px-3 rounded-md">
            Sketch
          </li>
          <li className="bg-cyan-100 text-cyan-800 list-item font-medium mb-2 mr-2 py-1.5 px-3 rounded-md">
            Figma
          </li>
          <li className="bg-cyan-100 text-cyan-800 list-item font-medium mb-2 mr-2 py-1.5 px-3 rounded-md">
            Prototyping
          </li>
          <li className="bg-cyan-100 text-cyan-800 list-item font-medium mb-2 py-1.5 px-3 rounded-md">
            Database
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
