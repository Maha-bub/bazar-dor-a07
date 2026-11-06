import Image from 'next/image';
import { Description } from '@heroui/react';
import Link from 'next/link';
const HeroBannerPage = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full'
    })
    return (


        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-16 rounded-2xl bg-white p-3 sm:p-5 lg:p-5 my-10 ">


            <div className="w-full flex-1 space-y-5 text-center md:text-left">

                <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                    {date}
                </span>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                    আজকের বাজারের দাম এক নজরে
                </h1>

                <Description className="text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl mx-auto md:mx-0">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                    বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক
                    এবং দামের পরিবর্তন এক জায়গায়।
                </Description>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-2">

                    <Link href={'/allProducts'} className="w-full sm:w-auto">
                        <button className="btn btn-success text-white w-full px-7">
                            সব পণ্য দেখুন
                        </button>
                    </Link>

                </div>
            </div>

            {/* Hero Image */}
            <div className="w-full md:w-[45%] flex-1 flex justify-center">
                <Image
                    src="/bazar-hero.png"
                    alt="আজকের বাজারের পণ্য"
                    width={500}
                    height={350}
                    priority
                    className="w-full max-w-7 sm:max-w-sm md:max-w-full h-auto object-contain"
                />
            </div>

        </div>



    );
};

export default HeroBannerPage;