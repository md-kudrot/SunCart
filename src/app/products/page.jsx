import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Products = async () => {
    const res = await fetch("https://sun-cart-tau.vercel.app/products.json");
    const data = await res.json();
    // console.log(data);
    return (
        <div className='container mx-auto p-4 mt-10'>
            <h1 className='text-4xl font-bold mb-8'>All Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-8">
                {
                    data.map(product => (
                        <div key={product.id} className="bg-base-100 flex flex-col shadow-xl p-4 border border-gray-500 rounded-2xl h-full ">
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
                                    <h2 className="card-title text-4xl line-clamp-1">{product.name}</h2>
                                    <div className="text-yellow-500 text-2xl font-semibold flex gap-1 items-center shrink-0">
                                        <p>★</p>
                                        {product.rating}
                                    </div>
                                </div>
                                <p className="text-xl mt-4 text-gray-500">{product.brand}</p>
                                <div className="flex items-center justify-between pt-2 mt-auto">
                                    <p className="text-xl font-medium">Price</p>
                                    <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                                </div>
                                <div className="pt-4">
                                    <Link href={`/popularSection/${product.id}`}>
                                        <button className="btn bg-[#00575E] text-[#F0B100] text-2xl py-6 w-full rounded-2xl btn-primary">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;        