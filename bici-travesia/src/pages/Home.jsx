import TestimonyCard from "../components/TestimonyCard"
import React from 'react'
import Banner from '../components/banner'
import AboutUs from '../components/AboutUs'
import RutasLanding from '../components/RutasLanding'

export const Home = () => {
  return(
    <div  className="relative w-full h-64">
      <Banner />
      <AboutUs />
      <TestimonyCard/>
      <RutasLanding/>
    </div>
  )
}

