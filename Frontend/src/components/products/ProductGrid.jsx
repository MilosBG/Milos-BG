import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({ products, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error}</p>;
  }
  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24 p-2' >
      {products.map((product, index) => (
        <Link
        key={index}
        to={`/product/${product._id}`}
        className='block' 
        >
            <div className="bg-mbg-black p-0 rounded-lg imgbxsh">
                <div className="w-full sm:h-full md:h-full lg:h-full mb-4">
                    <img
                        src={product.images[0].url}
                        alt={product.images[0].alText || product.name}
                        className='w-full lg:h-full object-cover rounded-lg rounded-b-none'
                    />
                </div>
                <div className='p-2 pb-4 pt-1 px-4'>
                  <h3 className="text-md text-mbg-lightgrey font-semibold mb-2">{product.name}</h3>
                  <p className="text-mbg-green font-medium text-sm tracking-tighter">
                      € {product.price}
                  </p>
                </div>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductGrid
