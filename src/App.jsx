import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Work from './Components/Work'
import PlayReel from './Components/PlayReel'
import Images from './Components/Images'
import Spread from './Components/Spread'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='font-light font-[Lausanne]'>
      <Navbar />
      <Landing/>
      <Work />
      <PlayReel/>
      <Images/>
      <Spread/>
    </div>
  )
}

export default App