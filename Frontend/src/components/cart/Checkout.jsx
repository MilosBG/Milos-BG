import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PayPalButton from './PayPalButton';
import { useDispatch, useSelector } from 'react-redux';
import { createCheckout } from '../../redux/slices/checkoutSlice';
import axios from 'axios';


const Checkout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart, loading, error } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);


    const [checkoutId, setCheckoutId] = useState(null);
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    });


    // Ensure cart is loaded before proceeding 
    useEffect(() => {
        if (!cart || !cart.products || cart.products.length === 0) {
            navigate("/");
        }
    }, [cart, navigate]);

const handleCreateCheckout = async (e) => {
    e.preventDefault();
    if (cart && cart.products.length > 0) {
        const res = await dispatch(
            createCheckout({
            checkoutItems: cart.products,
            shippingAddress,
            paymentMethod: "Paypal",
            totalPrice: cart.totalPrice,
            })
        );
        if (res.payload && res.payload._id) {
            setCheckoutId(res.payload._id); // Set checkout ID if checkout was successful
        }
    }
};

const handlePaymentSuccess = async (details) => {
    try {
        const response = await axios.put(
            `${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/pay`,
            { paymentStatus: "paid", paymentDetails: details },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                },
            }
        );
            await handleFinalizeCheckout(checkoutId); // Finalize checkout if payment is successful

    } catch (error) {
        console.error(error);
    }
};

const handleFinalizeCheckout = async (checkoutId) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL
            }/api/checkout/${checkoutId}/finalize`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                },
            }
        );
        navigate("/order-confirmation");
    } catch (error) {
        console.error(error);
    }
};

if (loading) return <p>Loading cart...</p>;
if (error) return <p>Error : {error}</p>;
if (!cart || !cart.products || cart.products.length === 0) {
    return <p>Empty basket</p>;
}

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter' >
      {/* Left Section */}
      <div className="bg-mbg-white rounded-lg p-6 imgbxsh">
        <h2 className='text-2xl uppercase font-bold mb-6' >Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
            <h3 className="text-lg font-medium mb-4">Contact Details</h3>
            <div className="mb-4">
            <label className="block text-mbg-darkgrey">Email</label>
            <input 
                type="email"
                value={user? user.email : ""}
                className='w-full p-2 border rounded'
                disabled
            />
            </div>
            <h3 className="text-lg font-medium mb-4">Delivery</h3>
            <div className="mb-4 grid grid-cols-2 gap-4">


                <div>
                    <label className="block text-mbg-darkgrey">First Name</label>
                    <input 
                        type="text"
                        value={shippingAddress.firstName}
                        onChange={(e) => 
                            setShippingAddress({
                                ...shippingAddress,
                                firstName: e.target.value,
                            })
                        }
                        required
                        className='w-full p-2 border rounded'
                    />
                </div>


                <div>
                    <label className="block text-mbg-darkgrey">Last Name</label>
                    <input 
                        type="text"
                        value={shippingAddress.lastName}
                        onChange={(e) => 
                            setShippingAddress({
                                ...shippingAddress,
                                lastName: e.target.value,
                            })
                        }
                        required
                        className='w-full p-2 border rounded'
                    />
                </div>

            </div>

            
                <div className="mb-4">
                    <label className="block text-mbg-darkgrey">Address</label>
                    <input 
                        type="text"
                        value={shippingAddress.address}
                        className='w-full p-2 border rounded'
                        required
                        onChange={(e) => 
                            setShippingAddress({
                                ...shippingAddress,
                                address: e.target.value,
                            })
                        }
                    />
                </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
                
                
                <div>
                    <label className="block text-mbg-darkgrey">City </label>
                    <input 
                        type="text"
                        value={shippingAddress.city}
                        onChange={(e) => 
                            setShippingAddress({
                                ...shippingAddress,
                                city: e.target.value,
                            })
                        }
                        required
                        className='w-full p-2 border rounded'
                    />
                </div>
                
                
                <div>
                    <label className="block text-mbg-darkgrey">Postal Code</label>
                    <input 
                        type="text"
                        value={shippingAddress.postalCode}
                        onChange={(e) => 
                            setShippingAddress({
                                ...shippingAddress,
                                postalCode: e.target.value,
                            })
                        }
                        required
                        className='w-full p-2 border rounded'
                    />
                </div>
                
            </div>
                
                <div>
                    <label className="block text-mbg-darkgrey">Country</label>
                    <input 
                        type="text"
                        value={shippingAddress.country}
                        onChange={(e) => 
                            setShippingAddress({
                                ...shippingAddress,
                                country: e.target.value,
                            })
                        }
                        required
                        className='w-full p-2 border rounded'
                    />
                </div>


                <div>
                    <label className="block text-mbg-darkgrey">Phone</label>
                    <input 
                        type="tel"
                        value={shippingAddress.phone}
                        onChange={(e) => 
                            setShippingAddress({
                                ...shippingAddress,
                                phone: e.target.value,
                            })
                        }
                        required
                        className='w-full p-2 border rounded'
                    />
                </div>

                <div className="mt-6">
                    {!checkoutId ? (
                        <button
                            type="submit"
                            className='mbg-special-btn'
                        >
                            Payment
                        </button>
                    ) : (
                        <div>
                            <h3 className="text-lg font-medium mb-4">Proceed to Payment</h3>
                            <PayPalButton 
                                amount={cart.totalPrice}
                                onSuccess={handlePaymentSuccess}
                                onError={(err) => alert("Payment failed, try again")}
                            />
                        </div>
                    )}
                </div>

        </form>
      </div>
      {/* Right Section */}
      <div className="bg-mbg-white-details rounded-lg p-6">
        <h3 className='text-lg font-medium mb-4' >Order Summary</h3>
        <div className='border-t py-4 mb-4' >
            {cart.products.map((product, index) => (
                <div key={index} className='flex items-start justify-between py-2 border-b' >
                    <div className="flex items-start">
                        <img
                            src={product.image}
                            alt={product.name}
                            className='w-20 h-24 object-cover mr-4 rounded-lg'
                        />
                        <div>
                            <h3 className="text-md text-mbg-darkgrey">{product.name}</h3>
                            <p className="text-mbg-lightgrey">Size : {product.size}</p>
                            <p className="text-mbg-lightgrey">Color : {product.color}</p>
                        </div>
                    </div>
                            <p className="text-lg text-mbg-lightgrey font-medium">€ {product.price?.toLocaleString()}</p>
                </div>
            ))}
        </div>
                <div className="flex justify-between items-center text-lg mb-4">
                    <p className='text-lg font-medium mb-4' >Subtotal</p>
                    <p className="text-xl text-mbg-darkgrey font-medium">€ {cart.totalPrice?.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center text-lg">
                    <p className='text-lg font-medium mb-4' >Shipping</p>
                    <p className='text-lg text-mbg-darkgrey font-medium mb-4' >Free</p>
                </div>
                <div className="flex justify-between items-center text-lg mt-4 border-t">
                    <p className='text-lg font-bold mb-4 uppercase' >Total</p>
                    <p className='text-2xl font-medium mb-4' >€ {cart.totalPrice?.toLocaleString()} </p>
                </div>
      </div>
    </div>
  )
}

export default Checkout
