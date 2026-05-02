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
        <div className="h-50vh mt-20 py-10 flex items-center justify-center px-4 overflow-hidden">
            <Card className="w-full h-100 max-w-md flex flex-col items-center  justify-centerborder bg-black text-white p-6 md:p-8 rounded-lg">
                <Avatar className="h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28">
                    <Avatar.Image
                        alt={user?.name}
                        src={user?.image}
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mt-4 md:mt-6 text-center">{user?.name}</h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-400 mt-2 md:mt-3 text-center break-all">{user?.email}</p>

                {/* <UpdateUserModal></UpdateUserModal> */}
                <Button className='bg-[#00575E] text-[#F0B100]'>
                    <Link href='/profile/editprofile'>
                        Update Profile
                    </Link>
                </Button>

            </Card>
        </div>
    );
};

export default Profile;