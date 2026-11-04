import React from 'react';
import ProductCard from './ProductCard';

const PriceDecreaseProducts = ({ downFiveProducts }) => {
    console.log(downFiveProducts, 'price decrease page')
    return (
        <div>
            <h2>আজ দাম কমেছে</h2>
            <ProductCard key={downFiveProducts.id} products={downFiveProducts}></ProductCard>
        </div>
    );
};

export default PriceDecreaseProducts;