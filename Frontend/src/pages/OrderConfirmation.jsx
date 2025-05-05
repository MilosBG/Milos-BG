import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/slices/cartSlice';


const OrderConfirmation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { checkout } = useSelector((state) => state.checkout);


    // Clear the cart when the order is confirmed
    useEffect(() => {
        if (checkout && checkout._id) {
            dispatch(clearCart());
            localStorage.removeItem("cart");
        } else {
            navigate("/my-orders");
        }
    }, [checkout, dispatch, navigate]);

    const calculateEstimatedDelivery = (createdAt) => {
        const orderDate =new Date(createdAt);
        orderDate.setDate(orderDate.getDate() + 10); // Add 10 days to the order date
        return orderDate.toLocaleDateString();
    }

  return (
    <div className='max-w-4xl mx-auto p-6 bg-mbg-white'>
      <h1 className="text-3xl font-bold text-center text-mbg-green mb-8">
        Order completed successfully!
      </h1>

    {checkout && (
        <div className="p-6 rounded-lg imgbxsh">
            <div className="flex justify-between mb-20">
                {/* Order Id and date */}
                <div>
                    <h2 className="text-xl font-bold">
                        Order ID : {checkout._id}
                    </h2>
                    <p className="text-mbg-lightgrey">
                        Order date : {new Date(checkout.createdAt).toLocaleDateString()}
                    </p>
                </div>
                {/* Estimated Delivery */}
                <div>
                    <p className="text-mbg-green text-sm">
                        Estimated Delivery : {calculateEstimatedDelivery(checkout.createdAt)}
                    </p>
                </div>
            </div>
                {/* Ordered Items */}
                <div className="mb-20">
                    {checkout.checkoutItems.map((item) => (
                        <div key={item.productId} className='flex items-center mb-4' >
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-16 h-16 object-cover rounded-lg mr-4'
                            />
                            <div>
                                <h4 className="text-md font-semibold">{item.name}</h4>
                                <p className="text-sm text-mbg-lightgrey">
                                    Color : {item.color}
                                    <br />
                                    Size : {item.size}
                                </p>
                            </div>
                            <div className="ml-auto text-right">
                                <p className="text-md">€ {item.price}</p>
                                <p className="text-sm text-mbg-lightgrey">Qantity : {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Payment and Delivery Info */}
                <div className="grid grid-cols-2 gap-8">
                    {/* Payment Info */}
                    <div>
                        <h4 className="text-lg font-medium mb-2">Payment</h4>
                        <p className="text-mbg-lightgrey text-sm">PayPal</p>
                    </div>

                    {/* Delivery Info */}
                    <div>
                        <h4 className="text-lg font-medium mb-2">Delivery</h4>
                        <p className="text-mbg-lightgrey text-sm">{checkout.shippingAddress.address}</p>
                        <p className="text-mbg-darkgrey">{checkout.shippingAddress.city}, {" "} {checkout.shippingAddress.country}</p>
                    </div>

                </div>
        </div>
    )}

    </div>
  )
}

export default OrderConfirmation
