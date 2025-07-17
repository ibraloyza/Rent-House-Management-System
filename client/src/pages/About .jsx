import React from "react"
import img from "../images/about.jpg"
import Back from "../components/Back"
import Heading from "../components/Heading"

const About = () => {
  return (
    <>
      <section className="mb-20">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 mt-10">
          {/* Left Content */}
          <div className="md:w-1/2">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />
            <p className="text-[15px] leading-[30px] mb-5 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-[15px] leading-[30px] mb-5 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              More About Us
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img src={img} alt="about" className="w-full rounded" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
