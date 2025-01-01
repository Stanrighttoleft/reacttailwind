import React from 'react'

const Albumitem = (image,name,desc,id) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt=''/>
        <button className='font-bold mt-2 mb-1'>{name}</button>
        <button className='text-slate-200 text-sm'>{desc}</button>
    </div>
  )
}

export default Albumitem