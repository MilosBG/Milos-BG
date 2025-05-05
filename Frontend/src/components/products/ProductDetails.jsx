import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { addToCart } from '../../redux/slices/cartSlice';
import { fetchProductDetails } from '../../redux/slices/productsSlice';




const ProductDetails = ({ productId }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedProduct, loading, error } = useSelector((state) => state.products);
    const { user, guestId } = useSelector((state) => state.auth);
    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);

    const productFetchId = productId || id;

    useEffect(() => {
      if (productFetchId) {
        dispatch(fetchProductDetails(productFetchId));
      }
    }, [dispatch, productFetchId]);

    useEffect(() => {
      if(selectedProduct?.images?.length > 0) {
        setMainImage(selectedProduct.images[0].url);
      }
    }, [selectedProduct]);

    const handleQuantityChange = (action) => {
      if (action === "plus") setQuantity((prev) => prev + 1);
      if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
    }

    const handleAddToCart = () => {
      if (!selectedSize || !selectedColor) {
        toast.error("Please select a size and color before taking your shot.", {
          duration: 2000,
        });
        return;
      }

    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        size: selectedSize,
        color: selectedColor,
        guestId,
        userId: user?._id,
      })
    )
    .then(() => {
      toast.success("Nice Shot !", {
        duration: 2000,
      });
    })
  };
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error : {error}</p>;
    }

  return (
    <div className='p-6 py-0 mb-4' >
      { selectedProduct && (
          <div className='max-w-6xl mx-auto bg-mbg-white p-8 rounded-lg'>
            <div className='flex flex-col md:flex-row' >
                {/* Left Thumbnails */}
                <div className='hidden md:flex flex-col space-y-4 mr-6' >
                  {selectedProduct.images.map((image, index) => (
                    <img
                      key={index} 
                      src={image.url} 
                      alt={image.altText || `Thumbnail ${index}`}
                      className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-2 border-mbg-darkgrey" : "border-mbg-lightgrey"}`}
                      onClick={() => setMainImage(image.url)}
                    />
                  ))}
                </div>
                {/* Main Image */}
                <div className='md:w-1/2'>
                  <div className='mb-4'>
                    <img
                      src={mainImage}
                      alt="Main Product"
                      className='w-full h-auto object-cover rounded-lg imgbxsh'
                      />
                  </div>
                </div>
                {/* Mobile Thumbnail */}
                <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4' >
                  {selectedProduct.images.map((image, index) => (
                    <img
                    key={index} 
                    src={image.url} 
                    alt={image.altText || `Thumbnail ${index}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-2 border-mbg-darkgrey" : "border-mbg-lightgrey"}`}
                    onClick={() => setMainImage(image.url)}
                    />
                  ))}
                </div>
                {/* Right Side */}
                <div className='md:w-1/2 md:ml-10' >
                  <h1 className='text-2xl md:text-3xl font-semibold mb-2' >
                    {selectedProduct.name}
                  </h1>

                  <p className='text-xl font-medium text-mbg-green mb-2' >
                   € {selectedProduct.price}
                  </p>
                  
                  <p className='text-mbg-darkgrey mb-4' >
                    {selectedProduct.description}
                  </p>

                  <div className='mb-4' >
                    <p className='text-mbg-darkgrey' >Color :</p>
                    <div className='flex gap-2 mt-2' >
                      {selectedProduct.colors.map((color) => (
                        <button 
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-2 border-mbg-darkgrey" : "border-mbg-lightgrey"}`}
                          style={{
                            backgroundColor: color.toLocaleLowerCase(),
                            filter: "brightness(1)"

                          }}
                        >
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className='mb-4' >
                    <p className="text-mbg-darkgrey " >Size : </p>
                    <Link target='_blank' to='/sizes-guide'><p className="text-mbg-lightgrey text-sm underline" >guide</p></Link>
                    <div className="flex gap-2 mt-2">
                      {selectedProduct.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-3 py-1 font-semibold rounded border ${selectedSize === size ? "bg-mbg-black text-mbg-lightgrey" : "border-mbg-lightgrey"}`}
                          >
                            {size}
                          </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-mbg-darkgrey">Quantity :</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <button onClick={() => handleQuantityChange("minus")} className="px-2 py-1  bg-mbg-lightgrey rounded text-lg text-mbg-darkgrey">
                        -
                      </button>
                      <span className='text-lg' >{quantity}</span>
                      <button onClick={() => handleQuantityChange("plus")} className="px-2 py-1  bg-mbg-lightgrey rounded text-lg text-mbg-darkgrey">
                        +
                      </button>
                    </div>
                  </div>

                  <button onClick={handleAddToCart} className="mbg-special-btn" style={{transform: "translateY(16px)"}} >Shoot</button>

                  <div className="mt-10 text-mbg-darkgrey">
                    <h3 className="text-xl font-bold mb-4">Characteristics :</h3>
                    <table className="w-full text-left text-sm text-mbg-darkgrey">
                      <tbody>
                        <tr>
                          <td className="py-1">Brand</td>
                          <td className="py-1">{selectedProduct.brand}</td>
                        </tr>
                        <tr>
                          <td className="py-1">Material</td>
                          <td className="py-1">{selectedProduct.material}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
          </div>
      )}
    </div>
  )
}

export default ProductDetails
