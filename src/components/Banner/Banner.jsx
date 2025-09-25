import React from 'react';
import './Banner.css'

const Banner = ({ progress, completed }) => {
    return (
        <div>
             <div className=' items-center flex flex flex-col md:flex-row justify-between gap-5'>
               <div className='bg-[#422AD5] banner h-[250px] w-full rounded-lg text-white flex flex-col justify-center items-center mt-5 text-center p-15'
               >
                   <h3 className='text-xl'>In-Progress</h3>
                   <span className='text-7xl font-bold'>{progress}</span>
               </div>

               <div className='bg-gradient-to-r from-[#54CF68] to-[#00827A] h-[250px]  w-full rounded-lg text-white flex-col justify-center items-center mt-5 p-15 text-center'>
                  
                    <h3 className='text-xl'>Completed</h3>
                   <span className='text-7xl font-bold'>{completed}</span>
                  
               </div>
           </div>
        </div>
    );
};

export default Banner;