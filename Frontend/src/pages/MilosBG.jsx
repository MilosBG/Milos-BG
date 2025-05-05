import React from 'react';
import { assets } from '../assets/assets';

const MilosBG = () => {
  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6' style={{minHeight: "640px"}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter" >

            {/* Left Section */}
            <div className="bg-none rounded-lg p-0 imgbxsh">
              <img 
                src={assets.BBallBG_Register}
                alt="Milos BG"
                className='rounded-lg'
              />
            </div>

            {/* Right Section */}
            <div className="bg-mbg-black imgbxsh rounded-lg p-6">

              <h2 className="text-xl font-semibold text-mbg-white uppercase py-2">
                Make it your liked outfits
              </h2>

              <p className="text-lg font-semibold text-mbg-lightgrey py-2">
                Grind Until Achieve
              </p>

              <p className="text-md font-medium text-mbg-darkgrey py-2">
                Whatever you do in life make sure you keep moving forward, be humble and work your butt off.
              </p>
            
            </div>
            </div>

    </div>
  )
}

export default MilosBG
