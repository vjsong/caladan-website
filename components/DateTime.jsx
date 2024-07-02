import React from 'react';
import Clock from 'react-live-clock';

export const DateTime = () => {
    
    return(
        <div className ='flex flex-row justify-center items-center text-white gap-x-1'>
            <img className = 'h-4 w-4'src={'/assets/clock_light.svg'} alt='clock icon'/>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Belize'} blinking>
            </Clock>
            <p>CST - &copy;  2023</p>
        </div>
    )
}

export default DateTime
