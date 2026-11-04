
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState,useEffect } from 'react';

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
        <div className='flex gap-4 max-w-7xl m-auto justify-start'>

            {
                categories.map((navLinks) => {
                    const isActive = pathname === `/categories/${navLinks.slug}`;

                    return (
                        <div key={navLinks.id}>
                            <Link
                                href={`/categories/${navLinks.slug}`}
                                className={`group inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:text-black hover:font-semibold ${isActive ? 'text-black' : 'text-base-content/80'}`}
                            >
                                <span className="text-base transition-transform duration-200 group-hover:scale-110">{navLinks.icon}</span>
                                {navLinks.nameBn}
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default NavLinks;