import React from "react";
import Heading from "../components/Heading";
import { team } from "../data/Data";
const Team = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <Heading
          title="Our Featured Agents"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {team.map((val, index) => (
            <div
              className="bg-white border border-[rgba(62,28,131,0.1)] p-8 rounded-md hover:shadow-[0_0_20px_rgba(112,121,138,0.18)] transition duration-300 cursor-pointer"
              key={index}
            >
              {/* Listing Count */}
              <button className="bg-[#f5f5f5] text-sm px-4 py-1 rounded-full font-semibold text-gray-700 mb-4">
                {val.list} Listings
              </button>

              <div className="text-center mt-6">
                {/* Avatar + Checkmark */}
                <div className="relative w-[90px] h-[90px] mx-auto">
                  <img
                    src={val.cover}
                    alt={val.name}
                    className="w-[90px] h-[90px] rounded-full object-cover"
                  />
                  <i className="fa-solid fa-circle-check text-[#108be7] text-[17px] absolute top-[35px] right-[-10px]"></i>
                  {/* Optional: Border ring around image */}
                  <div className="absolute -top-[15px] -left-[15px] w-[110px] h-[110px] border-[5px] border-[#edf0f5] rounded-full z-[-1]"></div>
                </div>

                {/* Agent Info */}
                <div className="mt-6">
                  <p className="text-gray-600 mt-4">
                    <i className="fa fa-location-dot mr-1"></i>
                    {val.address}
                  </p>
                  <h4 className="text-lg font-semibold mt-2">{val.name}</h4>

                  {/* Social Icons */}
                  <ul className="flex justify-center mt-4 flex-wrap">
                    {val.icon.map((icon, i) => (
                      <li
                        key={i}
                        className="w-10 h-10 bg-[#f4f5f7] rounded-full flex items-center justify-center text-gray-700 mx-1"
                      >
                        {icon}
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="flex justify-center items-center gap-4 mt-6">
                    <button className="bg-[#27ae60] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition">
                      <i className="fa fa-envelope"></i>
                      Message
                    </button>
                    <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                      <i className="fa fa-phone-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
