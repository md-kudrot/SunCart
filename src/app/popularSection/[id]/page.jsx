import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const details = async ({ params }) => {

    const { id } = await params;

    const res = await fetch('https://sun-cart-tau.vercel.app/products.json');
    const products = await res.json();

    const product = products.find(p => p.id === parseInt(id));

    console.log(id)
    console.log(product)
    return (
        <div className="p-8 w-[70%] mx-auto">
            <div className="bg-base-100 flex flex-col shadow-xl p-4 border border-gray-500 rounded-2xl h-full ">
                <figure className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-2xl shrink-0 bg-white">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-xl"
                    />
                </figure>

                <div className="mt-4 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4">
                        <h2 className="card-title text-5xl ">{product.name}</h2>
                    </div>
                    <p className="text-xl mt-4 text-gray-500">{product.brand}</p>

                    <div className=''>
                        <h3 className="text-4xl font-semibold mt-4">Description</h3>
                        <p className="text-md mt-2 text-white w-[90%]">{product.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 mt-auto">
                        <p className="text-xl font-medium">Price</p>
                        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                        <h2 className="card-title text-xl ">Rating</h2>
                        <div className="text-yellow-500 text-2xl font-semibold flex gap-1 items-center shrink-0">
                            <p>★</p>
                            {product.rating}
                        </div>
                    </div>


                    <div className="pt-4">
                        <Link href={`/popularSection/${product.id}`}>
                            <button className="btn bg-[#3b46a0] text-2xl py-6 w-full rounded-2xl btn-primary">Purchase</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default details;