import Image from 'next/image';
import React from 'react';

const Cart = ({ product }) => {
    return (
        <div className="bg-base-100 flex flex-col shadow-xl p-4 border border-gray-500 rounded-2xl h-full">
            <figure className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-2xl shrink-0 bg-white">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center p-2"
                />
            </figure>

            <div className="mt-4 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4">
                    <h2 className="card-title text-4xl line-clamp-2">{product.name}</h2>
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
                    <button className="btn bg-[#3b46a0] text-2xl py-6 w-full rounded-2xl btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;