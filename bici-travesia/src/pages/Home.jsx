import React from 'react'
import RutasLanding from '../components/RutasLanding'
// import Banner from '../components/banner'
import AboutUs from '../components/AboutUs'
import TestimonyCard from '../components/TestimonyCard'

export const Home = () => {
  return(
    <div  className="relative w-full h-64">
      {/* <Banner /> */}
      <AboutUs />
      <TestimonyCard/>
      <RutasLanding/>
    </div>
  )
}

