import CategoryProducts from '@/app/components/CategoryProducts';
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
            <div className="my-10 flex items-center gap-4 border border-gray-200 rounded-2xl p-5">
                <div className="w-14 h-14 shrink-0 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl">
                    {resData[0]?.categoryIcon}
                </div>

                <div className="min-w-0">
                    <h2 className="text-xl md:text-2xl font-bold">
                        {resData[0]?.categoryNameBn} এর প্রকারভেদ
                    </h2>

                    <Description>
                        {resData.length}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </Description>
                </div>
            </div>
            <div className="my-10 flex items-center gap-4 border border-gray-200 rounded-2xl p-5">
                <CategoryProducts></CategoryProducts>
            </div>
            <ProductCard key={resData.id} products={resData}></ProductCard>
        </section>
    );
};

export default ProductCategory; 