'use client'
import React, { useEffect, useState } from 'react';
import PriceIncreaseProducts from './PriceIncrease';
import PriceDecreaseProducts from './PriceDecrease';
import AllProducts from './AllProducts';
import { Skeleton } from "@heroui/react";

const ProductStatus = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [topFiveProducts, setTopFiveProducts] = useState([]);
    const [downFiveProducts, setDownFiveProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const bone = "animate-shine rounded-lg bg-neutral-200/90 dark:bg-neutral-800/90";
    useEffect(() => {
        const handleFetchProducts = async () => {

            try {
                const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
                const data = await res.json();
                const topFivePriceUp = data.filter((item) => item.change.dir === 'up').sort((a, b) => b.change.pct - a.change.pct).slice(0, 6)
                const topFivePriceDown = data.filter((item) => item.change.dir === 'down').sort((a, b) => a.change.pct - b.change.pct).slice(0, 6)
                setTopFiveProducts(topFivePriceUp)
                setDownFiveProducts(topFivePriceDown)
                setAllProducts(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        handleFetchProducts()
    }, [])
    return (
        <div>
            {
                loading ?
                    <div className="m-auto grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={index}
                                className="w-full space-y-5 rounded-xl border border-border/80 bg-surface p-4 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                            >

                                <Skeleton className={`h-32 w-full ${bone}`} />


                                <div className="space-y-3">
                                    <Skeleton className={`h-3 w-3/5 ${bone}`} />
                                    <Skeleton className={`h-3 w-4/5 ${bone}`} />
                                    <Skeleton className={`h-3 w-2/5 ${bone}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <>
                        <PriceIncreaseProducts topFiveProducts={topFiveProducts}></PriceIncreaseProducts>
                        <PriceDecreaseProducts downFiveProducts={downFiveProducts}></PriceDecreaseProducts>
                        <AllProducts allProducts={allProducts}></AllProducts>
                    </>
            }
        </div>
    );
};

export default ProductStatus;