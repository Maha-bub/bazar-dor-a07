'use client'
import React, { useState } from 'react';
// import { ArrowUpDown } from "lucide-react";
import { LuArrowUpDown } from 'react-icons/lu';
import ProductCard from './ProductCard';

const CategoryProducts = ({ resData }) => {
    const [sortBy, setSortBy] = useState("default")
    const sortedProducts = [...resData]
    if (sortBy === "price-asc") {
        sortedProducts.sort((a, b) => a.today - b.today)
    }
    else if (sortBy === "price-desc") {
        sortedProducts.sort((a, b) => b.today - a.today)
    }
    return (
        <div>

            <div className="flex w-full items-center justify-end gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 shrink-0">
                    <LuArrowUpDown size={14} className="text-blue-600" />
                    <span>সাজান:</span>
                </div>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="min-w-0 max-w-47.5 sm:max-w-none text-xs sm:text-sm font-medium text-slate-800 bg-white border border-slate-200 rounded-lg px-2 sm:px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="price-asc">দাম কম থেকে বেশি</option>
                    <option value="price-desc">দাম বেশি থেকে কম</option>
                </select>
            </div>

            <div className='my-10'>
                <ProductCard key={resData.id} products={sortedProducts}></ProductCard>
            </div>

        </div>
    );
};

export default CategoryProducts;