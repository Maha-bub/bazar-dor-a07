import Link from 'next/link';

const NavLinks = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const resNavData = await res.json();

    // console.log(resNavData, 'category data');

    return (
        <div className='flex gap-4 max-w-7xl m-auto justify-start'>

            {
                resNavData.map((navLinks) => (
                    <div key={navLinks.id}>
                        <Link className="group inline-flex items-center gap-2 rounded-lg px-1 py-2 text-sm font-medium text-base-content/80 transition-all duration-200 hover:bg-primary/10 hover:text-primary" href={`/category/${navLinks.slug}`}>
                            <span className="text-base transition-transform duration-200 group-hover:scale-110" >{navLinks.icon}</span>
                            {navLinks.nameBn}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default NavLinks;