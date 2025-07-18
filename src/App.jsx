import React from 'react'
import Navber from './layouts/Navber'
import Banner from './layouts/Banner'
import Services from './layouts/Services'
import Feature from './layouts/Feature'
import ToggleButton from './components/ToggleButton'
import OverlappingCircles from './components/OverlappingCircles'
import InteractiveOverlappingCircles from './components/InteractiveOverlappingCircles'
import Cards from './layouts/Cards'



const App = () => {
  return (
    <>
      <Navber />
      <Banner />
      <Services />
      <Feature />
      <Cards />
      <ToggleButton />
      <OverlappingCircles />
      <InteractiveOverlappingCircles />
      
    </>
  )
}

export default App