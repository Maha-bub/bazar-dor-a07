import UpdateProfilePage from '@/app/components/UpdateProfile';
import { Button, Description } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {

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
                            src="/avatar.png"
                            width={64}
                            height={64}
                            className="rounded-full object-cover shrink-0"
                        />

                        <div className="min-w-0">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
                                Name
                            </h2>
                            <p className="text-sm text-gray-500 truncate">
                                email@example.com
                            </p>
                        </div>
                    </div>

                    <Button
                        variant="danger"
                        className="w-full sm:w-auto px-6 font-medium"
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