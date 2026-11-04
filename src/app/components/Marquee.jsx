import Link from 'next/link';
import React from 'react';
import "react-marquee-text/dist/styles.css"
import MarqueeText from "react-marquee-text"
import { Chip } from '@heroui/react';

const MarqueePage = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
    const resData = await res.json()
    // console.log(resData, 'all products')
    return (
        <div className='w-full m-auto shadow py-1'>
            <MarqueeText direction="right" duration={20}>
                {
                    resData.map((item, index) => {
                        const isUp = item.change.dir === 'up';
                        const isDown = item.change.dir === 'down';
                        return (

                            <div key={item.id ?? index}>
                                <Link href="/" className='flex gap-2'>
                                    <h3>
                                        <span>{item.image}</span>
                                        <span className='from-neutral-800'> {item.nameBn}</span>
                                    </h3>
                                    <p>
                                        {item.today} টাকা/কেজি
                                    </p>                                    <Chip

                                        className={`${isUp ? 'bg-[#ffe4e6] text-warning' : isDown ? 'bg-[#d1fae5] text-success' : 'bg-slate-200 text-slate-700'} m-1`}>
                                        {
                                            isUp ? '▲' :

                                                isDown ? '▼' :
                                                    '-'
                                        }
                                        {
                                            item.change.pct
                                        }%
                                    </Chip>
                                </Link>
                            </div>
                        )
                    })
                }
            </MarqueeText>
        </div >
    );
};

export default MarqueePage;