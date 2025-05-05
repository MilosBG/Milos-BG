import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { fetchOrderDetails } from '../redux/slices/orderSlice';

const OrderDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const { orderDetails, loading, error } = useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(fetchOrderDetails(id));
    }, [dispatch, id]);


    if (loading) return <p>Loadind...</p>;
    if (error) return <p>Error : {error}</p>;


  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6' >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase">Order Details</h2>
        {!orderDetails ? (<p>No order details found</p>) : (
            <div className="p-4 sm:p-6 rounded-lg imgbxsh">
                {/* Order Info */}
                <div className="flex flex-col sm:flex-row justify-between mb-8">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold">
                            Order ID : #{orderDetails._id}
                        </h3>
                        <p className="text-mbg-darkgrey">
                            {new Date(orderDetails.createdAt).toLocaleDateString()} 
                            <br />
                            {new Date(orderDetails.createdAt).toLocaleTimeString()}
                            
                        </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
                        <span 
                            className={`${
                                orderDetails.isPaid
                                ? "bg-mbg-white-details-green text-mbg-green"
                                : "bg-mbg-white-details-red text-mbg-red"}
                                px-3 py-1 rounded-md text-xs sm:text-sm font-medium mb-2`}
                        >
                            {orderDetails.isPaid ? "Approuved" : "Pending"}
                        </span>

                        <span 
                            className={`${
                                orderDetails.isDelivered
                                ? "bg-mbg-white-details-green text-mbg-green"
                                : "bg-mbg-white-details-gold text-mbg-gold"}
                                px-3 py-1 rounded-md text-xs sm:text-sm font-medium mb-2`}
                        >
                            {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
                        </span>
                    </div>
                </div>
                {/* Customer, Payment, Shipping Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Payment Information</h4>
                        <p className='text-mbg-darkgrey' >Payment Method : {orderDetails.payementMethod} </p>
                        <p className='text-mbg-darkgrey' >Status : {orderDetails.isPaid ? "Paid" : "Not Paid"} </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-2">Shipping Information</h4>
                        <p className='text-mbg-darkgrey' >Shipping Method : {orderDetails.shippingMethod} </p>
                        <p className='text-mbg-darkgrey' >Shipphing Address : {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`} </p>
                    </div>

                </div>
                {/* Product list */}
                <div className="overflow-x-auto">
                    <h4 className="text-lg font-semibold mb-4">Products</h4>
                    <table className="min-w-full text-mbg-darkgrey mb-4">
                        <thead className="bg-mbg-white-details">
                            <tr>
                                <th className="py-2 px-4">Name</th>
                                <th className="py-2 px-4">Unit Price</th>
                                <th className="py-2 px-4">Quantity</th>
                                <th className="py-2 px-4">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderDetails.orderItems.map((item) => (
                                <tr key={item.productId} className='border-b' >
                                    <td className="py-2 px-4 flex items-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className='w-12 h-12 object-cover rounded-lg mr-4'
                                        />
                                        <Link to={`/product/${item.productId}`} className='text-mbg-darkgrey hover:underline' >
                                            {item.name}
                                        </Link>
                                    </td>
                                    <td className="py-2 px-4">€ {item.price}</td>
                                    <td className="py-2 px-4">{item.quantity}</td>
                                    <td className="py-2 px-4">€ {item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* Back to Orders Link */}
                <Link to="/my-orders" className='text-mbg-lightgrey hover:underline' >
                    Back to my orders
                </Link>

            </div>

        )}
    </div>
  )
}

export default OrderDetails
