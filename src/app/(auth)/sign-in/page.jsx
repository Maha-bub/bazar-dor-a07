'use client'
import React from 'react';
// import {FloppyDisk} from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import { Icon } from '@iconify/react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Link from 'next/link';
import { signIn } from '@/lib/auth-clients';
import toast from 'react-hot-toast';
import { error } from 'better-auth/api';
import { redirect } from 'next/navigation';

const SignInPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries())
        const { data } = await signIn.email({
            email: user.email,
            password: user.password,
            callbackURL:('/')
        })
        if (data) {
            console.log(data)
            toast.success('User Logged In!')
        }
        if (error) {
            console.log(error)
            toast.warning('Email or password is invalid!')
        }
    };
    return (

        <div className="flex items-center justify-center">
            <div>
                <div className="text-center my-3 mt-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#05893E]">
                        লগইন করুন
                    </h2>
                    <p className='text-sm '>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
                </div>
                <Form
                    className="w-full max-w-md mx-auto p-6 sm:p-8 bg-base-100 rounded-2xl shadow-lg border border-base-300 space-y-5"
                    onSubmit={onSubmit}
                >

                    <TextField isRequired name="email" type="email">
                        <Label>ইমেইল</Label>
                        <Input placeholder="আপনার ইমেইল লিখুন" className="w-full" />
                        <FieldError />
                    </TextField>


                    <TextField isRequired name="password">
                        <Label>পাসওয়ার্ড</Label>
                        <Input
                            type="password"
                            placeholder="৮ অক্ষরের পাসওয়ার্ড লিখুন"
                            className="w-full"
                        />
                        <FieldError />
                    </TextField>

                    <Button
                        type="submit"
                        className="btn bg-[#05893E] hover:bg-[#05893A] text-white border-none w-full mt-1"
                    >

                        লগইন করুন
                    </Button>
                    <div className="flex items-center gap-2 my-2">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500">অথবা</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                    <div className="flex max-w-full gap-3">
                        <Button className="w-md" variant="tertiary">
                            <Icon icon="devicon:google" />
                            Sign in with Google
                        </Button>
                        <Button className="w-md" variant="tertiary">
                            <Icon icon="mdi:github" />
                            Sign in with GitHub
                        </Button>
                    </div>

                    <div>
                        <p className="text-center text-sm text-gray-500">
                            ইতোমধ্যে অ্যাকাউন্ট আছে?
                            <a
                                href="/sign-up"
                                className="text-red-700 font-semibold ml-1 hover:underline"
                            >
                                সাইন আপ করুন
                            </a>
                        </p>
                    </div>
                </Form>
                <Link href={'/'} className='text-sm flex items-center justify-center my-5'><FaArrowLeftLong />হোমে ফেরত যাই</Link>
            </div>
        </div>
    );
};

export default SignInPage;