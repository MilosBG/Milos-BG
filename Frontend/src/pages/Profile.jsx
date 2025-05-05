import React, { useEffect } from 'react';
import MyOrdersPage from './MyOrdersPage';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/slices/cartSlice';
import { logout } from '../redux/slices/authSlice';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login");
  };


  return (
    <div className='min-h-screen flex flex-col' >
      <div className="flex-grow containermx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {/* Left Section */}
            <div className="w-full md:w-1/3 lg:w-1/4 imgbxsh bg-mbg-white-details rounded-lg p-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">{user?.name}</h1>
                <p className="text-lg text-mbg-darkgrey mb-4">{user?.email}</p>
                <button onClick={handleLogout} className='mbg-back-btn' >Logout</button>
            </div>
            {/* Right Section: Orders table */}
            <div className="w-full md:w-2/3 lg:w-3/4">
                <MyOrdersPage/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
