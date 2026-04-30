import React from 'react';
import Image from 'next/image';
import Cart from '../../components/popularProducts/Cart';

const PopularCart = async () => {


    const res = await fetch('https://sun-cart-tau.vercel.app/products.json');
    const products = await res.json();
    const popularProducts = products.slice(0, 3);
    console.log(popularProducts);

    return (
        <div className='container mx-auto p-4 mt-10'>
            <h1 className='text-4xl font-bold mb-8'>Popular Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">

                {
                    popularProducts.map(product => <Cart key={product.id} product={product} />)
                }
               
            </div>
        </div>
    );
};

export default PopularCart;