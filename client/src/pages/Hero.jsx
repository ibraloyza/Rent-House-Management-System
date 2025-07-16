import React from "react";
import {FaSearch} from 'react-icons/fa'
import Heading from "../components/Heading";

function Hero() {
  return (
    <>
            <section
      className="w-full h-[90vh]  bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="container mx-auto pt-[15%] text-center text-white px-4">
        <Heading
          title="Search Your Next Home"
          subtitle="Find new & featured property located in your local city."
        />

      {/* Floating Search Form */}
      <form className="absolute left-1/2 bottom-[-30px] transform -translate-x-1/2 bg-white shadow-lg rounded-md flex items-center px-6 py-4 space-x-4 w-[95%] max-w-6xl z-10">
        {/* Location */}
        <div className="flex flex-col px-2 w-full sm:w-1/4">
          <span className="text-sm text-gray-500">City/Street</span>
          <input
            type="text"
            placeholder="Location"
            className="border border-gray-300 rounded-md p-2 mt-1 placeholder:text-black"
          />
        </div>

        {/* Property Type */}
        <div className="flex flex-col px-2 w-full sm:w-1/4">
          <span className="text-sm text-gray-500">Property Type</span>
          <input
            type="text"
            placeholder="Property Type"
            className="border border-gray-300 rounded-md p-2 mt-1 placeholder:text-black"
          />
        </div>

        {/* Price Range */}
        <div className="flex flex-col px-2 w-full sm:w-1/4">
          <span className="text-sm text-gray-500">Price Range</span>
          <input
            type="text"
            placeholder="Price Range"
            className="border border-gray-300 rounded-md p-2 mt-1 placeholder:text-black"
          />
        </div>

        {/* Filter Button */}
        <div className="flex items-end justify-end w-full sm:w-1/4">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-md"
          >
            <FaSearch/>
          </button>
        </div>
      </form>
      </div>
    </section>
    </>
  );
}

export default Hero;
