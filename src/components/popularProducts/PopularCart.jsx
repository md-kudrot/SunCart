import React from 'react';
import Image from 'next/image';

const PopularCart = async () => {


    // const res = await fetch('http://localhost:3000/products.json');
    // const data = await res.json();
    // console.log(data);

    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-4xl font-bold mb-8'>Popular Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">

                <div className="bg-base-100 shadow-xl p-2 border border-gray-500 rounded-2xl">
                    <figure>
                        <Image className="rounded-2xl w-full" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80" alt="Product" width={200} height={125} />
                    </figure>
                    <div className="mt-4">
                        <div className="flex items-start justify-between gap-4">
                            <h2 className="card-title text-4xl">Shoes</h2>
                            <div className="text-yellow-500 text-2xl font-semibold">★ 4.8</div>
                        </div>
                        <p className="text-xl mt-4 text-gray-500">Nike</p>
                        <div className="flex items-center justify-between pt-2">
                            <p className="text-xl font-medium">Price</p>
                            <span className="text-xl font-bold">$15</span>
                        </div>
                        <div className="pt-4 ">
                            <button className="btn bg-[#3b46a0]  text-2xl py-6 w-full rounded-2xl btn-primary">View Details</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularCart;