import React, { useEffect } from 'react'
import { LuSquareArrowUp } from 'react-icons/lu';
import { useLocation } from 'react-router-dom';

const SizesGuide = () => {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);


  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6'>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase" id='title' >Sizes guide</h2>
      <div className="bg-mbg-white-details rounded-lg p-6 imgbxsh" >
      
      </div>


      <div className='flex justify-center items-center mt-10'>
        <a href='#mbg' ><LuSquareArrowUp className='h-6 w-6 text-mbg-darkgrey' /></a>
      </div>

    </div>
  )
}

export default SizesGuide
