import React from "react";

const ResourceCard = () => {
  return (
    <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-500 ease-in-out shadow-lg hover:scale-105">
      {/* :CARD IMAGE & CATEGORY */}
      <div className="relative w-full overflow-hidden">
        {/* ::Image */}
        <img
          src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="w-full h-full object-cover object-center cursor-pointer"
        />
        {/* ::Category */}
        <h2 className="absolute top-6 left-6 inline-block pt-0.5 pb-1.5 px-2 rounded-md text-sm text-gray-100 subpixel-antialiased font-medium bg-gradient-to-br from-blue-500 to-cyan-800 cursor-pointer">
          Web Development
        </h2>
      </div>

      {/* :CARD BODY */}
      <div className="my-6 py-3 px-8 flex flex-col justify-around items-center">
        {/* ::Title */}
        <h1 className="title-font text-2xl text-center font-bold text-gray-800 antialiased">
          Introduction to HTML
        </h1>
        {/* ::Excerpt */}
        <p className="line-clamp-8 py-5 overflow-hidden leading-relaxed text-sm text-gray-500 text-left font-medium cursor-pointer">
          Master the basics of web development with our Introduction to HTML
          course. Learn how to create and structure web pages using HTML tags,
          elements, and attributes. Start building your web development skills
          today!
        </p>
        {/* ::Read more */}
        <a
          href="#link"
          className="self-start p-2 bg-gradient-to-br from-cyan-500 to-cyan-800 bg-clip-text text-transparent font-medium no-underline transform hover:scale-105"
        >
          Start Learning
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
