import React from 'react';
import ProductCard from './ProductCard';
import { Description } from '@heroui/react';

const AllProducts = ({ allProducts }) => {
    const formatNumber = (number) => new Intl.NumberFormat('bn-BD').format(number);
    return (
        <div className='my-10'>
            <div className='items-center mb-5'>
                <h2 className='text-2xl font-bold' >সকল পণ্য</h2> <Description className='block'>মোট {formatNumber(allProducts.length)}টি পণ্য</Description></div>

            <ProductCard key={allProducts.id} products={allProducts}></ProductCard>
        </div>
    );
};

export default AllProducts;