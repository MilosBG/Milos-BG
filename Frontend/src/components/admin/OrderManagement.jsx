import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllOrders, updateOrderStatus } from '../../redux/slices/adminOrderSlice';

const OrderManagement = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);
    const { orders, loading, error } = useSelector((state) => state.adminOrders);

    useEffect(() => {
        if (!user || user.role !== "admin") {
            navigate("/");
        } else {
            dispatch(fetchAllOrders());
        }
    }, [navigate, dispatch, user]);



    const handleStatusChange = (orderId, status) => {
      dispatch(updateOrderStatus({ id: orderId, status }))
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

  return (
    <div className='max-w-7xl mx-auto p-6' >
        <h2 className="text-3xl font-bold uppercase mb-6">Order Management</h2>
        <div className="overflow-x-auto imgbxsh rounded-md">
        <table className="min-w-full text-left text-mbg-lightgrey">
            <thead className="bg-mbg-white-details text-xs uppercase text-mbg-darkgrey">
                <tr>
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Actions</th>
                </tr>
            </thead>

            <tbody>
                {orders.length > 0 ? (

                    orders.map((order) => (
                        <tr 
                            key={order._id}
                            className='border-b hover:bg-mbg-rgbadark hover:text-mbg-darkgrey cursor-auto'
                        >
                            <td className="py-4 px-4 font-medium text-mbg-darkgrey whitespace-nowrap">
                                #{order._id}
                            </td>
                            <td className="p-4">{order.user.name}</td>
                            <td className="p-4">€ {order.totalPrice.toFixed(2)}</td>
                            <td className="p-4">
                                <select
                                    value={order.status}
                                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                    className='bg-mbg-rgbalight border border-mbg-rgbadark text-mbg-darkgrey text-sm rounded focus:border-mbg-green block p-2.5'
                                >
                                    <option value="Processing">Processing</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            </td>
                            <td className="p-4">
                                <button
                                onClick={() => handleStatusChange(order._id, "Delivered")}
                                className='bg-mbg-white-details-green text-mbg-white-details px-4 py-2 rounded hover:bg-mbg-green'
                                >
                                    Order Delivered
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5}  className='p-4 text-center  text-mbg-red'>
                            No Orders found
                        </td>
                    </tr>
                )}
            </tbody>

        </table>
      </div>


    </div>
  )
}

export default OrderManagement
