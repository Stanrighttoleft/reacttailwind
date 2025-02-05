import React from 'react'
import {songsdata, assets} from '../assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='lg:flex items-center gap-4'>
            <img className='w-12' src={songsdata[0].image} alt="first song"/>
            <div>
                <p>{songsdata[0].name}</p>
                <p>{songsdata[0].desc.slice(0,12)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className="flex gap-4">
                <img className='w-6 cursor-pointer' src={assets.shuffle_icon} alt="shuffle"/>
                <img className='w-6 cursor-pointer' src={assets.prev_icon} alt="prev"/>
                <img className='w-6 cursor-pointer' src={assets.play_icon} alt="play"/>
                <img className='w-6 cursor-pointer' src={assets.next_icon} alt="loop"/>
                <img className='w-6 cursor-pointer' src={assets.loop_icon} alt=""/>
            </div>
            <div className="flex items-center gap-5">
                <p>1:06</p>
                <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr className='h-1 border-none w-0 bg-blue-800 rounded-full'/>
                </div>
                <p>3:20</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-6' src={assets.plays_icon} alt='play'/>
            <img className='w-6' src={assets.mic_icon} alt='mic'/>
            <img className='w-6' src={assets.queue_icon} alt='queue'/>
            <img className='w-6' src={assets.speaker_icon} alt='speaker'/>
            <img className='w-6' src={assets.volume_icon} alt='volume'/>
            <div className="w-19 bg-slate-50 h-1 rounded">
                
            </div>
            <img className='w-6' src={assets.mini_icon} alt='mini'/>
            <img className='w-6' src={assets.zoom_icon} alt='zoom'/>

        </div>
    </div>
  )
}

export default Player