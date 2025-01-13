import React from 'react'
import Navbar from './navbar'
import {albumsdata} from '../assets/assets'
import Albumitem from './albumitem'
import { songsdata } from '../assets/assets'
import Songitem from './songitem'

const Displayhome = () => {
  return (
    <>
    <Navbar/>
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
      <div className='flex overflow-auto'>
        {albumsdata.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))} 

      </div>     
    </div>
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Today Biggest Hit</h1>
      <div className='flex overflow-auto'>
        {songsdata.map((item,index)=>(<Songitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))} 

      </div>     
    </div>
    
    </>
   
  )
}

export default Displayhome