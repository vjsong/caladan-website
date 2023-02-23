import React from 'react'
import DateTime from './DateTime'

const Main = () => {
    return (
        <div className = 'w-full h-screen bg-black'>
            <div className='absolute w-full h-screen bg-black md:bg-black/75 overflow-hidden'></div>
            <video  className='w-full h-screen object-cover display-none md:display overflow-hidden' loop autoPlay muted>
                <source src= '/assets/videoBg.mp4' />
            </video>
            <div className=' absolute w-full h-full flex flex-col justify-center items-center text-white gap-y-6 top-0'>
                <div className ='flex flex-col ls:flex-row justify-center items-center gap-8'>
                        <img className = 'md:w-64 w-56'src='/assets/logo_light.svg' alt="Caladan Logo"/>
                    <div className='w-auto md:w-2/5 ls:text-left text-center md:mx-0 mx-20'>
                        <p className='font-medium'>
                            Caladan is an indpendent brokerage that sources and delivers raw materals, equipment and chemicals to climate startups.
                        </p>
                    </div>
                </div>
                <div>
                    <p>Contact Info: <a className = 'underline' href="mailto: vincent@caladanindustries.com">vincent@caladanindustries.com</a></p>
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