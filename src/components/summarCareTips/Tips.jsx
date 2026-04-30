import Image from 'next/image';
import React from 'react';

const Tips = async () => {
    const res = await fetch('https://sun-cart-tau.vercel.app/summerTips.json');
    const summerTips = await res.json();
    console.log(summerTips);
    return (
        <div className=' p-8 mt-10'>
            <h1 className='text-4xl font-bold'>Summer Care Tips</h1>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    summerTips.map((tip) => (
                        <div key={tip.id} className=" p-4 rounded-lg shadow-md border border-gray-500 ">
                            <h2 className="text-xl font-semibold mt-2 text-[#f0b000ce]">{tip.title}</h2>
                            <p className="text-[#00575E]">{tip.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Tips;