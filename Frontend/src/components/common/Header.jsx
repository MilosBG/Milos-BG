import React from 'react'
import Topbar from '../layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='border-b border-mbg-lightgrey'>
      {/* Topbar */}
      <Topbar />
      {/* Navbar */}
      <Navbar />
      {/* Cart Drawer */}
    </header>
  )
}

export default Header
