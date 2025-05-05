import React, { useEffect } from 'react';
import Show from '../components/layout/Show';
import ProductGrid from '../components/products/ProductGrid';
import FeaturesSection from '../components/products/FeaturesSection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByFilters } from '../redux/slices/productsSlice';



const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    // Fetch products for a specific category
    dispatch(
      fetchProductsByFilters({
        category: "Top", ///// A MODIFIER SI BESOIN
        limit: 6,
      })
    );

  }, [dispatch]);
  
  return (
    <div>
      <Show />

      {/* Outfits */}

      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold mb-4 mt-24">Outfits</h2>
        <ProductGrid products={products} loading={loading} error={error}  />
      </div>

      <FeaturesSection />
    </div>
  )
}

export default Home
