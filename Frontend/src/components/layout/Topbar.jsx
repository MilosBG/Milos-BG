import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='bg-mbg-black text-mbg-darkgrey text-sm text-opacity-100' id='mbg'>
      <div className='container mx-auto flex justify-center items-center py-7'>
        <Link to="/">
        <img src={assets.MBG} className='h-10' alt="Milos BG" />
        </Link>
      </div>
    </div>
  )
}

export default Topbar
