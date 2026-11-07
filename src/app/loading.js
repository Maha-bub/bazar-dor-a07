

import React from "react";
import { Skeleton } from "@heroui/react";

const Loading = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8 space-y-10">


            <section className="space-y-5">
                <Skeleton className="w-32 h-6 rounded-full" />

                <div className="space-y-3">
                    <Skeleton className="w-full max-w-xl h-10 rounded-lg" />
                    <Skeleton className="w-full max-w-md h-5 rounded-lg" />
                    <Skeleton className="w-full max-w-sm h-5 rounded-lg" />
                </div>

                <Skeleton className="w-36 h-11 rounded-lg" />
            </section>

            <section className="space-y-3">
                <Skeleton className="w-56 h-8 rounded-lg" />
                <Skeleton className="w-80 max-w-full h-4 rounded-lg" />
            </section>


            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="border border-default-200 rounded-xl p-4 space-y-4"
                    >

                        <Skeleton className="w-full h-48 rounded-lg" />

                        <Skeleton className="w-3/4 h-6 rounded-md" />


                        <div className="space-y-2">
                            <Skeleton className="w-full h-4 rounded-md" />
                            <Skeleton className="w-5/6 h-4 rounded-md" />
                        </div>

                        <div className="flex justify-between items-center pt-2">
                            <Skeleton className="w-20 h-5 rounded-md" />
                            <Skeleton className="w-24 h-9 rounded-lg" />
                        </div>
                    </div>
                ))}

            </section>
        </main>
    );
};

export default Loading;
