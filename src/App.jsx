import { useState } from 'react'
import React from 'react' 
import Sidebar from './component/sidebar'
import Player from './component/player'

function App() {

  return (
    
      <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          <Sidebar/>   
        </div>
        <Player/>
        
      </div>
      
  )
}

export default App
