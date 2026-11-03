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

const SignUpPage = () => {

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
    };
    return (

        <Form
            className="w-full max-w-md mx-auto p-6 sm:p-8 bg-base-100 rounded-2xl shadow-lg border border-base-300 space-y-5"
            onSubmit={onSubmit}
        >

            <div className="text-center space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#05893E]">
                    অ্যাকাউন্ট তৈরি করুন
                </h2>
                <Description>
                    বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                </Description>
            </div>


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

            <p className="text-center text-sm text-gray-500">
                ইতোমধ্যে অ্যাকাউন্ট আছে?
                <a
                    href="/sign-in"
                    className="text-red-700 font-semibold ml-1 hover:underline"
                >
                    সাইন ইন করুন
                </a>
            </p>
        </Form>
    );
};

export default SignUpPage;