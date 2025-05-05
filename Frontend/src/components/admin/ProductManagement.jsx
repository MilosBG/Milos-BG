import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct, fetchAdminProducts } from '../../redux/slices/adminProductSlice';

const ProductManagement = () => {

    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.adminProducts);

    useEffect(() =>  {
        dispatch(fetchAdminProducts());
    }, [dispatch]);

    const handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this product?")) {
            dispatch(deleteProduct(id));
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

  return (
    <div className='max-w-7xl mx-auto p-6' >
      <h2 className="text-3xl font-bold uppercase mb-6">Product Management</h2>
      <div className="overflow-x-auto imgbxsh rounded-md">
        <table className="min-w-full text-left text-mbg-lightgrey">
            <thead className="bg-mbg-white-details text-xs uppercase text-mbg-darkgrey">
                <tr>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">SKU</th>
                    <th className="py-3 px-4">Actions</th>
                </tr>
            </thead>

            <tbody>
                {products.length > 0 ? products.map((products) => (
                    <tr 
                        className='border-b hover:bg-mbg-rgbadark hover:text-mbg-darkgrey cursor-pointer'
                        key={products._id}
                    >
                        <td className="p-4 font-medium text-mbg-darkgrey whitespace-nowrap" >
                            {products.name}
                        </td>
                        <td className="p-4">€ {products.price}</td>
                        <td className="p-4">{products.sku}</td>
                        <td className="p-4">
                            <Link
                                className='bg-mbg-white-details-gold text-mbg-white-details px-2 py-1 rounded mr-2 hover:bg-mbg-gold'
                                to={`/admin/products/${products._id}/edit`}
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => handleDelete(products._id)}
                                className='bg-mbg-white-details-red text-mbg-white-details px-4 py-1 rounded hover:bg-mbg-red'
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td
                            colSpan={4}
                            className='p-4 text-center  text-mbg-red'
                        >
                            No Products found
                        </td>
                    </tr>
                )}
            </tbody>

        </table>
      </div>
    </div>
  )
}

export default ProductManagement
