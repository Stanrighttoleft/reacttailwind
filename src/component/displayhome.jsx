import React from 'react'
import Navbar from './navbar'
import {albumsdata} from '../assets/assets'
import Albumitem from './albumitem'

const Displayhome = () => {
  return (
    <>
    <Navbar/>
    <div className='my-5 font-bold text-2xl'>
        {albumsdata.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
    </div>
    
    </>
   
  )
}

export default Displayhome