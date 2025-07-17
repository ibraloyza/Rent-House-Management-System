import React from 'react'
import Hero from './Hero'
import Featured from './Featured'
import Recent from './Recent'
import Location from './Location '
import Team from './Team'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Hero />
    <Featured />
    <Recent />
    <Location />
    <Team />
    <Footer />
    </>
  )
}

export default Home