import React from "react";
import { featured } from "../data/Data";
import Heading from "./Heading";

const FeaturedCard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
      {featured.map((items, index) => (
        <div
          className="bg-white p-[30px] text-center rounded-[6px] shadow-[0_0_20px_rgba(112,121,138,0.18)] cursor-pointer transition duration-200 hover:shadow-lg"
          key={index}
        >
          <img
            src={items.cover}
            alt={items.name}
            className="w-[65px] h-[65px] mx-auto mb-4"
          />
          <h4 className="font-semibold text-lg text-gray-800">{items.name}</h4>
          <label className="text-sm text-gray-500">{items.total}</label>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;
