import React from "react"

const Back = ({ name, title, cover }) => {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center bg-gray-800 text-white overflow-hidden">
      <img
        src={cover}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 text-center">
        <span className="block text-sm font-medium uppercase">{name}</span>
        <h1 className="text-3xl font-bold mt-2">{title}</h1>
      </div>
    </div>
  )
}

export default Back
