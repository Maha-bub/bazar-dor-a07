'use client'
import { authClient } from '@/lib/auth-clients';
import Image from 'next/image';
import Link from 'next/link';
// import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label, Skeleton } from "@heroui/react";
import toast from 'react-hot-toast';


const UserProfile = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleLogout = async () => {
        await authClient.signOut();
        toast.error('User Logged Out, continue to Login!')
    };
    // console.log(user)

    return (
        <div className='absolute right-0 flex items-center gap-2'>
            {
                isPending ?
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-3 w-36 rounded-lg" />
                            <Skeleton className="h-3 w-24 rounded-lg" />
                        </div>
                    </div>
                    :

                    user ?

                        <div className="flex items-center gap-3 rounded-xl border border-base-300 bg-base-100 p-2 shadow-sm">

                            <Dropdown>
                                <Dropdown.Trigger className="rounded-full">
                                    <div className="avatar">
                                        <div className="w-11 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                                            <Image
                                                src={user?.image || "/default-avatar.png"}
                                                width={100}
                                                height={100}
                                                alt={user?.name ?? "User avatar"}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </Dropdown.Trigger>

                                <Dropdown.Popover>
                                    <Dropdown.Menu>
                                        <Dropdown.Item id="profile" textValue="Profile">
                                            <Link href={'/profile'}>
                                                Profile
                                            </Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item
                                            id="logout"
                                            textValue="Logout"
                                            variant="danger"
                                            onAction={handleLogout}
                                        >
                                            <Label>Logout</Label>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>


                            <div className="flex min-w-0 flex-1 items-center gap-3">

                                <div className="min-w-0">
                                    <h2 className="truncate text-sm font-bold text-base-content">
                                        {user?.name || "Guest User"}
                                    </h2>

                                    <span className="text-xs text-success">
                                        ● Online
                                    </span>
                                </div>

                            </div>




                        </div>

                        :
                        <div className='flex gap-2 justify-center items-center' >
                            <Link href={'/sign-in'}>
                                <button className="btn btn-outline">সাইন ইন</button>
                            </Link>
                            <Link href={'/sign-up'}>
                                <button className="btn btn-success text-white">সাইন আপ</button>
                            </Link>
                        </div>
            }


        </div>
    );
};

export default UserProfile;