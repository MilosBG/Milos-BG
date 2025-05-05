import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, deleteUser, fetchUsers, updateUser } from '../../redux/slices/adminSlice';

const UserManagement = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);
    const { users, loading, error } = useSelector((state) => state.admin);

    useEffect(() => {
        if (user && user.role !== "admin") {
            navigate("/");
        }
    }, [user, navigate]);

    useEffect(() => {
        if (user && user.role === "admin") {
            dispatch(fetchUsers());
        }
    }, [user, dispatch]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer", //Default role
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(formData));

        // Reset the form after submission
        setFormData({
            name: "",
            email: "",
            password: "",
            role: "customer",
        });
    };

    const handleRoleChange = (userId, newRole) => {
        dispatch(updateUser({ id: userId, role: newRole }));
    };

    const handleDeleteUser = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(deleteUser(userId));
        }
    };

  return (
    <div className='max-w-7xl mx-auto p-6' >
      <h2 className="text-3xl font-bold uppercase mb-6">User Management</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error}</p>}
      {/* Add New User Form */}
      <div className="p-6 rounded-lg imgbxsh bg-mbg-white-details mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form onSubmit={handleSubmit} >

            {/* NAME */}
            <div className="mb-4">
                <label className="block text-mbg-darkgrey">Name</label>
                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full p-2 border border-mbg-lightgrey rounded'
                    required
                />
            </div>

            {/* EMAIL */}
            <div className="mb-4">
                <label className="block text-mbg-darkgrey">Email</label>
                <input
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full p-2 border border-mbg-lightgrey rounded'
                    required
                />
            </div>

            {/* PASSWORD */}
            <div className="mb-4">
                <label className="block text-mbg-darkgrey">Password</label>
                <input
                    type="password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    className='w-full p-2 border border-mbg-lightgrey rounded'
                    required
                />
            </div>

            {/* ROLE */}
            <div className="mb-4">
                <label className="block text-mbg-darkgrey">Role</label>
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className='w-full p-2 border border-mbg-lightgrey rounded'
                >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            {/* BUTTON */}
            <button
                className='mbg-main-btn'
                type='submit'
             >
                Add User
             </button>
        </form>
      </div>

      {/* User List Management */}
      <div className="overflow-x-auto imgbxsh rounded-md">
        <table className="min-w-full text-left text-mbg-lightgrey">
            <thead className="bg-mbg-white-details text-xs uppercase text-mbg-darkgrey">
                <tr>
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Role</th>
                    <th className="py-3 px-4">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                  <tr key={user._id} className='border-b hover:bg-mbg-rgbadark hover:text-mbg-darkgrey' >
                    <td className="p-4 font-medium text-mbg-darkgrey whitespace-nowrap">
                        {user.name}
                    </td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">
                        <select
                            value={user.role}
                            onChange={(e) => handleRoleChange(user._id, e.target.value)}
                            className='bg-mbg-rgbalight border border-mbg-rgbadark text-mbg-darkgrey text-sm rounded focus:border-mbg-green block p-2.5'
                        >
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </td>
                    <td className="p-4">
                        <button
                            onClick={() => handleDeleteUser(user._id)}
                            className='bg-mbg-white-details-red text-mbg-white-details px-4 py-2 rounded hover:bg-mbg-red'
                        >
                            Delete
                        </button>
                    </td>
                  </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserManagement
