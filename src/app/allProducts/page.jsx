import React from 'react';


import ProductCard from '../components/ProductCard';

const AllProducts = async ({ allProducts }) => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
    const data = await res.json();
    return (
        <section>
            <div className='my-10'>
                <div className='items-center mb-5'>
                    <h2 className='text-2xl font-bold' >সকল পণ্য</h2></div>

                {
                    data.map((allProducts) => <ProductCard key={data.id} products={data}></ProductCard>)
                }
            </div>
        </section>
    );
};

export default AllProducts;