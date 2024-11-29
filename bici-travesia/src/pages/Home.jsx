import React from 'react'
import RutasLanding from '../components/RutasLanding'
import TestimonyCard from '../components/TestimonyCard'
import AboutUs from '../components/AboutUs'
import Banner from '../components/banner'

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

