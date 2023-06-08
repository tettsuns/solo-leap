import React from "react";
import JobListing from "./JobListing";

const JobListingContainer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap items-start justify-center -mx-4 mb-5">
        <div className="w-full px-4">
          <JobListing />
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-center -mx-4 mb-5">
        <div className="w-full px-4">
          <JobListing />
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-center -mx-4 mb-5">
        <div className="w-full px-4">
          <JobListing />
        </div>
      </div>
    </div>
  );
};

export default JobListingContainer;
