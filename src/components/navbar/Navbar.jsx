"use client";
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const router = useRouter();
    const userData = authClient.useSession();
    const user = userData.data?.user;
    // console.log(user);

    const handleLogout = async () => {
        await authClient.signOut();
        router.push('/');
    }

    const link = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/profile">My Profile</Link></li>
    </>

    return (
        <div className="fixed top-0 left-0 right-0 z-50  flex items-center justify-center">
            <div className="navbar bg-base-100 shadow-sm w-7xl">
                <div className="navbar-start ">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#F0B100]">
                            {
                                link
                            }
                        </ul>
                    </div>


                    <Link href="/" className=" text-2xl font-bold">
                        <span className='text-[#F0B100]'>Sun</span> <span className='absolute text-[#00575E]'>Cart</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-[#F0B100] text-[1.125rem] px-1">
                        {
                            link
                        }
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    {!user && (
                        <>
                            <Link href={"/login"} className="btn border border-[#274da1] text-[#708dcc] rounded-xl ">Login</Link>
                            <Link href={"/signup"} className="btn text-[#b97e7e] border rounded-xl border-[#997070]      
                            ">Sign Up</Link>
                        </>
                    )}

                    {
                        user && (
                            <div className='flex gap-2'>
                                <Avatar>
                                    <Avatar.Image
                                        alt={user?.name}
                                        src={user?.image}
                                        referrerPolicy='no-referrer'
                                    />
                                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                                </Avatar>

                                <Button variant='danger' className="cursor-pointer rounded-sm bg-[#00575E] text-[#F0B100]" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;