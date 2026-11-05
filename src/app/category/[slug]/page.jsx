import ProductCard from '@/app/components/ProductCard';
import { Description } from '@heroui/react';
import React from 'react';

const ProductCategory = async ({ params }) => {
    const { slug } = await params
    console.log(slug)
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`)
    const resData = await res.json()

    console.log(resData)
    return (
        <section id='allProducts'>
            <div className='my-10'>
                <h2 className="text-2xl font-bold">
                    {resData[0]?.categoryNameBn} পণ্য
                </h2>

            </div>
            <ProductCard key={resData.id} products={resData}></ProductCard>
        </section>
    );
};

export default ProductCategory; 