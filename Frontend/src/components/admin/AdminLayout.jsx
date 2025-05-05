import React, { useState } from 'react'
import { LuGripVertical } from 'react-icons/lu';
import AdminSidebar from './AdminSidebar';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {

const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
};

  return (
    <div className='min-h-screen flex flex-col md:flex-row relative' >
        {/* Mobile Toggle Button */}
        <div className="flex md:hidden p-4 bg-mbg-black z-20">
                <button onClick={toggleSidebar}>
                    <LuGripVertical className='text-mbg-lightgrey' size={24}/>
                </button>
                <Link to="/admin">
                <h1 className="ml-4 text-xl font-extrabold uppercase cursor-pointer text-mbg-white">Milos BG</h1>
                </Link>
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
            <div
                onClick={toggleSidebar}
                className="fixed inset-0 z-10 bg-mbg-black bg-opacity-50 md:hidden"
            >

            </div>
        )}

        {/* Sidebar */}
        <div
            className={`bg-mbg-black w-64 min-h-screen text-mbg-lightgrey absolute md:relative transform ${isSidebarOpen
            ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}
        >
            {/* Sidebar */}
            <AdminSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow p-6 overflow-auto">
            <Outlet />
        </div>


    </div>
  )
}

export default AdminLayout
