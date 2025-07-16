import React from "react";
import { footer } from "../data/Data";
const Footer = () => {
  return (
    <>
      {/* Contact CTA */}
      <section className="bg-[#27ae60] text-white py-[40px] px-4 ">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Do You Have Questions?</h1>
              <p className="text-lg">We'll help you to grow your career and growth.</p>
            </div>
            <button className="bg-white text-[#27ae60] font-semibold py-3 px-6 rounded-md hover:bg-gray-100">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer Main */}
      <footer className="bg-[#1d2636] text-white py-[50px] px-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Left logo & newsletter */}
          <div>
            <div className="mb-4">
              <img src="/images/logo-light.png" alt="Logo" className="w-[150px]" />
            </div>
            <h2 className="font-medium text-xl">Do You Need Help With Anything?</h2>
            <p className="text-gray-400 my-5">
              Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Email Address"
                className="bg-white text-black p-4 w-full rounded-md"
              />
              <button className="bg-[#27ae60] text-white px-4 rounded-md hover:bg-green-700">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer links */}
          {footer.map((val, i) => (
            <div key={i}>
              <h3 className="font-medium text-xl mb-6">{val.title}</h3>
              <ul>
                {val.text.map((items, idx) => (
                  <li key={idx} className="text-gray-400 mb-4 hover:text-white cursor-pointer transition">
                    {items.list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {/* Legal footer */}
      <div className="text-center py-5 bg-[#1d2636] text-white border-t border-white/10">
        <span className="text-white/50 text-sm">© 2021 RentUP. Designed By GorkCoder.</span>
      </div>
    </>
  );
};

export default Footer;
