import React from "react";
import ProfileCard from "../components/ProfileCard";
import SearchBar from "../components/SearchBar";
import JobListingContainer from "../components/JobListingContainer";

const Dashboard = () => {
  return (
    <div className=" bg-slate-50 min-h-screen-nav container mx-auto py-10 px-4 sm:px-6 lg:px-8 flex">
      <div className="w-full md:w-2/3 pr-4">
        <SearchBar />
        <JobListingContainer />
      </div>
      <div className="w-1/3 pl-4 hidden md:block">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Dashboard;
