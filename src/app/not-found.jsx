'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search, ShoppingBasket } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-base-100">
            <div className="w-full max-w-xl text-center">

                {/* Illustration */}
                <div className="relative mx-auto mb-6 flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full bg-green-50">
                    <ShoppingBasket
                        size={75}
                        strokeWidth={1.5}
                        className="text-[#05893E]"
                    />

                    <span className="absolute -right-2 top-2 rounded-full bg-[#05893E] px-4 py-2 text-xl font-bold text-white shadow-lg">
                        404
                    </span>
                </div>

                {/* Content */}
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#26332a]">
                    404
                    <span className="block mt-2 text-xl sm:text-2xl">
                        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!
                    </span>
                </h1>

                <p className="mt-4 text-sm sm:text-base leading-7 text-gray-500 max-w-md mx-auto">
                    দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি
                    সরানো হয়েছে, পরিবর্তন করা হয়েছে অথবা
                    বর্তমানে উপলব্ধ নেই।
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#05893E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#047532] shadow-md"
                    >
                        <Home size={18} />
                        হোম পেজে ফিরে যান
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                    >
                        <ArrowLeft size={18} />
                        আগের পৃষ্ঠায় যান
                    </button>

                </div>

                {/* Footer Text */}
                <div className="mt-10 flex items-center justify-center gap-2 text-sm text-gray-400">
                    <Search size={16} />
                    <span>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</span>
                </div>

            </div>
        </div>
    );
};

export default NotFound;
