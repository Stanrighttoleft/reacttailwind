import { useState } from 'react'
import React from 'react' 
import Sidebar from './component/sidebar'
import Player from './component/player'
import Display from './component/display'

function App() {

  return (
    
      <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>   
        </div>
        <Player/>
        
      </div>
      
  )
}

export default App
