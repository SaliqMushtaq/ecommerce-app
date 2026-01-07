import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

function Hero() {
  return (
    <div>
      <div className='flex flex-col sm:flex-row border border-gray-400'>
{/* HERO LEFT SIDE */}
        <div className=' w-full sm:w-1/2  flex justify-center py-10 sm:py-0'>

          <div className='text-[#414141]'>
            <div className='flex items-center gap-2 '>
                <p className='w-8 md:w-11 h-1 bg-black'></p>
                <p className='font-medium text-base'>OUR Best sellers</p>
                    </div>
                    <h1 className='text-4xl sm:py-3 lg:text-5xl loading -relaxed '>Latest Arrivals</h1>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-1 bg-black'></p>
          </div>    
        </div>
         {/* HERO RIGHT SIDE */}
         <img src={ assets.hero_img } alt="Hero Image" className="w-full sm:w-1/2 h-auto object-cover" />
         
      </div>
    </div>
  )
}

export default Hero
