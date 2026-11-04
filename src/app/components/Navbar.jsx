import Image from 'next/image';
import { MdOutlineShoppingCart } from 'react-icons/md';
import UserProfile from './UserProfile';


const Navbar = () => {
    const date = new Date().toLocaleDateString('bn-BD',
        {
            dateStyle: "full",
        })

    return (
        <div >
            <div className='container relative mx-auto flex max-w-7xl items-center justify-start py-5'>
                <div className='flex align-items-center items-center gap-1 w--10/12 '>
                    <Image
                        src={'/logo-icon.png'}
                        className='bg-[#05893E] rounded-2xl p-4'
                        alt="Logo Image"
                        width={50}
                        height={40}>
                    </Image>
                    <div>
                        <h2 className='text-3xl font-bold'>বাজার দর</h2>
                        <p>{date}</p>
                    </div>
                </div>
                <UserProfile></UserProfile>

            </div>


         

        </div>
    );
};

export default Navbar;