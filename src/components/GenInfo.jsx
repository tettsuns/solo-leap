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
            Tincidunt quam neque in cursus viverra orci, dapibus nec tristique.
            Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus
            congue arcu aenean posuere aliquam.
          </p>
          <p className="mt-3">
            Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea
            rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus
            vitae. Scelerisque fermentum, cursus felis dui suspendisse velit
            pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan
            vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.
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
            Thomas Jeff High School, Stanford University
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm font-medium">Work History</div>
          <div className="text-gray-900 text-sm font-semibold">
            Twitch, Google, Apple
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm font-medium">Join Date</div>
          <div className="text-gray-900 text-sm font-semibold">12-09-2021</div>
        </div>
        <div>
          <div className="text-gray-500 text-sm font-medium">Languages</div>
          <div className="text-gray-900 text-sm font-semibold">
            English, German, Italian, Spanish
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm font-medium">Role</div>
          <div className="text-gray-900 text-sm font-semibold">
            Graphic Designer
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
