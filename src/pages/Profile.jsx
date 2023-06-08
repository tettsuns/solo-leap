import React, { useState, useEffect } from "react";
import ProfileSection from "../components/ProfileSection";
import GenInfo from "../components/GenInfo";
import SkillsSection from "../components/SkillsSection";
import Testimonials from "../components/Testimonials";

const Profile = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 md:gap-8 bg-slate-50">
      <div className="md:col-span-1">
        <ProfileSection />
        <SkillsSection />
      </div>
      <div className="md:col-span-2">
        <GenInfo />
        <Testimonials />
      </div>
    </div>
  );
};

export default Profile;
