
import React from 'react';
import Link from 'next/link';

const FooterPage = () => {
    return (
        <footer className="mt-6 sm:mt-8 border-t border-[#e0e9e1] bg-white">
            <div className="max-w-7xl mx-auto  py-8 sm:py-10">
                <Link
                    href="/"
                    className="inline-block text-xl sm:text-2xl font-bold text-[#26332a] hover:text-green-700 transition-colors"
                >
                    বাজার দর
                </Link>

                <div className="mt-6 pt-5 border-t border-[#e0e9e1] flex flex-col-reverse sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <p className="text-xs sm:text-sm text-gray-500">
                        © {new Date().getFullYear()} বাজার দর। সর্বস্বত্ব সংরক্ষিত।
                    </p>

                    <p className="text-xs sm:text-sm font-medium text-[#526454]">
                        সচেতন বাজার, সঠিক সিদ্ধান্ত।
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default FooterPage;
