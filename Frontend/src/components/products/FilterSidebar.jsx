import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        category: "",
        color: "",
        size: [],
        minPrice: 0,
        maxPrice: 100,
    });

    const [priceRange, setPriceRange] = useState([0, 100]);

    const categories = ["Top", "Bottom", "Accessory"];

    const colors = [
        "Black",
        "Blank",
        "Grey",
    ];
    
    const sizes = [
        "M",
        "L",
        "S",
    ];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        // {category: 'Top', maxPrice: 100} => params.category

        setFilters({
            category: params.category || "",
            color: params.color || "",
            size: params.size? params.size.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100,
            
        });
        setPriceRange([0, params.maxPrice || 100])
    }, [searchParams]);
    
    const handleFilterChange = (e) => {
        const {name, value, checked, type} = e.target;
        let newFilters = {...filters};

        if (type === "checkbox") {
            if(checked) {
                newFilters[name] = [...(newFilters[name] || []), value];
            } else {
                newFilters[name] = newFilters[name].filter((item) => item !== value);
            }
        } else {
            newFilters[name] = value;
        }
        setFilters(newFilters);
        updateURLParams(newFilters);
    };

    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams();
        // {category: "Top Wear", size: ["M", "L", "S"]}
        Object.keys(newFilters).forEach((key) => {
            if(Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
                params.append(key, newFilters[key].join(","));
            } else if (newFilters[key]) {
                params.append(key, newFilters[key]);
            }
        });
        setSearchParams(params);
        navigate(`?${params.toString()}`);
    }

    const handlePriceChange = (e) => {
        const newPrice = e.target.value;
        setPriceRange([0, newPrice])
        const newFilters = {...filters, minPrice: 0, maxPrice: newPrice };
        setFilters(filters);
        updateURLParams(newFilters);
    }

  return (
    <div className='p-4' style={{minHeight: "640px"}} >
      <h3 className="text-xl font-semibold text-mbg-darkgrey mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-mbg-lightgrey font-medium mb-2">Category</label>
        {categories.map((category) => (
            <div key={category} className="flex items-center mb-1">
                <input
                    type="radio"
                    name='category'
                    value={category}
                    onChange={handleFilterChange}
                    checked={filters.category === category}
                    className='mr-2 h-5 w-5 accent-mbg-black scale-105'
                />
                <span className="text-mbg-darkgrey text-sm">{category}</span>
            </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
      <label className="block text-mbg-lightgrey font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
                <button 
                    key={color}
                    name='color'
                    value={color}
                    onClick={handleFilterChange}
                    style={{backgroundColor: color.toLocaleLowerCase()}}
                    className={`w-6 h-6 rounded-md border border-mbg-darkgrey cursor-pointer transition hover:scale-105 ${filters.color === color ? "ring-1 ring-mbg-black" : ""}`}
                    >
                    </button>
            ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
      <label className="block text-mbg-lightgrey font-medium mb-2">Size</label>
            {sizes.map((size) => (
                <div key={size} className="flex items-center mb-1">
                    <input 
                        type="checkbox"
                        name='size'
                        value={size}
                        checked={filters.size.includes(size)}
                        onChange={handleFilterChange}
                        className='mr-2 h-5 w-5 accent-mbg-black scale-105'
                    />
                    <span className="text-mbg-darkgrey font-semibold text-sm">{size}</span>
                </div>
            ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
      <label className="block text-mbg-lightgrey font-medium mb-2">Price Range</label>
            <input
                type="range"
                name='priceRange'
                min={0} 
                max={100}
                value={priceRange[1]}
                onChange={handlePriceChange}
                className='w-full h-2 accent-mbg-black'
            />
            <div className="flex justify-between text-mbg-darkgrey mt-2">
                <span className="">€0</span>
                <span className="">€{priceRange[1]}</span>
            </div>
      </div>
    </div>
  )
}

export default FilterSidebar
