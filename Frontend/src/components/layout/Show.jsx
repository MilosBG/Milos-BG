import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Show = () => {
  return (
    <section className='relative mb-10'>
     <img src={assets.BBallBG} alt="Basketball court" className='w-full h-[800px] md:h-[800px] lg:h-[1200px] object-cover' />
     <div className='absolute inset-0 bg-mbg-black bg-opacity-35 flex items-center justify-center'>
        <div className='text-center text-mbg-black p-6' >
            <h1 className='text-7xl md:text-9xl font-bold tracking-tighter uppercase mb-4' >
                Basketball <br /> Grind
            </h1>
            <br />
            <Link to='outfits/all' className='mbg-main-btn' >
            Shoot now
            </Link>
        </div>
     </div>
    </section>
  )
}

export default Show
