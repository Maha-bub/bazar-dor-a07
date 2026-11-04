import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UpdateProfilePage = () => {
    return (
        <div>
            <Form
                className="w-full mx-auto p-6 sm:p-8 bg-base-100 rounded-2xl shadow-lg border border-base-300 space-y-5"

            >
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    তথ্য
                </h1>


                <TextField isRequired name="name" type="name">
                    <Label>নাম</Label>
                    <Input placeholder="Enter your update name" className="w-full" />
                    <FieldError />
                </TextField>




                <Button
                    type="submit"
                    className="btn bg-[#05893E] hover:bg-[#05893A] text-white border-none w-full mt-1"
                >

                    আপডেট করুন
                </Button>




            </Form>
        </div>
    );
};

export default UpdateProfilePage;