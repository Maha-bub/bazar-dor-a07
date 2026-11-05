'use client'
import React from 'react';
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
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { signIn, signUp } from '@/lib/auth-clients';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries())
        const { data, error } = await signUp.email({
            ...user
        })
        if (data) {
            // console.log(data)
            toast.success('User created, Login to continue')
            router.push('/sign-in')
        }
        if (error) {
            console.log("something wrong", error.message)
        }
    };
    const handleGitHubSignIn = async () => {
        const resData = await signIn.social({
            provider: 'github'
        })
        // toast.success('GitHub SignUp successfully')
    }
    const handleGoogleSignIn = async () => {
        const resData = await signIn.social({
            provider: 'google'
        })
        //  toast.success('Google SignUp successfully')
    }
    return (
        <div className="flex items-center justify-center">
            <div>
                <div className="text-center my-3 mt-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#05893E]">
                        অ্যাকাউন্ট তৈরি করুন
                    </h2>
                    <Description>
                        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </Description>
                </div>
                <Form
                    className="w-full max-w-md mx-auto p-6 sm:p-8 bg-base-100 rounded-2xl shadow-lg border border-base-300 space-y-5"
                    onSubmit={onSubmit}
                >

                    <TextField isRequired name="name">
                        <Label>নাম</Label>
                        <Input placeholder="আপনার নাম লিখুন" className="w-full" />
                        <FieldError />
                    </TextField>


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


                    <TextField isRequired name="confirmPassword">
                        <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
                        <Input
                            type="password"
                            placeholder="পুনরায় পাসওয়ার্ড লিখুন"
                            className="w-full"
                        />
                        <FieldError />
                    </TextField>


                    <Button
                        type="submit"
                        className="btn bg-[#05893E] hover:bg-[#05893A] text-white border-none w-full mt-2"
                    >

                        অ্যাকাউন্ট তৈরি করুন
                    </Button>
                    <div className="flex items-center gap-2 my-2">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500">অথবা</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                    <div className="flex max-w-full gap-3">
                        <Button
                            onClick={handleGoogleSignIn}
                            className="w-md" variant="tertiary">
                            <Icon icon="devicon:google" />
                            Sign in with Google
                        </Button>
                        <Button
                            onClick={handleGitHubSignIn}
                            className="w-md" variant="tertiary">
                            <Icon icon="mdi:github" />
                            Sign in with GitHub
                        </Button>
                    </div>

                    <div>
                        <p className="text-center text-sm text-gray-500">
                            ইতোমধ্যে অ্যাকাউন্ট আছে?
                            <a
                                href="/sign-in"
                                className="text-red-700 font-semibold ml-1 hover:underline"
                            >
                                সাইন ইন করুন
                            </a>
                        </p>
                    </div>
                </Form>
                <Link href={'/'} className='text-sm flex items-center justify-center my-5'><FaArrowLeftLong />হোমে ফেরত যাই</Link>
            </div >
        </div >
    );
};

export default SignUpPage;