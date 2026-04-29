import Image from 'next/image';
import React from 'react';

const Cart = ({ product }) => {
    return (
        <div>
            <div className="bg-base-100 shadow-xl p-2 border border-gray-500 rounded-2xl">
                <figure>
                    <Image className="rounded-2xl w-full" src={product.image} alt={product.name} width={200} height={125} />
                </figure>
                <div className="mt-4">
                    <div className="flex items-start justify-between gap-4">
                        <h2 className="card-title text-4xl">{product.name}</h2>
                        <div className="text-yellow-500 text-2xl font-semibold">★ 4.8</div>
                    </div>
                    <p className="text-xl mt-4 text-gray-500">{product.brand}</p>
                    <div className="flex items-center justify-between pt-2">
                        <p className="text-xl font-medium">Price</p>
                        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="pt-4 ">
                        <button className="btn bg-[#3b46a0]  text-2xl py-6 w-full rounded-2xl btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;