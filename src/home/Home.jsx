import React from 'react'
import Rooms from './Room'
import Carousel from './Carousel'
import Booknow from './Booknow'
import Service from './Service'
import Sliders from './Sliders'
import Team from './team'
import Newsletter from './Newsletter'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Booknow/>
      <Rooms/>
      <Service/>
      <Sliders/>
      <Team/>
      <Newsletter/>
      
    </div>
  )
}

export default Home
