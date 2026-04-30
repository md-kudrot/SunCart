import Image from 'next/image';
import React from 'react';

const Tips = () => {
    return (
        <div>
            <h1>Summer Care Tips</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="">
                    <div className="">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className=""></div>

                </div>
            </div>
        </div>
    );
};

export default Tips;