import React from 'react'

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className=''>
        <h1 className='text-5xl font-extrabold  mb-4 '>{title}</h1>
        <p className='text-lg opacity-80 text-[#72809d]'>{subtitle}</p>
      </div>
    </>
  )
}
export default Heading