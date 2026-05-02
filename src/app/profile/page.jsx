"use client";

// import UpdateUserModal from '@/app/editprofile/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Profile = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    // console.log(user);
    return (
        <div className=" mt-20 p-10  flex items-center justify-center px-4 overflow-hidden">
            <Card className=" py-12  flex flex-col items-center  justify-center  bg-black text-white p-16  rounded-lg">
                <Avatar className="h-28 w-28 ">
                    <Avatar.Image
                        alt={user?.name}
                        src={user?.image}
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <h2 className="text-3xl font-bold mt-4 text-center w-full text-[#f0b000d7]">{user?.name}</h2>
                <p className="text-md  text-gray-400 mt-2 text-center break-all">{user?.email}</p>

                {/* <UpdateUserModal></UpdateUserModal> */}
                <Button className='bg-[#00575E] text-2xl py-2 text-[#F0B100]'>
                    <Link href='/profile/editprofile'>
                        Update Profile
                    </Link>
                </Button>

            </Card>
        </div>
    );
};

export default Profile;