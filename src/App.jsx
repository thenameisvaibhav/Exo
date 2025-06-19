import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Work from './Components/Work'
import PlayReel from './Components/PlayReel'
import Images from './Components/Images'
import Spread from './Components/Spread'
import LocomotiveScroll from 'locomotive-scroll';
import Story from './Components/Story'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='font-light font-[Lausanne] overflow-hidden'>
      <Navbar />
      <Landing/>
      <Work />
      <PlayReel/>
      <Images/>
      <Spread/>
      <Story />
    </div>
  )
}

export default App