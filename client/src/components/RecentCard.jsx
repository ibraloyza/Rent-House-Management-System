import React from "react";
import { list } from "../data/Data";
const RecentCard = () => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"'>
      {list.map((vol, index) => {
        const { cover, category, location, name, price, type } = vol;
        const bgColor =
          category === "For Sale"
            ? "bg-[#25b5791a] text-[#25b579]"
            : "bg-[#ff98001a] text-[#ff9800]";
        return (
          <div
            className="bg-white shadow-md rounded-md overflow-hidden"
            key={index}
          >
            {/* Image */}
            <div className="img">
              <img
                src={cover}
                alt={name}
                className="w-full h-56 object-cover"
              />
            </div>

            {/* Text */}
            <div className="p-[30px]">
              <div className="flex justify-between items-center mb-3">
                <span
                  className={`inline-block px-[15px] py-[4px] rounded-[2px] font-semibold text-[13px] ${bgColor}`}
                >
                  {category}
                </span>
                <i className="fa fa-heart text-[#bec7d8] text-[20px] cursor-pointer"></i>
              </div>

              <h4 className="text-lg font-bold mb-1">{name}</h4>
              <p className="text-[#72809d] text-sm">
                <i className="fa fa-location-dot mr-1"></i>
                {location}
              </p>
            </div>

            {/* Bottom Button Section */}
            <div className="flex items-center justify-between border-t border-[#e4e8f3] px-[30px] py-[10px]">
              <div className="flex items-center gap-2">
                <button className="bg-green-500 text-white font-semibold px-3 py-1 rounded-md">
                  {price}
                </button>
                <label className="text-sm text-gray-500">/sqft</label>
              </div>
              <span className="text-sm font-medium text-gray-600">{type}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;
