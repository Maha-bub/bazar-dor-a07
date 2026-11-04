import Link from 'next/link';
import React from 'react';
import "react-marquee-text/dist/styles.css"
import MarqueeText from "react-marquee-text"

const MarqueePage = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
    const resData = await res.json()
    console.log(resData, 'all products')
    return (
        <div className='w-full m-auto shadow py-1'>
            <MarqueeText direction="right" duration={10}>
                {
                    resData.map((item, index) => (
                        <div key={item.id ?? index}>
                            <Link href="/" className='flex gap-2'>
                                <h3>
                                    <span>{item.image}</span>
                                    {item.nameBn}
                                </h3>
                                <h2>
                                    ▲▼  <span>{item.today}</span>
                                    টাকা/কেজি
                                </h2>
                            </Link>
                        </div>
                    ))
                }
            </MarqueeText>
        </div >
    );
};

export default MarqueePage;