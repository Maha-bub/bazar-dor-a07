import React from 'react';
import ProductCard from './ProductCard';

const PriceIncreaseProducts = ({topFiveProducts}) => {
    console.log(topFiveProducts,'Price Increase page')
    return (
        <div>
            <h2>আজ দাম বেড়েছে</h2>
           <ProductCard key={topFiveProducts.id} products={topFiveProducts}></ProductCard>
        </div>
    );
};

export default PriceIncreaseProducts;