import React from 'react';
import { LuX } from 'react-icons/lu';
import CartContents from '../cart/CartContents';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {

    const navigate = useNavigate();
    const { user, guestId } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);
    const userId = user ? user._id : null;

    const handleCheckout = () => {
        toggleCartDrawer();
        if (!user) {
            navigate("/login?redirect=checkout");
        } else {
            navigate("/checkout");
        }
    };

  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[24rem] h-full bg-mbg-white shadow-lg transform transition-transform duration-300 flex flex-col z-104 ${drawerOpen ? "translate-x-0" : "translate-x-full" }`}>
        {/* Close Button */}
        <div className='flex justify-end p-4' >
            <button onClick={toggleCartDrawer}>
                <LuX className='h-6 w-6 text-mbg-darkgrey hover:text-mbg-lightgrey' />
            </button>
        </div>
        {/* Cart contents with scrollable area */}
        <div className='flex-grow p-4 overflow-y-auto' >
            <h2 className='text-xl font-medium mb-4' >Basket</h2>
            { cart && cart?.products?.length > 0 ? (<CartContents cart={cart} userId={userId} guestId={guestId} />) : (<p className='text-mbg-lightgrey'>Empty basket</p>)}
        </div>
        {/* Checkout button fixed at the bottom */}
        <div className='p-4 bg-mbg-white sticky bottom-0' >
            { cart && cart?.products?.length > 0 && (
            <>
                <button 
                    onClick={handleCheckout}
                    className='mbg-special-btn'
                >
                    CHECKOUT
                </button>
                <p className='text-sm tracking-tighter text-mbg-lightgrey mt-2 text-center' >Shipping and taxes calculated at checkout</p>
            </>

            )}
        </div>
    </div>
  )
}

export default CartDrawer
