import React, { useEffect, useRef, useState } from 'react'
import { LuGripVertical } from 'react-icons/lu';
import FilterSidebar from '../components/products/FilterSidebar';
import ProductGrid from '../components/products/ProductGrid';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByFilters } from '../redux/slices/productsSlice';

const Outfits = () => {
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
    const queryParams = Object.fromEntries([...searchParams]);

    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
      dispatch(fetchProductsByFilters({ category, ...queryParams }));
    }, [dispatch, category, searchParams]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (e) => {
        // Close sidebar if clicked outside
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks
        document.addEventListener("mousedown", handleClickOutside);
        // Clean event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

  return (
    <div className='flex flex-col lg:flex-row' >
      {/* Mobile Filter button */}
      <button onClick={toggleSidebar} className="lg:hidden border bg-mbg-white-details p-2 flex justify-start items-center">
        <LuGripVertical className='mr-2 h-7 text-2xl'/>
      </button>

      {/* Filter Sidebar */}
    <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 shadow-lg bg-mbg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`} >
        <FilterSidebar/>
    </div>
    <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase font-black mb-4">All Outfits</h2>
        
        {/* Product Grid */}
        <ProductGrid products={products} loading={loading} error={error} />
    </div>
        
    </div>
  )
}

export default Outfits
