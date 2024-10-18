import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedCourses from './components/FeaturedCourses'
import WhyChooseUs from './components/WhyChooseUs'
import FeaturedWebinars from './components/FeaturedWebiners'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <FeaturedWebinars/>
    </div>
  )
}

export default page