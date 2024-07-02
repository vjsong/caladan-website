import React from 'react'
import DateTime from './DateTime'
import { motion } from 'framer-motion';


const Main = () => {
    return (
            <div className = 'w-full h-screen'>
                <div className='absolute w-full h-screen bg-black md:bg-black/75 overflow-hidden'></div>
                <video  className='w-full h-screen object-cover display-none md:display overflow-hidden opacity-0 ' loop autoPlay muted>
                    <source src= '/assets/videoBg.mp4' />
                </video>
                <div className=' absolute w-full h-full flex flex-col justify-center items-center text-white gap-y-6 top-0'>
                    <div className ='flex flex-col ls:flex-row justify-center items-center gap-8'>
                            <img className = 'md:w-64 w-56'src='/assets/logo_white.svg' alt="Caladan Logo"/>
                        <div className='w-auto md:w-2/5 ls:text-left text-center md:mx-0 mx-20'>
                            <p>
                                Caladan is a recycling and physical trading company that markets and processes critical metals critical to the energy transition. We are deeply committed to promoting a circular supply chain for renewable energy.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>Contact Info: <a className = 'underline' href="mailto: trading@caladanindustries.com">trading@caladanindustries.com</a></p>
                    </div>
                    <div>
                        <p>Founded at Stanford University. Based out of Austin, TX</p>
                    </div>
                    <DateTime />
                </div>
            </div>
    )
}
export default Main
