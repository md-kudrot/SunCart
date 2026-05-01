"use client";
import { authClient } from '@/lib/auth-client';
import { Button, Card } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';


const Editprofile = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        console.log(name, image);
        await authClient.updateUser({
            name,
            image
        })

        router.push('/profile');
    }

    return (
        <div>
            <div className="p-4">
                <Card className="border mx-auto w-full sm:w-96 md:w-125 lg:w-125 py-5 sm:py-8 md:py-10 lg:py-10 mt-2 sm:mt-5 md:mt-5 lg:mt-5 bg-[#242020] text-white px-4 sm:px-6 md:px-8 lg:px-8">
                    <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold">Edit Profile</h1>

                    <form className="flex w-full sm:w-80 md:w-96 lg:w-96 mx-auto flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-4" onSubmit={onSubmit}>
                        <label className="flex flex-col gap-2 text-white">
                            <span className="text-sm font-medium">Name</span>
                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="Enter your name"
                                className="rounded-md border border-white/20 bg-transparent px-3 py-2 outline-none transition placeholder:text-white/50 focus:border-white/40"
                            />
                        </label>

                        <label className="flex flex-col gap-2 text-white">
                            <span className="text-sm font-medium">Image URL</span>
                            <input
                                name="image"
                                type="url"
                                required
                                placeholder="Image URL"
                                className="rounded-md border border-white/20 bg-transparent px-3 py-2 outline-none transition placeholder:text-white/50 focus:border-white/40"
                            />
                        </label>

                        <div className="flex gap-1 sm:gap-2 md:gap-2 lg:gap-2 flex-col sm:flex-row">
                            <Button type="submit" className='bg-[#00575E] text-[#F0B100]'>
                                <Check
                                />
                                Submit
                            </Button>
                            <Button type="reset" variant="secondary" className={'bg-[#00575E] text-[#66ac17]'}>
                                Reset
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Editprofile;