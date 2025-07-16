import React from "react";
import Heading from "../components/Heading";
import FeaturedCard from "../components/FeaturedCard";

const Featured = () => {
  return (
    <>
      <section className="bg-gray-50 py-16 px-16 ">
        <div className="container mx-auto  text-center text-black ">
          <Heading
            title="Featured Property Types"
            subtitle="Find All Type of Property."
          />
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Featured;
