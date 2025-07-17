import React from "react";
import Heading from "../components/Heading";
import { location } from "../data/Data";

const Location = () => {
  return (
    <section className="py-12 x-16 bg-white">
      <div className="container mx-auto px-16 text-center">
        <Heading
          title="Explore By Location"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {location.map((item, index) => (
            <div key={index} className="relative rounded-md overflow-hidden ">
              <img
                src={item.cover}
                alt={item.name}
                className="rounded-md w-full h-auto"
              />

              <div className="absolute top-0 left-0 w-full h-[250px] flex flex-col items-center justify-center text-white z-20">
                <h5 className="text-lg font-medium">{item.name}</h5>
                <p className="flex space-x-4 text-white/80 mt-2">
                  <label>{item.Villas}</label>
                  <label>{item.Offices}</label>
                  <label>{item.Apartments}</label>
                </p>

                {/* Overlay background using pseudo element simulation */}
                <div
                  className="absolute top-0 left-0 w-[340px] h-[210px] bg-[rgba(15,28,47,0.3)] rounded-md z-[-1] m-5
                             max-w-full sm:w-[280px] sm:h-[170px]"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
