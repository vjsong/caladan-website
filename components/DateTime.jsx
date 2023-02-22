import React from 'react';
import Clock from 'react-live-clock';

export const DateTime = () => {
    
    return(
        <div className ='flex flex-row justify-center items-center text-white gap-8-px'>
            <img className = 'h-4 w-4'src={'/assets/clock_light.svg'} alt='clock icon'/>
            <Clock format={'HH:mm'} ticking={true} timezone={'US/Pacific'} blinking='all'>
            </Clock>
            <p>PT - &copy; 2023</p>
        </div>
    )
}

export default DateTime