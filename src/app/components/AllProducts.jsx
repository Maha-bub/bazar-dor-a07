import React from 'react';
import ProductCard from './ProductCard';

const AllProducts = ({ allProducts }) => {
    return (
        <div className='my-10'>
            <div className='flex gap-2 items-center mb-5'> <span className="text-green-600">▼</span>  <h2 className='text-2xl font-bold' >সকল পণ্য</h2></div>

            <ProductCard key={allProducts.id} products={allProducts}></ProductCard>
        </div>
    );
};

export default AllProducts;