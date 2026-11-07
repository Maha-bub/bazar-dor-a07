
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NavLinks = () => {
    const pathname = usePathname();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");

                if (!res.ok) {
                    throw new Error("Failed to fetch categories");
                }

                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategories();
    }, []);
    return (
        <div className='w-full max-w-7xl mx-auto px-3 sm:px-4'>
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide lg:flex-wrap lg:overflow-visible">
                {
                    categories.map((navLinks) => {
                        const isActive = pathname === `/category/${navLinks.slug}`;

                        return (
                            <div key={navLinks.id}>
                                <Link
                                    href={`/category/${navLinks.slug}`}
                                    className={`group inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:text-black hover:font-semibold  ${isActive
                                            ? 'bg-gray-100 font-semibold text-black shadow-xs'
                                            : 'font-medium text-base-content/80 hover:bg-gray-100 hover:font-semibold hover:text-black'
                                        }`}
                                >
                                    <span className="text-base transition-transform duration-200 group-hover:scale-110">{navLinks.icon}</span>
                                    {navLinks.nameBn}
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default NavLinks;