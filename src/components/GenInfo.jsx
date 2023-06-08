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
            Hey there! I'm a front-end developer with a passion for creating
            awesome user interfaces. With 9 years of experience under my belt,
            I'm your go-to person for turning designs into visually stunning and
            seamless websites. I geek out on HTML, CSS, and JavaScript, and I
            love the challenge of bringing ideas to life. Whether it's building
            responsive layouts, adding smooth animations, or optimizing
            performance, I enjoy crafting engaging web experiences that leave
            users smiling.
          </p>
          <p className="mt-3">
            I'm always keeping up with the latest front-end trends and
            technologies because, let's face it, who doesn't love staying ahead
            of the game? Collaboration is my jam, and I thrive in dynamic teams,
            working closely with designers and back-end devs to create
            pixel-perfect masterpieces. If you're looking for a front-end whiz
            who's as passionate about clean code as they are about good vibes,
            I'm your person. Let's team up and create some seriously awesome
            digital experiences that make users go, "Wow!" Ready to make magic
            happen? Let's chat!
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
            English, Filipino, German, Italian, Spanish
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm font-medium">Interests</div>
          <div className="text-gray-900 text-sm font-semibold">
            Coding, Music, Pets
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
