import React, { useEffect } from 'react'
import { LuClock2, LuMessageSquare, LuPhone, LuSquareArrowUp } from 'react-icons/lu';
import { useLocation } from 'react-router-dom';

const Contact = () => {

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
      <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase" id='title' >Contact</h2>
      <div className="bg-mbg-white-details rounded-lg p-6 mb-6 imgbxsh" >
      <div>
                  <h3 className="text-xl mb-4 font-semibold">Get in touch with us</h3>
                  <div>
                    <ul className="p-0">
                      <li className="mb-3 flex gap-2 items-center darkgrey-color" >
                        <div style={{
                              background: "var(--mbg-rgbalight)",
                              width: "40px",
                              height: "40px",
                              borderRadius: ".2rem",
                              display: "grid",
                              placeItems: "center"}}>
                                  <LuClock2/>
                        </div>
                        <p className="mb-0" >Monday - Friday 10 AM - 8 PM</p>
                      </li>


                      <li className="mb-3 flex gap-2 items-center darkgrey-color" >
                        <div style={{
                              background: "var(--mbg-rgbalight)",
                              width: "40px",
                              height: "40px",
                              borderRadius: ".2rem",
                              display: "grid",
                              placeItems: "center"}}>
                                  <LuPhone />
                        </div>
                        <a href="tel:+91 3958045623" >+91 3958045623</a>
                      </li>


                      <li className="mb-3 flex gap-2 items-center darkgrey-color" >
                        <div style={{
                              background: "var(--mbg-rgbalight)",
                              width: "40px",
                              height: "40px",
                              borderRadius: ".2rem",
                              display: "grid",
                              placeItems: "center"}}>
                                  <LuMessageSquare />
                        </div>
                        <a href="contact@milos-bg.com" >contact@milos-bg.com</a>
                      </li>


                    </ul>
                  </div>
                </div>
      </div>

    </div>
  )
}

export default Contact
