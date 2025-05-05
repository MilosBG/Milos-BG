import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className='border-t py-3 bg-mbg-black' >
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0 ' >

            {/* Website links */}
            <div>
                <h3 className='text-lg text-mbg-lightgrey font-medium mb-4'>Milos BG</h3>
                <ul className='space-y-2' >
                    <li className='txt-hvr1' >
                        <Link to="/mentions-légales#title">Mentions légales</Link>
                    </li>
                    <li className='txt-hvr1' >
                        <Link to="/conditions#title">Conditions</Link>
                    </li>
                    <li className='txt-hvr1' >
                        <Link to="/politiques#title">Politiques</Link>
                    </li>
                    <li className='txt-hvr1' >
                        <Link to="/contact#title">Contact</Link>
                    </li>
                </ul>
            </div>

            {/* Website links */}
            <div>
                <h3 className='text-lg text-mbg-lightgrey font-medium mb-4'>Follow us</h3>
                <div className="grid justify-start" >
                    <Link target='_blank' className="social-media-ig mb-1" to="https://www.instagram.com/m.i.l.o.s.bg/" >
                        <AiFillInstagram className="text-xl" />
                    </Link>
                    <Link target='_blank' className="social-media-yt mb-1" to="https://www.youtube.com/@Milos-BG" >
                        <AiFillYoutube className="text-xl" />
                    </Link>
                </div> 
            </div>

            {/* Newsletter form */}
            <div>
                <h3 className='text-lg text-mbg-lightgrey font-medium mb-4' >Newsletter</h3>
                
                <form className="flex">
                    <input 
                        type="email"
                        placeholder='Enter your email adress'
                        className='p-1 w-full text-sm bg-mbg-white-details rounded-l-md focus:outline-none focus:ring-2 focus:ring-mbg-rgbalight transition-all'
                        required 
                        />
                    <button 
                        type='submit' 
                        className='bg-mbg-darkgrey border-mbg-black text-mbg-lightgrey px-1 py-1 text-sm rounded-r-md hover:bg-mbg-lightgrey hover:text-mbg-darkgrey transition-all'
                        >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
        {/* Footer Bottom Copyright */}
        <div className='container mx-auto mt-6 px-0 lg:px-0 border-t border-mbg-darkgrey pt-2 py-0 mb-0' >

            <p className='text-mbg-white text-sm tracking-tighter text-center' >
            &copy; {new Date().getFullYear()} Milos BG ®
            </p>
            
        </div>
    </footer>
  )
}

export default Footer
