import React from 'react'
import Navbar from './navbar'
import {albumsdata} from '../assets/assets'
import Albumitem from './albumitem'

const Displayhome = () => {
  return (
    <>
    <Navbar/>
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
      <div className="flex overflow-auto">
        {albumsdata.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))} 

      </div>
        
    </div>
    
    </>
   
  )
}

export default Displayhome