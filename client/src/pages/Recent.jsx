import React from "react";
import RecentCard from "../components/RecentCard";
import Heading from "../components/Heading";

const Recent = () => {
  return (
    <section className="py-16 px-16 bg-white">
      <div className="container mx-auto  text-center text-black ">
        <Heading
          title="Recent Property Listed"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <RecentCard />
      </div>
    </section>
  );
};

export default Recent;
