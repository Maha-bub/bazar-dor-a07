'use client'
import UpdateProfilePage from '@/app/components/UpdateProfile';
import { authClient, useSession } from '@/lib/auth-clients';
import { Button, Description } from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter()
    const handleSignOut = async () => {

        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/sign-in");
                },
            },
        });
    }


    return (
        <div className="max-w-5xl mx-auto mt-6 px-4 sm:px-6 space-y-5 lg:px-0">
            <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    আমার প্রোফাইল
                </h1>
                <Description className="mt-2 text-gray-500">
                    বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                </Description>
            </div>

            <div className="w-full mx-auto p-6 sm:p-8 bg-base-100 rounded-2xl shadow-lg border border-base-300 space-y-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
                    <div className="flex items-center gap-4 min-w-0">
                        <Image
                            alt="Avatar"
                            src={user?.image}
                            width={64}
                            height={64}
                            className="rounded-full object-cover shrink-0"
                        />

                        <div className="min-w-0">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
                                {user?.name}
                            </h2>
                            <p className="text-sm text-gray-500 truncate">
                                {user?.email}
                            </p>
                        </div>
                    </div>

                    <Button
                        variant="danger"
                        className="w-full sm:w-auto px-6 font-medium"
                        onClick={handleSignOut}
                    >
                        Log Out
                    </Button>
                </div>

            </div>


            <UpdateProfilePage></UpdateProfilePage>

        </div>
    );
};

export default ProfilePage;