
import React from 'react';
import { Card } from '@heroui/react';
import Link from 'next/link';

const ProductCard = ({ products = [] }) => {


    const formatNumber = (number) => new Intl.NumberFormat('bn-BD').format(number);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {products.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`}>
                    <Card

                        className="bg-white border border-gray-200 shadow-none rounded-2xl p-5 hover:shadow-md transition-shadow"
                    >

                        <div className="flex items-center gap-3 mb-4">

                            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl">
                                {product.image}
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    {product.nameBn}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    প্রতি {product.unit === 'kg'
                                        ? 'কেজি'
                                        : product.unit}
                                </p>
                            </div>

                        </div>


                        <div className="flex items-end justify-between gap-2">

                            <div>
                                <p className="text-sm text-gray-500 mb-1">
                                    আজকের দাম
                                </p>

                                <h2 className="text-xl font-bold text-gray-800">
                                    {formatNumber(product.today)} টাকা
                                </h2>
                            </div>


                            <span
                                className={`text-sm font-semibold px-3 py-1 rounded-full 
                                ${product.change.dir === 'up'
                                        ? 'bg-red-50 text-red-500'
                                        : 'bg-green-50 text-green-600'
                                    }`}
                            >
                                {product.change.dir === 'up'
                                    ? '▲ '
                                    : product.change.dir === 'down'
                                        ? '▼ '
                                        : '-'}
                                {formatNumber(product.change.pct)}%
                            </span>

                        </div>

                    </Card>
                </Link>
            ))}

        </div>
    );
};

export default ProductCard;
