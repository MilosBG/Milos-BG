import React from 'react'
import { LuCreditCard, LuTruck, LuMessageSquare } from "react-icons/lu"

const FeaturesSection = () => {
  return (
    <section className='mb-2 mt-0 pt-0 p-4 bg-mbg-white-details'>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-0">
                    <LuTruck className='text-xl text-mbg-black' />
                </div>
                <h4 className='tracking-tighter font-semibold mb-2 uppercase text-mbg-darkgrey' >Free shipping</h4>
                <p className='text-mbg-lightgrey text-sm tracking-tighter' >
                    On all orders over € 100
                </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-0">
                    <LuCreditCard className='text-xl text-mbg-black' />
                </div>
                <h4 className='tracking-tighter font-semibold mb-2 uppercase text-mbg-darkgrey' >Secure checkout</h4>
                <p className='text-mbg-lightgrey text-sm tracking-tighter' >
                    Secured checkout process with PayPal
                </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-0">
                    <LuMessageSquare className='text-xl text-mbg-black' />
                </div>
                <h4 className='tracking-tighter font-semibold mb-2 uppercase text-mbg-darkgrey' >Support</h4>
                <p className='text-mbg-lightgrey text-sm tracking-tighter' >
                    contact us every time you need help
                </p>
            </div>
        </div>
      
    </section>
  )
}

export default FeaturesSection
