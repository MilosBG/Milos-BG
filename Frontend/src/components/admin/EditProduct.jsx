import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../redux/slices/productsSlice';
import { updateProduct } from '../../redux/slices/productsSlice';

const EditProduct = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { selectedProduct, loading, error } = useSelector((state) => state.products);

    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: 0,
        countInStock: 0,
        sku: "",
        category: "",
        sizes: [],
        colors: [],
        images: []
    });

    const [uploading, setUploading] = useState(false); // Image uploading state

    useEffect(() => {
        if (id) {
            dispatch(fetchProductDetails(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (selectedProduct) {
            setProductData(selectedProduct);
        }
    }, [selectedProduct]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProductData((prevData) => ({...prevData, [name]: value}));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);

        try {
            setUploading(true);
            const { data } = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
                formData,
                {
                    headers:  {"Content-Type": "multipart/form-data"},
                }
            );
            setProductData((prevData) => ({
                ...prevData,
                images: [...prevData.images, { url: data.imageUrl, altText: "" }],
            }));
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct({ id, productData }));
        navigate("/admin/products");
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

  return (
    <div className='max-w-5xl mx-auto p-6 imgbxsh rounded-lg bg-mbg-white-details' >
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
     
     
      <form onSubmit={handleSubmit} >

        {/* NAME */}
        <div className="mb-6">
            <label className="block font-semibold mb-2">Product Name</label>
            <input
                value={productData.name}
                onChange={handleChange}
                name='name'
                type="text"
                className='w-full border border-mbg-lightgrey rounded p-2'
                required
            />
        </div>

        {/* DESCRIPTION */}
        <div className="mb-6">
            <label className="block font-semibold mb-2">Description</label>
            <textarea
                required
                rows={4}
                onChange={handleChange}
                value={productData.description}
                name='description'
                className='w-full border border-mbg-lightgrey rounded p-2'
            />
        </div>

        {/* PRICE */}
        <div className="mb-6">
            <label className="block font-semibold mb-2">Price</label>
            <input
                required
                type="number"
                onChange={handleChange}
                value={productData.price}
                name='price'
                className='w-full border border-mbg-lightgrey rounded p-2'
            />
        </div>

        {/* COUNT IN STOCK */}
        <div className="mb-6">
            {/* Count in Stock */}
            <label className="block font-semibold mb-2">Stock</label>
            <input
                required
                type="number"
                onChange={handleChange}
                value={productData.countInStock}
                name='countInStock'
                className='w-full border border-mbg-lightgrey rounded p-2'
            />
        </div>

        {/* SKU */}
        <div className="mb-6">
            <label className="block font-semibold mb-2">SKU</label>
            <input
                required
                type="text"
                onChange={handleChange}
                value={productData.sku}
                name='sku'
                className='w-full border border-mbg-lightgrey rounded p-2'
            />
        </div>

        {/* SIZES */}
        <div className="mb-6">
            {/* (comma-separated) */}
            <label className="block font-semibold mb-2">Sizes</label>
            <input
                required
                type="text"
                onChange={(e) => 
                    setProductData({
                        ...productData,
                        sizes: e.target.value.split(",").map((size) => size.trim()),

                     })
                }
                value={productData.sizes.join(", ")}
                name='sizes'
                className='w-full border border-mbg-lightgrey rounded p-2'
            />
        </div>

        {/* COLORS */}
        <div className="mb-6">
            {/* (comma-separated) */}
            <label className="block font-semibold mb-2">Colors</label>
            <input
                required
                type="text"
                onChange={(e) => 
                    setProductData({
                        ...productData,
                        colors: e.target.value.split(",").map((color) => color.trim()),
                        
                    })
                }
                value={productData.colors.join(", ")}
                name='colors'
                className='w-full border border-mbg-lightgrey rounded p-2'
                />
        </div>

        
        {/* IMAGES UPLOAD */}
        <div className="mb-6">
            <label className="block font-semibold mb-2">Upload Image</label>
            <input
                required
                type="file"
                onChange={handleImageUpload}
            />
            {uploading && <p>Uploading image...</p>}
            <div className="flex gap-4 mt-4">
                {productData.images.map((image, index) => (
                    <div key={index} >
                        <img
                            src={image.url}
                            alt={image.altText || "Product Image"}
                            className='w-20 h-20 object-cover rounded-lg imgbxsh' 
                        />
                    </div>
                ))}
            </div>
        </div>
        <button
            type='submit'
            className='mbg-special-btn'
        >
            Update Product
        </button>

      </form>
    </div>
  )
}

export default EditProduct
