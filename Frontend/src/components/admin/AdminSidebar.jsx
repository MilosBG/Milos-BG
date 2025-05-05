import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { LuSquareUser, LuGrid2X2, LuMonitorOff } from 'react-icons/lu';
import { GiBasketballBasket } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { clearCart } from '../../redux/slices/cartSlice';

const AdminSidebar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearCart());
        navigate("/");
    };

  return (
    <div className='p-6' >
        <div className="mb-6">
            <Link to="/admin">
                <img src={assets.MBG} alt="Milos BG" />
            </Link>
        </div>
        <nav className='flex flex-col space-y-2' >

            {/* USERS */}
            <NavLink
                to="/admin/users"
                className={({isActive}) =>
                    isActive
                    ? "bg-mbg-green text-mbg-white-details-green py-3 px-4 rounded-lg flex items-center space-x-2"
                    : "text-mbg-darkgrey hover:bg-mbg-darkgrey hover:text-mbg-lightgrey py-3 px-4 rounded-lg flex items-center space-x-2"}
            >
                <LuSquareUser/>
                <span>Users</span>
            </NavLink>

            {/* PRODUCTS */}
            <NavLink
                to="/admin/products"
                className={({isActive}) =>
                    isActive
                    ? "bg-mbg-green text-mbg-white-details-green py-3 px-4 rounded-lg flex items-center space-x-2"
                    : "text-mbg-darkgrey hover:bg-mbg-darkgrey hover:text-mbg-lightgrey py-3 px-4 rounded-lg flex items-center space-x-2"}
            >
                <LuGrid2X2/>
                <span>Products</span>
            </NavLink>

            {/* ORDERS */}
            <NavLink
                to="/admin/orders"
                className={({isActive}) =>
                    isActive
                    ? "bg-mbg-green text-mbg-white-details-green py-3 px-4 rounded-lg flex items-center space-x-2"
                    : "text-mbg-darkgrey hover:bg-mbg-darkgrey hover:text-mbg-lightgrey py-3 px-4 rounded-lg flex items-center space-x-2"}
            >
                <LuGrid2X2/>
                <span>Orders</span>
            </NavLink>

            {/* SHOP */}
            <NavLink
                to="/"
                className={({isActive}) =>
                    isActive
                    ? "bg-mbg-green text-mbg-white-details-green py-3 px-4 rounded-lg flex items-center space-x-2"
                    : "text-mbg-darkgrey hover:bg-mbg-white-details hover:text-mbg-gold py-3 px-4 rounded-lg flex items-center space-x-2"}
            >
                <GiBasketballBasket className='text-2xl'/>
                <span>Shop</span>
            </NavLink>

        </nav>
        <div className="mt-6">
            <button
                onClick={handleLogout} 
                className="mbg-back-btn flex items-center justify-center space-x-2"
            >
                <LuMonitorOff/>
                <span>Logout</span>
            </button>
        </div>
    </div>
  )
}

export default AdminSidebar
