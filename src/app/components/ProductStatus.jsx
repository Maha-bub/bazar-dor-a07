'use client'
import React, { useEffect, useState } from 'react';
import PriceIncreaseProducts from './PriceIncrease';
import PriceDecreaseProducts from './PriceDecrease';
import AllProducts from './AllProducts';
import { Skeleton } from "@heroui/react";

const ProductStatus = () => {
    // const [productsStatus, setProductsStatus] = useState([]);
    const [topFiveProducts, setTopFiveProducts] = useState([]);
    const [downFiveProducts, setDownFiveProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const handleFetchProducts = async () => {

            try {
                const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
                const data = await res.json();
                const topFivePriceUp = data.filter((item) => item.change.dir === 'up').sort((a, b) => b.change.pct - a.change.pct).slice(0, 6)
                const topFivePriceDown = data.filter((item) => item.change.dir === 'down').sort((a, b) => a.change.pct - b.change.pct).slice(0, 6)
                setTopFiveProducts(topFivePriceUp)
                setDownFiveProducts(topFivePriceDown)
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
                    <div className="grid w-full max-w-xl grid-cols-3 gap-4">
                        <Skeleton className="h-24 rounded-xl" />
                        <Skeleton className="h-24 rounded-xl" />
                        <Skeleton className="h-24 rounded-xl" />
                    </div>
                    :
                    <>
                        <PriceIncreaseProducts topFiveProducts={topFiveProducts}></PriceIncreaseProducts>
                        <PriceDecreaseProducts downFiveProducts={downFiveProducts}></PriceDecreaseProducts>
                        <AllProducts></AllProducts>
                    </>
            }
        </div>
    );
};

export default ProductStatus;