import React from 'react';
import ProductCard from './ProductCard';

const PriceIncreaseProducts = ({ topFiveProducts }) => {
   
    return (
        <div className='my-10'>

            <div className='flex gap-2 items-center mb-5'><span className="text-red-600">▲</span> <h2 className='text-2xl font-bold '>আজ দাম বেড়েছে</h2></div>
            <ProductCard key={topFiveProducts.id} products={topFiveProducts}></ProductCard>
        </div>
    );
};

export default PriceIncreaseProducts;