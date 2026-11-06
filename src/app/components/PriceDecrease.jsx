import React from 'react';
import ProductCard from './ProductCard';

const PriceDecreaseProducts = ({ downFiveProducts }) => {
  
    return (
        <div className='my-10'>
            <div className='flex gap-2 items-center mb-5'> <span className="text-green-600">▼</span>  <h2 className='text-2xl font-bold' >আজ দাম কমেছে</h2></div>

            <ProductCard key={downFiveProducts.id} products={downFiveProducts}></ProductCard>
        </div>
    );
};

export default PriceDecreaseProducts;