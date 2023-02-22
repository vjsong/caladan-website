import React from 'react'
import DateTime from './DateTime'

const Main = () => {
    return (
        <div className = 'w-full h-screen'>
            <div className='absolute w-full h-full bg-black/75'></div>
            <video  className='w-full h-full object-cover' loop autoPlay muted>
                <source src= '/assets/videobg_night.mp4' />
            </video>
            <div className=' absolute w-full h-full flex flex-col justify-center items-center text-white gap-y-6 top-0'>
                <div className ='flex flex-row justify-center items-center gap-8'>
                        <img className = 'w-64'src='/assets/logo_light.svg' alt="Caladan Logo"/>
                    <div className='max-w-md'>
                        <p>Caladan is an indpendent brokerage that sources and delivers raw materals, equipment and chemicals to climate startups.</p>
                    </div>
                </div>
                <div>
                    <p>Contact Info: <a className = 'underline' href="mailto:vincent@caladanindustries.com">vincent@caladanindustries.com</a></p>
                </div>
                <div>
                    <p>We are headquartered in San Francisco, CA</p>
                </div>
                <DateTime />
            </div>
        </div>
    )
}
export default Main