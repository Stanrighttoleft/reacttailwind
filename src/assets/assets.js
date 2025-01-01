import home_icon from './home.png'
import search_icon from './search.png'
import stack_icon from './stack.png'
import arrow_icon from './arrow.png'
import plus_icon from './plus.png'
import img1 from './song1.webp'
import shuffle_icon from './shuffle.png'
import prev_icon from './prev.png'
import play_icon from './play.png'
import next_icon from './next.png'
import loop_icon from './loop.png'
import plays_icon from './plays.png'
import mic_icon from './mic.png'
import queue_icon from './queue.png'
import speaker_icon from './speaker.png'
import volume_icon from './volume.png'
import mini_icon from './mini.png'
import zoom_icon from './zoom.png'
import arrow_right from './arrowright.png'
import arrow_left from './arrowleft.png'
import im8 from './traditional-japan.jpg'
import im9 from './japan-piano.webp'
import im10 from './japan-soft.jpeg'
import im11 from './japan-relax.jpg'
import im12 from './japan-party.jpg'
import im13 from './asia-music.webp'

export const assets={
    home_icon,
    search_icon,
    stack_icon,
    arrow_icon,
    plus_icon,
    shuffle_icon,
    prev_icon,
    play_icon,
    next_icon,
    loop_icon,
    plays_icon,
    mic_icon,
    queue_icon,
    speaker_icon,
    volume_icon,
    mini_icon,
    zoom_icon,
    arrow_right,
    arrow_left,
}

export const albumsdata=[
    {
        id:0,
        name:"Traditional Japan",
        image: im8,
        desc:"Traditonal Japan made by Prettysleepy",
        bgcolor:"#2a4365"
    },
    {
        id:1,
        name:"Japan Piano",
        image:im9,
        desc:"Japan piano made by pianocafe_kumi",
        bgcolor:"#22543d"
        
    },
    {
        id:2,
        name:"Japan Soft",
        image:im10,
        desc:"Japan soft music",
        bgcolor:"#742a2a"
    },
    {
        id:3,
        name:"Japan relax",
        image:im11,
        desc:"relax music of japan made by NourishedByMusic",
        bgcolor:"#742a2a"
    },
    {
        id:4,
        name:"Japan party",
        image:im12,
        desc:"classic japan song by theorienvibes",
        bgcolor:"#234e52",
    },
    {
        id:5,
        name:"Asia music",
        image:im13,
        desc:"Asia Music made by HitsLab",
        bgcolor:"#744210",
    },
]

export const songsdata=[
    {
        id:0,
        name:"Song one",
        image:img1,
        //file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:00"
    },
]