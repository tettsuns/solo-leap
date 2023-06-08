import React from "react";
import ResourceCard from "../components/ResourceCard";

const Resources = () => {
  return (
    <section className="text-gray-600 body-font bg-slate-50">
      <div className="container px-10 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Enhance Your Skills with Our Exclusive Resource Library
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-700 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Explore our comprehensive resource library designed to help you
            build and enhance their skills. Discover a diverse range of courses,
            workshops, and educational materials tailored to boost your
            professional development. Take advantage of our exclusive collection
            and unlock your full potential with SoloLeap.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="p-4">
            <ResourceCard />
          </div>
          <div className="p-4">
            <ResourceCard />
          </div>
          <div className="p-4">
            <ResourceCard />
          </div>
          <div className="p-4">
            <ResourceCard />
          </div>
          <div className="p-4">
            <ResourceCard />
          </div>
          <div className="p-4">
            <ResourceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
