import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {LuSquareMenu, LuSquareUser, LuX,} from 'react-icons/lu'; //LuSquareSquare,
import { GiBasketballBasket } from 'react-icons/gi'; //LuSquareSquare,
import { MdAssessment } from "react-icons/md";
import Searchbar from './Searchbar';
import CartDrawer from '../layout/CartDrawer';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const cartItemCount = cart?.products?.reduce((total, product) => total + product.quantity,
  0 
) || 0;

  const toggleNavDrawer  = () => {
      setNavDrawerOpen(!navDrawerOpen);
  }

  const toggleCartDrawer = () => {
      setDrawerOpen(!drawerOpen);
  }

  return (
    <>
      <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        

        {/* Left - Navigation Links*/}
        <div className='hidden md:flex space-x-6'>
            
            <Link 
              to="/milos-bg" 
              className='text-mbg-black hover:text-mbg-lightgrey text-sm font-medium uppercase' 
              >
              
            Milos BG
            </Link>
            
            <Link 
              to="/outfits/all?category=Top" 
              className='text-mbg-black hover:text-mbg-lightgrey text-sm font-medium uppercase' 
              >
              
            Top
            </Link>

            <Link 
              to="/outfits/all?category=Bottom" 
              className='text-mbg-black hover:text-mbg-lightgrey text-sm font-medium uppercase' 
              >
              
            Bottom
            </Link>
            
            <Link 
              to="/outfits/all?category=Accessory" 
              className='text-mbg-black hover:text-mbg-lightgrey text-sm font-medium uppercase' 
              >
              
            Accessory
            </Link>

            
        </div>
        <div>

        </div>
        
        {/* Right - Icons*/}
        <div className='flex items-center space-x-4'>

          <button onClick={toggleCartDrawer} className=''> 
            <GiBasketballBasket className='text-4xl text-mbg-black hover:text-mbg-lightgrey'/>
            { cartItemCount > 0 && (
            <span className='absolute bg-mbg-lightgrey text-mbg-darkgrey text-xs font-semibold rounded-full px-2 py-0.5' style={{top: "97.6px"}}>
              { cartItemCount }
            </span>

            )}
          </button>

          { user && user.role === "admin" && (

          <Link to="/admin" className='cursor-none'>
            <MdAssessment className='h-7 w-7 text-mbg-black hover:text-mbg-lightgrey'/>
          </Link>

          ) }


          <Link to="/profile" className=''> 
            <LuSquareUser className='h-6 w-6 text-mbg-black hover:text-mbg-lightgrey'/>
          </Link>

        {/* Search */}
        <div className='overflow-hidden'>
        <Searchbar />
        </div>

          <button className='md:hidden'> 
            <LuSquareMenu onClick={toggleNavDrawer} className='h-6 w-6 text-mbg-black hover:text-mbg-lightgrey'/>
          </button>

        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation */}
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-mbg-black shadow-lg transform transition-transform duration-300 z-104 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full" }`} >
        <div className='flex justify-end p-4' >
          <button onClick={toggleNavDrawer}>
            <LuX className='h-6 w-6 text-mbg-darkgrey hover:text-mbg-lightgrey' />
          </button>
        </div>
        <div className='p-4'>
          <h2 className='text-xl font-medium text-mbg-lightgrey mb-4'>Menu</h2>
          <nav className='space-y-4'>
              <Link to="/milos-bg" onClick={toggleNavDrawer} className='txt-hvr1 block' >
              Milos BG
              </Link>
              <Link to="/outfits/all?category=Top" onClick={toggleNavDrawer} className='txt-hvr1 block' >
              Top
              </Link>
              <Link to="/outfits/all?category=Bottom" onClick={toggleNavDrawer} className='txt-hvr1 block' >
              Bottom
              </Link>
              <Link to="/outfits/all?category=Accessory" onClick={toggleNavDrawer} className='txt-hvr1 block' >
              Accessory
              </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
