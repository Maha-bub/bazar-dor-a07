
import { Breadcrumbs, Chip, Table } from "@heroui/react";
import React from "react";

const ProductIdPage = async ({ params }) => {
    const { productId } = await params;

    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products/${productId}`);

    if (!res.ok) {
        throw new Error("Failed to fetch product data");
    }

    const response = await res.json();
    const product = response?.data ?? response;

    const markets = product?.markets || [];

    const allMinPrices = markets.map((item) => item.min);
    const allMaxPrices = markets.map((item) => item.max);

    const lowestPrice = Math.min(...allMinPrices);
    const highestPrice = Math.max(...allMaxPrices);

    const averagePrice =
        markets.length > 0
            ? markets.reduce(
                (total, item) => total + (item.min + item.max) / 2,
                0
            ) / markets.length
            : 0;

    const formatPrice = (price) =>
        new Intl.NumberFormat("bn-BD", {
            maximumFractionDigits: 2,
        }).format(price);

    return (
        <div className="min-h-screen bg-[#f0f5f1] px-4 py-6 md:px-6">
            <div className="mx-auto max-w-6xl space-y-5">

                {/* Breadcrumb */}
                <Breadcrumbs className="text-sm text-gray-500">
                    <Breadcrumbs.Item href="/">
                        হোম
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item href="/allProducts">
                        {product.categoryNameBn}
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        {product.nameBn}
                    </Breadcrumbs.Item>
                </Breadcrumbs>

                {/* Product Information */}
                <section className="flex flex-col justify-between gap-5 rounded-xl border border-[#e0e9e1] bg-[#ffffff] p-5 sm:flex-row sm:items-center md:p-6">

                    <div className="flex items-center gap-4">
                        <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f1] text-4xl">
                            {product.image || product.categoryIcon}
                        </div>

                        <div>
                            <h1 className="text-xl font-bold text-[#202b23] md:text-2xl">
                                {product.nameBn}
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                {product.categoryNameBn} ({product.unit})
                            </p>

                            <p className="mt-2 text-xs text-gray-600">
                                গতকালের তুলনায় আজ দাম বেড়েছে :{" "}
                                {formatPrice(product.today - product.yesterday)} টাকা
                            </p>
                        </div>
                    </div>

                    {/* Today's Price */}
                    <div className="min-w-28 rounded-xl bg-[#f0f5f1] px-5 py-3 text-center">
                        <p className="text-xs text-gray-500">
                            আজকের দাম
                        </p>

                        <h2 className="text-2xl font-bold text-[#202b23]">
                            {formatPrice(product.today)}
                        </h2>

                        <p className="text-xs text-gray-500">
                            টাকা / {product.unit}
                        </p>

                        <Chip
                            size="sm"
                            color={product.change?.dir === "up" ? "danger" : "success"}
                            variant="soft"
                            className="mt-1"
                        >
                            {product.change?.dir === "up" ? "▲" : "▼"}{" "}
                            {formatPrice(product.change?.pct || 0)}%
                        </Chip>
                    </div>
                </section>

                {/* Market Price Overview */}
                <section className="rounded-xl border border-[#e0e9e1] bg-white p-5 md:p-6">

                    <h2 className="mb-4 text-base font-bold text-[#26332a]">
                        দামের সারসংক্ষেপ
                    </h2>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">


                        <div className="rounded-xl border border-[#e0e9e1] p-4">
                            <p className="text-xs text-gray-500">
                                সর্বনিম্ন দাম
                            </p>

                            <h3 className="mt-1 text-xl font-bold text-[#16a34a]">
                                {formatPrice(lowestPrice)} টাকা
                            </h3>

                            <p className="mt-1 text-xs text-gray-500">
                                সবচেয়ে কম দামের বাজার
                            </p>
                        </div>


                        <div className="rounded-xl border border-[#e0e9e1] p-4">
                            <p className="text-xs text-gray-500">
                                সর্বাধিক দাম
                            </p>

                            <h3 className="mt-1 text-xl font-bold text-[#ef4444]">
                                {formatPrice(highestPrice)} টাকা
                            </h3>

                            <p className="mt-1 text-xs text-gray-500">
                                সবচেয়ে বেশি দামের বাজার
                            </p>
                        </div>


                        <div className="rounded-xl border border-[#e0e9e1] p-4">
                            <p className="text-xs text-gray-500">
                                গড় দাম
                            </p>

                            <h3 className="mt-1 text-xl font-bold text-[#16a34a]">
                                {formatPrice(averagePrice)} টাকা
                            </h3>

                            <p className="mt-1 text-xs text-gray-500">
                                প্রতি কেজি হিসেবে
                            </p>
                        </div>

                    </div>

                    {/* Market Wise Price Table */}
                    <div className="mt-5">
                        <h2 className="mb-4 text-base font-bold text-[#26332a]">
                            বাজারভিত্তিক আজকের দাম
                        </h2>

                        <div className="w-full max-w-full overflow-x-auto rounded-xl border border-[#e0e9e1]">
                            <Table aria-label="Market wise product price" className="w-full">
                                <Table.Content className="min-w-160 sm:min-w-full">
                                    <Table.Header>
                                        <Table.Column id="market" className='px-3 sm:px-4'>
                                            বাজার
                                        </Table.Column>

                                        <Table.Column className='px-3 sm:px-4' id="division">
                                            বিভাগ
                                        </Table.Column>

                                        <Table.Column className='px-3 sm:px-4' id="min">
                                            সর্বনিম্ন
                                        </Table.Column>

                                        <Table.Column className='px-3 sm:px-4' id="max">
                                            সর্বাধিক
                                        </Table.Column>

                                        <Table.Column className='px-3 sm:px-4' id="average">
                                            গড়
                                        </Table.Column>
                                    </Table.Header>

                                    <Table.Body>
                                        {markets.map((market, index) => {
                                            const avg =
                                                (market.min + market.max) / 2;

                                            return (
                                                <Table.Row
                                                    key={`${market.market}-${index}`}
                                                >
                                                    <Table.Cell className="px-3 sm:px-4 py-3">
                                                        <span className="font-medium text-[#26332a]">
                                                            {market.market}
                                                        </span>
                                                    </Table.Cell>

                                                    <Table.Cell className="px-3 sm:px-4 py-3">
                                                        {market.division}
                                                    </Table.Cell>

                                                    <Table.Cell className="px-3 sm:px-4 py-3">
                                                        {formatPrice(market.min)} টাকা
                                                    </Table.Cell>

                                                    <Table.Cell className="px-3 sm:px-4 py-3">
                                                        {formatPrice(market.max)} টাকা
                                                    </Table.Cell>

                                                    <Table.Cell className="px-3 sm:px-4 py-3">
                                                        <span className="font-semibold text-[#26332a]">
                                                            {formatPrice(avg)} টাকা
                                                        </span>
                                                    </Table.Cell>
                                                </Table.Row>
                                            );
                                        })}
                                    </Table.Body>
                                </Table.Content>
                            </Table>
                        </div>

                        <p className="mt-3 text-xs text-gray-400">
                            মোট {formatPrice(markets.length)} টি বাজারের তথ্য দেখানো হচ্ছে।
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductIdPage;
