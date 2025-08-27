import React from 'react'
import Hero from './components/landing/Hero'
import Stats from './components/landing/Stats'
import Services from './components/landing/Services'
import Testimonials from './components/landing/Testimonials'
import Offer from './components/landing/Offer'

const page = () => {
  return (
    <div className='min-h-screen overflow-y-hidden'>
      <Hero/>
      <Stats/>
      <Services/>
      <Offer/>
      <Testimonials/>
    </div>
  )
}

export default page